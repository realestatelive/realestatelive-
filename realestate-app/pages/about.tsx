import React from "react";

export default function About() {
  return (
    <div style={{maxWidth:800,margin:"48px auto",background:"rgba(255,255,255,0.25)",borderRadius:22,padding:32,border:"2.5px solid #1976d2",boxShadow:"0 8px 32px 0 rgba(31,38,135,0.18)",backdropFilter:'blur(16px)'}}>
      <h1 style={{color:'#ff9800',fontWeight:'bold',fontSize:'2.2rem'}}>من نحن</h1>
      <p style={{color:'#1976d2',fontWeight:'bold',fontSize:'1.1rem',marginTop:18,lineHeight:2}}>
        بيتي AR هو تطبيق عقاري احترافي عالمي يربطك بأفضل الوحدات والمطورين والكمباوندات في مصر والعالم العربي، مع تجربة مستخدم ذكية وواجهة عصرية. هدفنا تسهيل رحلة البحث عن العقار المثالي عبر الذكاء الاصطناعي، الخرائط التفاعلية، الصور البانورامية، ونماذج 3D/AR، مع دعم لغتين وتجربة فريدة لكل عميل.
      </p>
      <h2 style={{color:'#43a047',marginTop:32}}>رؤيتنا</h2>
      <p style={{color:'#1976d2',fontWeight:'bold'}}>أن نكون المنصة العقارية الأكثر ابتكارًا وموثوقية في الشرق الأوسط.</p>
      <h2 style={{color:'#ffd600',marginTop:32}}>فريق العمل</h2>
      <p style={{color:'#43a047',fontWeight:'bold'}}>One World. criptooman - نخبة من المطورين وخبراء العقار والتقنية.</p>
    </div>
  );
}
