import app from "./app.js";
import { buildImage } from "./utils/build_image.js";
import dotenv from "dotenv"

dotenv.config({
  path: "../.env"
})
buildImage().then((data) => {
  app.listen(3000, () => {
    console.log("App is running");
  });
})
.catch((err) => {
  console.log(err);
  process.exit(1);
})




// console.log(__dirname);
