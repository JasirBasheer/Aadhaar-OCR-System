
import { AadhaarDetails } from "types";
import { calculateAge, extractAddress, extractDOB, extractGender, extractName, extractPincode, extractUID } from "./ExtractorFunctions";

export const extractDetails =  function(
  frontText: string,
  backText: string
): AadhaarDetails {
  const frontUID = extractUID(frontText);
  const backUID = extractUID(backText);

  const result: AadhaarDetails = {
    name: extractName(frontText),
    dob: extractDOB(frontText),
    gender: extractGender(frontText),
    UID: frontUID,
    isUIDsame:
      frontUID !== null && backUID !== null ? frontUID === backUID : false,
    address: extractAddress(backText),
    pincode: extractPincode(backText),
    ageBand: calculateAge(extractDOB(frontText)),
  };

  return result;
}

