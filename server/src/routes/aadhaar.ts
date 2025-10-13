import { IOcrController } from "@/controllers";
import { asyncHandler } from "@/middlewares/asyncHandler";
import { uploadAadhaarImages } from "@/middlewares/multer";
import { Router } from "express";
import { container } from "tsyringe";

const router = Router();

const OcrController = container.resolve<IOcrController>("OcrController");

router.post("/", uploadAadhaarImages, asyncHandler(OcrController.getAadhaarDetails.bind(OcrController)));

export default router;
