import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { CloudDownloadIcon, X } from "lucide-react";
import type { IFileInput } from "@/models/inputs";
import { getVideoThumbnail } from "@/utils/helpers";

export const FileField = ({
  id,
  text = "Upload file",
  accept = "image/png,image/webp",
  minFiles = 0,
  maxFiles = 5, // Default to max 5 files
  maxFileSize = 5 * 1024 * 1024, // Default to 5 MB per file
  multiple = false,
}: IFileInput) => {
  const [filesData, setFilesData] = useState<{ file: File; preview: string }[]>(
    [],
  );
  const [dragActive, setDragActive] = useState(false);

  // React Hook Form
  const {
    register,
    formState: { errors },
    setValue,
    setError,
  } = useFormContext();
  const error = errors[id]?.message as string;
  console.log("errors", errors);
  // File removal
  const onClickClear = (index: number) => {
    setFilesData((prevFiles) => {
      const updatedFiles = prevFiles.filter((_, i) => i !== index);
      setValue(
        id,
        updatedFiles.map(({ file }) => file),
        { shouldValidate: true },
      );
      return updatedFiles;
    });
  };

  // Validate files
  const validateFiles = (fileList: File[]) => {
    console.log("fileList", fileList);
    if (fileList.length < minFiles) {
      return `Please upload at least ${minFiles} file(s).`;
    }
    if (fileList.length > maxFiles) {
      return `You can upload a maximum of ${maxFiles} files.`;
    }
    if (fileList.some((file) => !accept.includes(file.type))) {
      return `Only ${accept} types are allowed.`;
    }
    if (fileList.some((file) => file.size > maxFileSize)) {
      return `One file exceeds the maximum size of ${(
        maxFileSize /
        1024 /
        1024
      ).toFixed(1)} MB.`;
    }

    return true;
  };

  // File change handler (either drag and drop or select)
  const onChangeHandler = async (
    e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLLabelElement>,
  ) => {
    const selectedFiles: FileList | null =
      "dataTransfer" in e ? e.dataTransfer.files : e.target.files;
    if (!selectedFiles) return;

    const fileArray = Array.from(selectedFiles);

    // Run validation before updating state
    const validationResult = validateFiles(fileArray);
    if (validationResult !== true) {
      setError(id, { message: validationResult });
      return;
    }

    // Remove duplicates
    const existingFiles = new Set(
      filesData.map(({ file }) => file.name + file.size),
    );
    const uniqueFiles = fileArray.filter(
      (file) => !existingFiles.has(file.name + file.size),
    );

    if (uniqueFiles.length === 0) {
      setError(id, { message: "You cannot upload duplicate files." });
      return;
    }

    // Handle preview generation
    const processedFiles = await Promise.all(
      uniqueFiles.map(async (file) => {
        let preview = "";
        if (file.type.startsWith("image/")) {
          preview = URL.createObjectURL(file);
        } else if (file.type.startsWith("video/")) {
          preview = await getVideoThumbnail(file);
        } else if (file.type === "application/pdf") {
          preview = URL.createObjectURL(file);
        }
        return { file, preview };
      }),
    );

    // ✅ Ensure the form value is always an array of `File[]`
    const updatedFiles = [...filesData.map(({ file }) => file), ...uniqueFiles];
    setValue(id, updatedFiles, { shouldValidate: true });
    setFilesData((prev) => [...prev, ...processedFiles]);
  };

  // Drag events
  const onDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragActive(true);
  };
  const onDragLeave = () => {
    setDragActive(false);
  };
  const onDropHandler = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files) {
      onChangeHandler(e);
    }
  };

  return (
    <div
      style={{ "--card-h": "345px" } as React.CSSProperties}
      className="flex flex-col gap-2"
    >
      <label
        className={`relative flex w-full cursor-pointer flex-col items-center gap-2 rounded-md border border-border p-4 transition ${dragActive ? "bg-foreground" : ""}`}
        htmlFor={id}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDropHandler}
      >
        <div className="flex flex-col items-center gap-2 text-text-primary">
          <div className="flex items-center gap-1">
            {/* <DownloadIcon /> */}
            <span className="text-2xl">{text}</span>
          </div>
          {error && <span className="text-sm text-error">{error}</span>}
        </div>
        <div
          className={`flex h-50 w-full items-center justify-center gap-2 rounded-sm border border-dashed border-primary transition-colors ${dragActive ? "bg-foreground" : ""}`}
        >
          <CloudDownloadIcon size={50} className="text-primary" />
          <span className="text-xl">Drag and drop files here</span>
        </div>
        <input
          id={id}
          className="hidden"
          type="file"
          accept={accept}
          multiple={multiple}
          {...register(id, {
            onChange: onChangeHandler,
            validate: validateFiles,
          })}
        />
      </label>

      {filesData.length > 0 ? (
        <div className="flex flex-col gap-4 rounded-md border border-border p-2">
          {filesData.map(({ file, preview }, i) => (
            <div
              key={file.name}
              className="relative flex w-full items-center gap-1 rounded-md border border-success p-2"
            >
              {preview &&
                (file.type.startsWith("image/") ||
                  file.type.startsWith("video/")) && (
                  <img
                    className="h-13 rounded-md bg-foreground object-contain"
                    src={preview}
                    alt="Preview"
                    width={52}
                    height={52}
                  />
                )}
              {preview && file.type === "application/pdf" && (
                <iframe src={preview} width={52} height={52} />
              )}

              <p className="text-md text-highlight truncate">{file.name}</p>
              <div className="text-sm">
                <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
                <p className="truncate">Type: {file.type}</p>
              </div>
              <button
                className="flex min-w-6 grow justify-end text-error"
                onClick={() => onClickClear(i)}
              >
                <X />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <span className="flex items-center justify-center rounded-md border border-border p-4 font-bold uppercase">
          no files loaded
        </span>
      )}
    </div>
  );
};
