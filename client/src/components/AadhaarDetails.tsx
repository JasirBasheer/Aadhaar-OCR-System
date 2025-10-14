import { useAadhaar } from "@/context/AadhaarContext";
import "../assets/styles/AadhaarDetails.css";

export const AadhaarDetails = () => {
  const { details } = useAadhaar();

  return (
    <div className="card-body">
      <h3>Details: </h3>
      <div className="api-response-box">
        {!details ? (
          <p>Get started with OCR by adding your Aadhaar front and back</p>
        ) : (
          <ul>
            <li><strong>Name:</strong> {details.name || "N/A"}</li>
            <li><strong>DOB:</strong> {details.dob || "N/A"}</li>
            <li><strong>Gender:</strong> {details.gender || "N/A"}</li>
            <li><strong>UID:</strong> {details.UID || "N/A"}</li>
            <li><strong>Address:</strong> {details.address || "N/A"}</li>
            <li><strong>Pincode:</strong> {details.pincode || "N/A"}</li>
            <li><strong>Age Band:</strong> {details.ageBand || "N/A"}</li>
          </ul>
        )}
      </div>
    </div>
  );
};

