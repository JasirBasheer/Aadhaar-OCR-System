import { NextFunction, Request, Response } from "express";

export interface IOcrController {
  getAadhaarDetails(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void>;
}
