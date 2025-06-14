import React from "react";

export default function Contact() {
  return (
    <div style={{maxWidth:800,margin:"48px auto",background:"rgba(255,255,255,0.25)",borderRadius:22,padding:32,border:"2.5px solid #1976d2",boxShadow:"0 8px 32px 0 rgba(31,38,135,0.18)",backdropFilter:'blur(16px)'}}>
      <h1 style={{color:'#ff9800',fontWeight:'bold',fontSize:'2.2rem'}}>تواصل معنا</h1>
      <p style={{color:'#1976d2',fontWeight:'bold',fontSize:'1.1rem',marginTop:18,lineHeight:2}}>
        يسعدنا تواصلك معنا لأي استفسار أو اقتراح أو دعم فني. يمكنك مراسلتنا عبر البريد الإلكتروني:
      </p>
      <p style={{color:'#43a047',fontWeight:'bold',fontSize:'1.1rem'}}>info@baytiar.com</p>
      <p style={{color:'#ffd600',fontWeight:'bold',marginTop:24}}>أو عبر الواتساب: <span style={{color:'#ff3b3b'}}>+201234567890</span></p>
      <p style={{color:'#1976d2',fontWeight:'bold',marginTop:24}}>جميع الحقوق محفوظة © بيتي AR 2025</p>
    </div>
  );
}
