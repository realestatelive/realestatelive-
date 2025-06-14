import React from "react";

export default function RealestateLiveLogo() {
  return (
    <div style={{display:'flex',alignItems:'center',gap:12,margin:'0 auto',justifyContent:'center'}}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="20" width="32" height="20" rx="6" fill="#1976d2" stroke="#ff9800" strokeWidth="2"/>
        <polygon points="24,6 8,20 40,20" fill="#ff9800" stroke="#1976d2" strokeWidth="2"/>
        <ellipse cx="24" cy="34" rx="7" ry="5" fill="#fff"/>
        <ellipse cx="19.5" cy="34" rx="2.2" ry="2.2" fill="#1976d2"/>
        <ellipse cx="28.5" cy="34" rx="2.2" ry="2.2" fill="#1976d2"/>
        <rect x="16" y="28" width="16" height="6" rx="3" fill="#fff" stroke="#1976d2" strokeWidth="1.5"/>
        <rect x="17.5" y="29.5" width="13" height="3" rx="1.5" fill="#ffd600"/>
        <ellipse cx="24" cy="41" rx="4" ry="1.2" fill="#ffd600"/>
        <ellipse cx="24" cy="32" rx="8" ry="3.5" fill="#fff" opacity="0.2"/>
        <ellipse cx="24" cy="34" rx="7" ry="5" fill="none" stroke="#1976d2" strokeWidth="1.5"/>
        {/* نظارة VR */}
        <rect x="15" y="30" width="18" height="6" rx="3" fill="#fff" stroke="#1976d2" strokeWidth="1.5"/>
        <ellipse cx="19.5" cy="33" rx="2.2" ry="2.2" fill="#1976d2"/>
        <ellipse cx="28.5" cy="33" rx="2.2" ry="2.2" fill="#1976d2"/>
        {/* ابتسامة */}
        <path d="M20 38 Q24 41 28 38" stroke="#ff9800" strokeWidth="2" fill="none"/>
      </svg>
      <span style={{fontWeight:'bold',fontSize:'2rem',color:'#1976d2',letterSpacing:'1px'}}>بيتي <span style={{color:'#ff9800'}}>AR</span></span>
    </div>
  );
}
