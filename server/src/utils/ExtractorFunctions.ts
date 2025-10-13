

export const extractUID = (text: string): string | null => {
  const digits = text.match(/\d+/g);
  return digits ? digits.join("").slice(-12) : null;
};


export const extractName = (frontText: string): string | null => {
  const lines = frontText
    .split(/\n|\r/)
    .map((line) => line.trim())
    .filter(Boolean);
  const dobIndex = lines.findIndex((line) => /DOB/i.test(line));
  return dobIndex > 0 ? lines[dobIndex - 1] : null;
};



export const extractDOB = (frontText: string): string | null => {
  const dobMatch = frontText.match(
    /DOB\s*[:\-]?\s*(\d{4}[-\/]\d{2}[-\/]\d{2}|\d{2}[-\/]\d{2}[-\/]\d{4})/i
  );
  return dobMatch?.[1] || null;
};



export const calculateAge = (dob: string | null): string | null => {
  if (!dob) return null;
  const birthYearMatch = dob.match(/\d{4}/);
  if (!birthYearMatch) return null;

  const birthYear = parseInt(birthYearMatch[0], 10);
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;

  if (age < 20) return "<20";
  if (age < 30) return "20-30";
  if (age < 40) return "30-40";
  if (age < 50) return "40-50";
  return "50+";
};



export const extractGender = (frontText: string): string | null => {
  const genderMatch = frontText.match(/(Male|Female|Transgender)/i);
  return genderMatch?.[1] || null;
};



export const extractAddress = (backText: string): string | null => {
  const addressMatch = backText.match(
    /address[:\-]?\s*([\s\S]+?)(Uttar Pradesh|[A-Z]{2,} - \d{6}|$)/i
  );
  return addressMatch?.[1].replace(/\n/g, " ").trim() || null;
};



export const extractPincode = (backText: string): string | null => {
  const pinMatches = backText.match(/\d{6}/g);
  return pinMatches?.[pinMatches.length - 1] || null;
};

