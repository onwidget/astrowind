import { fetchLocalImages } from "~/utils/fetchLocalImages";

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

  const images = await fetchLocalImages();
  const key = imagePath.replace("~/", "/src/");

  return typeof images[key] === "function"
    ? (await images[key]())["default"]
    : null;
};
