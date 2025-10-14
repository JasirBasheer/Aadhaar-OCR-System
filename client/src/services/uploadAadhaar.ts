import api from "@/config/axios.config";

const uploadAadhaarImages = async (data: {
  frontImage: File;
  backImage: File;
}) => {
  const formData = new FormData();
  formData.append("aadhaarFront", data.frontImage);
  formData.append("aadhaarBack", data.backImage);

  const response = await api.post("/parse", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data.result;
};

export default uploadAadhaarImages