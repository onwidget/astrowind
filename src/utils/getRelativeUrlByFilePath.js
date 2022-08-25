import path from "path";
import { getProjectRootDir } from "./getProjectRootDir";

const __srcFolder = path.join(getProjectRootDir(), "/src");

export const getRelativeUrlByFilePath = (filepath) => {
  if (filepath) {
    return filepath.replace(__srcFolder, "");
  }

  return null;
};
