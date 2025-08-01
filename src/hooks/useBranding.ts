import { useState, useEffect } from 'react';

export interface BrandingOptions {
  selectedFont: string;
  primaryColor: string;
  logoUrl: string;
}

export const useBranding = () => {
  const [selectedFont, setSelectedFont] = useState("Inter");
  const [primaryColor, setPrimaryColor] = useState("#2563eb");
  const [logoUrl, setLogoUrl] = useState("");

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setLogoUrl(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const reportStyle = {
    fontFamily: selectedFont,
    '--primary-color': primaryColor,
  } as React.CSSProperties;

  return {
    selectedFont,
    setSelectedFont,
    primaryColor,
    setPrimaryColor,
    logoUrl,
    setLogoUrl,
    handleLogoUpload,
    reportStyle,
  };
};