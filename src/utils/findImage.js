export const findImage = async (imageRoute) => {
  const images = import.meta.glob("../assets/images/*");

  const key = imageRoute.replace("~/", "../");

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
