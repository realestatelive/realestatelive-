import React from "react";

const RealestateLiveLogo: React.FC<{ size?: number }> = ({ size = 44 }) => (
  <svg width={size * 4} height={size} viewBox="0 0 176 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="176" height="44" rx="14" fill="#fff" fillOpacity="0.7" />
    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontFamily="'Cairo', 'Tajawal', Arial, sans-serif" fontWeight="bold" fontSize="28" fill="#0070f3" letterSpacing="2">
      realestatelive
    </text>
    <circle cx="28" cy="22" r="14" fill="#00c6fb" />
    <rect x="18" y="12" width="20" height="20" rx="6" fill="#0070f3" fillOpacity="0.7" />
    <circle cx="28" cy="22" r="7" fill="#fff" />
  </svg>
);

export default RealestateLiveLogo;
