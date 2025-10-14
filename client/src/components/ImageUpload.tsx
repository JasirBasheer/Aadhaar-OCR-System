import { useRef, useState } from "react";
import "../assets/styles/ImageUpload.css";
import { ImageCard } from "./ImageCard";
import { useAadhaar } from "@/context/AadhaarContext";
import uploadAadhaarImages from "../services/uploadAadhaar.ts";
import { useMutation } from "@tanstack/react-query";


export const ImageUpload = () => {
  const frontImageRef = useRef<HTMLInputElement>(null);
  const backImageRef = useRef<HTMLInputElement>(null);

  const [frontPreview, setFrontPreview] = useState<string>("");
  const [backPreview, setBackPreview] = useState<string>("");

  const [frontFile, setFrontFile] = useState<File | null>(null);
  const [backFile, setBackFile] = useState<File | null>(null);

  const { setDetails } = useAadhaar();

  const uploadAadhaarImagesMutation = useMutation({
  mutationFn: uploadAadhaarImages,
  onSuccess: (data) => {
    console.log("Upload successful!", data);
    setDetails(data); 
  },
  onError: (err) => {
    console.error("Upload failed:", err);
  },
});

  const handleUpload = () => {
    if (!frontFile || !backFile) {
      alert("Please select both Aadhaar front and back images.");
      return;
    }

    uploadAadhaarImagesMutation.mutate({
      frontImage: frontFile,
      backImage: backFile,
    });
  };

  return (
    <div className="image-upload-parent">
      <div className="image-upload">
        <div className="frontImage">
          <h3>Aadhaar Front</h3>
          <ImageCard
            ImageRef={frontImageRef}
            ImagePreview={frontPreview}
            setImagePrev={setFrontPreview}
            setFile={setFrontFile}
          />
        </div>
        <div className="backImage">
          <h3>Aadhaar Back</h3>
          <ImageCard
            ImageRef={backImageRef}
            ImagePreview={backPreview}
            setImagePrev={setBackPreview}
            setFile={setBackFile}
          />
        </div>
      </div>
        <div className="parse-button" onClick={handleUpload}>Parse aadhaar</div>
    </div>
  );
};
