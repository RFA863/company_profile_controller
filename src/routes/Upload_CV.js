import Express from "express";

import UploadCvController from "../controller/Upload_CV.js";

const router = Express.Router();

router.get("/", UploadCvController.getTest);

export default router;
