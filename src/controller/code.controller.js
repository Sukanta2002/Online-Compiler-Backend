import { dockerRun } from "../utils/docker_run.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponce } from "../utils/apiResponce.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import fs from "fs";

// All the list of languages can be executed
const langs = {
  python: "py",
  javascript: "js",
  java: "java",
  c: "c",
  cpp: "cpp",
};

const executeController = asyncHandler(async (req, res) => {
  // recive the code and lang from the user
  const { lang, code } = await req.body;
  // console.log(lang + code);
  // check iff the are not present
  if (!lang && !code) {
    throw new ApiError(400, "Lang and code is not present");
  }
  // check if the lange is out of the list
  // console.log(Object.keys(langs).includes(lang));
  if (!Object.keys(langs).includes(lang)) {
    throw new ApiError(400, "Lang is not present");
  }
  // create the code file to run
  console.log(langs[lang]);
  fs.writeFileSync(
    `${process.env.DOCKER_FILE_PATH}/${lang}/test.${langs[lang]}`,
    code
  );
  console.log("file created");
  // start the docker
  const isExecuted = await dockerRun(lang);
  if (!isExecuted) {
    throw new ApiError(500, "Error in docker");
  }
  

  // check id output is present or not
  console.log("checking");
  if (!fs.existsSync(`${process.env.DOCKER_FILE_PATH}/${lang}/output.txt`)) {
    console.log("from exist check");
    fs.unlinkSync(`${process.env.DOCKER_FILE_PATH}/${lang}/test.${langs[lang]}`);
    throw new ApiError(500,"Some Internal error error")
  }
  console.log('finish check');
  // get the data from the output file
  
  const data = fs.readFileSync(
    `${process.env.DOCKER_FILE_PATH}/${lang}/output.txt`
  );
  // delete the output file
  fs.unlinkSync(`${process.env.DOCKER_FILE_PATH}/${lang}/output.txt`);
  // delete the code file
  fs.unlinkSync(`${process.env.DOCKER_FILE_PATH}/${lang}/test.${langs[lang]}`);
  res.status(200).json(new ApiResponce(200, data.toString(), "Success"));
});

// const executeController = async (req, res) => {
//   try {
//     const { lang, code } = await req.body;
//     if (!lang && !code) {
//       res.status(400).json({
//         msg: "No lang or code present",
//       });
//     }
//     fs.writeFileSync(`${process.env.DOCKER_FILE_PATH}/python/test.py`, code);
//     const isExecuted = await dockerRun(lang);
//     if (!isExecuted) {
//       res.status(400).json({
//         msg: "Some error occoured",
//       });
//       return;
//     }
//     const data = fs.readFileSync(
//       `${process.env.DOCKER_FILE_PATH}/python/output.txt`
//     );
//     res.status(200).json({
//       output: data.toString(),
//     });
//   } catch (error) {
//     res.status(400).json({
//       msg: error,
//     });
//   }
// };
export { executeController };
