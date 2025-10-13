import { HttpResCode, HttpResMsg } from "@/constants";
import { CustomError } from "@/errors";
import { IOcrService } from "@/service/Interface/IOcrService";
import { MulterFiles } from "@/types";
import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { IOcrController } from "../Interface/IOcrController";

@injectable()
export class OcrController implements IOcrController {
  constructor(@inject("OcrService") private _ocrService: IOcrService) {}

  async getAadhaarDetails(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const files = req.files as MulterFiles;

      if (!files || !files.aadhaarFront || !files.aadhaarBack) {
        return next(
          new CustomError(
            HttpResMsg.BOTH_IMAGES_NEEDED,
            HttpResCode.BAD_REQUEST
          )
        );
      }

      const result = await this._ocrService.processAadhaar(
        files.aadhaarFront[0].path,
        files.aadhaarFront[0].path
      );

      res.status(200).json({
        message: HttpResMsg.IMAGE_UPLOADED_SUCCESSFULLY,
        result,
      });
    } catch (error) {
      if (error instanceof CustomError) return next(error);
      next(
        new CustomError(
          HttpResMsg.FAILED_TO_EXTRACT_DETAILS,
          HttpResCode.INTERNAL_SERVER_ERROR
        )
      );
    }
  }
}
