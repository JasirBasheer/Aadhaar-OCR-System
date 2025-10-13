import { injectable, inject } from "tsyringe";
import { AadhaarDetails } from "types";
import { IOcrService } from "../Interface/IOcrService";
import { extractDetails } from "@/utils";
import { CustomError } from "@/errors";
import { HttpResCode, HttpResMsg } from "@/constants";
import { ITesseractService } from "../Interface/ITesseractService";


@injectable()
export class OcrService implements IOcrService {
  constructor(
    @inject("TesseractService") private _tesseractService: ITesseractService,
  ) {}

  async processAadhaar(frontPath: string, backPath: string): Promise<AadhaarDetails> {
    try {
      const [frontText, backText] = await Promise.all([
        this._tesseractService.recognize(frontPath),
        this._tesseractService.recognize(backPath),
      ]);

      const parsedData = extractDetails(frontText, backText);

      if (!parsedData.isUIDsame) {
        throw new CustomError(HttpResMsg.UID_IS_NOT_SAME, HttpResCode.BAD_REQUEST);
      }

      return parsedData;
    } catch (error) {
      console.error(HttpResMsg.FAILED_TO_EXTRACT_DETAILS);
      if (error instanceof CustomError) throw error;
      throw new CustomError(HttpResMsg.FAILED_TO_EXTRACT_DETAILS, HttpResCode.INTERNAL_SERVER_ERROR);
    } 
    
  }
}
