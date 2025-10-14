import "../assets/styles/LandingPage.css"
import AadhaarLogo from "../assets/images/AadhaarLogo.png";
import { AadhaarDetails, ImageUpload } from "@/components";


const LandingPage = () => {
  return (
     <div className="home-page">
      <div className="home-header">
      <img src={AadhaarLogo} alt="aadhaar png" className="aadhaar-logo" />
        <h1>Aadhaar OCR System</h1>
      </div>
      <div className="home-content">

      <ImageUpload/>
      <AadhaarDetails/>
      </div>

    </div>
  )
}

export default LandingPage