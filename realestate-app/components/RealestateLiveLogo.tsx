import React from "react";

export default function RealestateLiveLogo() {
  return (
    <div style={{display:'flex',alignItems:'center',gap:12,margin:'0 auto',justifyContent:'center'}}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="20" width="32" height="20" rx="6" fill="#3867d6" stroke="#f7b731" strokeWidth="2"/>
        <polygon points="24,6 8,20 40,20" fill="#f7b731" stroke="#3867d6" strokeWidth="2"/>
        <ellipse cx="24" cy="34" rx="7" ry="5" fill="#fff"/>
        <ellipse cx="19.5" cy="34" rx="2.2" ry="2.2" fill="#3867d6"/>
        <ellipse cx="28.5" cy="34" rx="2.2" ry="2.2" fill="#3867d6"/>
        <rect x="16" y="28" width="16" height="6" rx="3" fill="#fff" stroke="#3867d6" strokeWidth="1.5"/>
        <rect x="17.5" y="29.5" width="13" height="3" rx="1.5" fill="#f7b731"/>
        <ellipse cx="24" cy="41" rx="4" ry="1.2" fill="#f7b731"/>
        <ellipse cx="24" cy="32" rx="8" ry="3.5" fill="#fff" opacity="0.2"/>
        <ellipse cx="24" cy="34" rx="7" ry="5" fill="none" stroke="#3867d6" strokeWidth="1.5"/>
        {/* نظارة VR */}
        <rect x="15" y="30" width="18" height="6" rx="3" fill="#fff" stroke="#3867d6" strokeWidth="1.5"/>
        <ellipse cx="19.5" cy="33" rx="2.2" ry="2.2" fill="#3867d6"/>
        <ellipse cx="28.5" cy="33" rx="2.2" ry="2.2" fill="#3867d6"/>
        {/* ابتسامة */}
        <path d="M20 38 Q24 41 28 38" stroke="#f7b731" strokeWidth="2" fill="none"/>
      </svg>
      <span style={{fontWeight:'bold',fontSize:'2rem',color:'#3867d6',letterSpacing:'1px'}}>BaiTK <span style={{color:'#f7b731'}}>AR</span></span>
    </div>
  );
}
