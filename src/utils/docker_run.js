import { exec } from "child_process";
import { ApiError } from "./apiError.js";

export const dockerRun = (lang) => {
  if (!lang) {
    console.log("error: invalid language");
    throw new ApiError(400,"error occoured")
  }
  return new Promise((resolve, reject) => {
    exec(`docker run --rm -v ${process.env.DOCKER_FILE_PATH}/${lang}:/code code`, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
        reject(error)
      }
      console.log(stdout);
      resolve(stdout ? stdout : stderr);
    });
  });
}
