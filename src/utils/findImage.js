import { getAllImages } from "~/utils/getAllImages";

export const findImage = async (imagePath) => {
  if (typeof imagePath !== "string") {
    return null;
  }

  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  if (!imagePath.startsWith("~/assets")) {
    return null;
  } // For now only consume images using ~/assets alias (or absolute)

  const images = await getAllImages();
  const key = imagePath.replace("~/", "/src/");

  return typeof images[key] === "function"
    ? (await images[key]())["default"]
    : null;
};
