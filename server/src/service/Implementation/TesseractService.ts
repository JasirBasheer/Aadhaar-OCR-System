import Tesseract from "tesseract.js";
import { ITesseractService } from "../Interface/ITesseractService";

export class TesseractService implements ITesseractService {
  async recognize(imagePath: string): Promise<string> {
    try {
      const { data } = await Tesseract.recognize(imagePath, "eng");
      return data.text || "";
    } catch (error) {
      console.error("Tesseract OCR error:", error);
      return "";
    }
  }
}
