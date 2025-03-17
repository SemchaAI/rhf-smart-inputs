export const getVideoThumbnail = (file: File): Promise<string> => {
  return new Promise((resolve) => {
    const video = document.createElement("video");
    video.src = URL.createObjectURL(file);
    video.crossOrigin = "anonymous";
    video.muted = true; // Prevent autoplay issues
    video.preload = "metadata"; // Load only metadata, not full video

    video.onloadeddata = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return resolve("");

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      video.currentTime = 0.1; // Seek to 0.1 seconds (avoid black frames)

      video.onseeked = () => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          if (blob) resolve(URL.createObjectURL(blob));
        }, "image/png");
      };
    };
  });
};
