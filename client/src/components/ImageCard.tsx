import "../assets/styles/ImageCard.css"
import React from "react";
import { Upload, Image } from "lucide-react"

interface ImageCardProps {
  ImageRef: React.RefObject<HTMLInputElement>;
  ImagePreview: string;
  setImagePrev: React.Dispatch<React.SetStateAction<string>>;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

export const ImageCard = ({ ImageRef, ImagePreview, setImagePrev, setFile }: ImageCardProps) => {
  const handleClick = () => {
    ImageRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      alert("Please select an image!");
      return;
    }
    setFile(file)
    setImagePrev(URL.createObjectURL(file));
  };

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setImagePrev("");
    setFile(null)
    if (ImageRef.current) ImageRef.current.value = "";
  };

  return (
    <div className="image-card">
      {!ImagePreview ? (
        <div className="upload-card" onClick={handleClick}>
          <Upload/>
          <p>Click to upload image</p>
        </div>
      ) : (
      <>
        <div className="image-preview" onClick={handleClick}>
            <button className="remove-image-btn" onClick={handleRemove}>
              X
            </button>
            <img src={ImagePreview}  alt="preview" className="aadhaar-preview-image" />
   
        </div>
               <div className="change-image-div">
            <button className="change-image-btn" onClick={handleClick}>
            <Image/>
              Press to Change
            </button>
          </div>
          </>
      )}
      <input
        type="file"
        accept="image/*"
        ref={ImageRef}
        className="aadhaar-input"
        onChange={handleChange}
      />
    </div>
  );
};

