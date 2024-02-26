import express from "express";
import cors from "cors";
import codeExecuter from "./routes/code.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";
const app = express();

app.use(cors());
app.use(express.json());

// This is used to recive the data in url format
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// It is used to add all the file and folder in a public folder
app.use(express.static("public"));
app.use(errorHandler);

app.use("/api", codeExecuter);

export default app;
