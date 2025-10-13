import "reflect-metadata";
import { container } from "tsyringe";
import { IOcrController, OcrController } from "@/controllers";
import { IOcrService, ITesseractService, OcrService, TesseractService } from "@/service";

container.registerSingleton<IOcrController>("OcrController", OcrController);
container.registerSingleton<IOcrService>("OcrService", OcrService);
container.registerSingleton<ITesseractService>("TesseractService", TesseractService);
