import * as url from "url";

const __src = url.fileURLToPath(new URL("../", import.meta.url));

export const getRelativeUrlByFilePath = (filepath) => {
  if (filepath) {
    return "/" + filepath.substring(__src.length);
  }

  return null;
};
