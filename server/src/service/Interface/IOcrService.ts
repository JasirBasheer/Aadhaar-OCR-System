import { AadhaarDetails } from "@/types";

export interface IOcrService {
  processAadhaar(frontPath: string, backPath: string): Promise<AadhaarDetails>;
}
