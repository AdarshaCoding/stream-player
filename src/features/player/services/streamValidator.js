export const validateStream = (url) => {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    video.src = url;

    video.addEventListener("loadeddata", () => {
      resolve("Stream Loaded Successfully");
    });

    video.addEventListener("error", () => {
      reject("Stream Failed");
    });
  });
};
