export interface ITesseractService {
  recognize(imagePath: string): Promise<string>;
}