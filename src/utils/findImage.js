import { getAllImages } from "~/utils/getAllImages";

export const findImage = async (imageRoute) => {
  const images = await getAllImages();

  const key = imageRoute.replace("~/", "/src/");

  const image =
    typeof imageRoute === "string" &&
    (imageRoute.startsWith("/") ||
      imageRoute.startsWith("http://") ||
      imageRoute.startsWith("https://"))
      ? imageRoute
      : typeof images[key] === "function"
      ? (await images[key]())["default"]
      : null;

  return image;
};
