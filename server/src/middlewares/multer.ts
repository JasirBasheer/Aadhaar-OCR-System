import { upload } from "@/config";

export const uploadAadhaarImages = upload.fields([
  {
    name: "aadhaarFront",
    maxCount: 1,
  },
  {
    name: "aadhaarBack",
    maxCount: 1,
  },
]);

