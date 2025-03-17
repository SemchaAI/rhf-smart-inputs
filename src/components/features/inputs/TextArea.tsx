import { useFormContext } from "react-hook-form";

interface IProps {
  id: string;
  className?: string;
  placeholder?: string;
}

export const TextArea = ({ id, placeholder, className, ...props }: IProps) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const value = watch(id);

  return (
    <div className="relative w-full">
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        {...register(id)}
        {...props}
        className={`min-h-[100px] w-full resize-none rounded-lg border border-border bg-background p-3 text-text-primary outline-none focus:border-primary ${className || ""} `}
      />
      {errors[id] && (
        <p className="mt-1 text-sm text-error">
          {errors[id]?.message as string}
        </p>
      )}
    </div>
  );
};

TextArea.displayName = "TextArea";
