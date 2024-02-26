import { exec } from "child_process";

export const buildImage = () => {
  return new Promise((resolve, reject) => {
    exec(`docker build -t code ${process.env.DOCKER_FILE_PATH}`, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
        reject(error)
      }
      resolve(stdout ? stdout : stderr);
    });
  });
};

// function execShellCommand(cmd) {
//   const exec = require("child_process").exec;
//   return new Promise((resolve, reject) => {
//     exec(cmd, (error, stdout, stderr) => {
//       if (error) {
//         console.warn(error);
//       }
//       resolve(stdout ? stdout : stderr);
//     });
//   });
// }

//  exec(`docker build -t code ${process.env.DOCKER_FILE_PATH}`
