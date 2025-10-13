import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary.config";

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (_req, file) => {
    return {
      folder: "aadhaar_uploads",
      format: file.mimetype.split("/")[1], 
      public_id: `${file.fieldname}-${Date.now()}`,
    };
  },
});

export const upload = multer({ storage });

