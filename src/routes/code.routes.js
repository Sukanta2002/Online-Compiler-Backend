import { Router } from "express";
import { executeController } from "../controller/code.controller.js";

const router = Router();

router.route("/code").post(executeController);

export default router;
