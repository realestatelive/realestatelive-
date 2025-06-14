import React, { useState } from "react";
import Link from "next/link";
import styles from "../styles/AdminDashboard.module.css";

const AdminDashboard: React.FC = () => {
  const [images, setImages] = useState<string[]>([
    "/real1.jpg",
    "/real2.jpg",
    "/real3.jpg"
  ]);
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setImages([...images, url]);
    }
  };
  const handleRemove = (idx: number) => {
    setImages(images.filter((_, i) => i !== idx));
  };
  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.title}>لوحة تحكم RealEstateLive</h1>
      <div className={styles.sections}>
        <Link href="/admin-dashboard/developers" className={styles.sectionBox}>
          <span>المطورين العقاريين</span>
        </Link>
        <Link href="/admin-dashboard/compounds" className={styles.sectionBox}>
          <span>الكمباوندات</span>
        </Link>
        <Link href="/admin-dashboard/units" className={styles.sectionBox}>
          <span>الوحدات العقارية</span>
        </Link>
        <Link href="/admin-dashboard/settings" className={styles.sectionBox}>
          <span>إعدادات التطبيق</span>
        </Link>
      </div>
      <div style={{marginTop: '32px'}}>
        <h2 className={styles.title}>إدارة صور الإعلانات</h2>
        <div style={{display:'flex',gap:24,flexWrap:'wrap',margin:'24px 0'}}>
          {images.map((img, i) => (
            <div key={i} style={{position:'relative'}}>
              <img src={img} alt="إعلان" style={{width:160,height:100,borderRadius:8,objectFit:'cover',boxShadow:'0 2px 8px #3867d6'}} />
              <button onClick={()=>handleRemove(i)} style={{position:'absolute',top:4,right:4,background:'#f7b731',color:'#fff',border:'none',borderRadius:6,padding:'2px 8px',cursor:'pointer'}}>حذف</button>
            </div>
          ))}
          <label style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:160,height:100,border:'2px dashed #3867d6',borderRadius:8,cursor:'pointer',color:'#3867d6',fontWeight:'bold'}}>
            + إضافة صورة
            <input type="file" accept="image/*" style={{display:'none'}} onChange={handleUpload} />
          </label>
        </div>
      </div>
      <div style={{marginTop: '32px'}}>
        <h2 className={styles.title}>إدارة صور ونماذج الوحدات</h2>
        <div style={{border:'2px solid #3867d6',borderRadius:12,padding:18,margin:'18px 0',background:'#fff'}}>
          <h3 style={{color:'#3867d6'}}>شقة في مدينتي</h3>
          <div style={{display:'flex',gap:16,flexWrap:'wrap',margin:'12px 0'}}>
            <img src="/real1.jpg" alt="وحدة" style={{width:100,height:70,borderRadius:6,objectFit:'cover',boxShadow:'0 2px 8px #3867d6'}} />
            <label style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:100,height:70,border:'2px dashed #f7b731',borderRadius:6,cursor:'pointer',color:'#f7b731',fontWeight:'bold'}}>
              + صورة
              <input type="file" accept="image/*" style={{display:'none'}} />
            </label>
          </div>
          <div style={{margin:'8px 0'}}>
            <label style={{color:'#3867d6',fontWeight:'bold'}}>نموذج 3D: </label>
            <span style={{color:'#f7b731',marginRight:8}}>تم الرفع</span>
            <input type="file" accept=".glb,.gltf,.obj" />
          </div>
          <div style={{margin:'8px 0'}}>
            <label style={{color:'#3867d6',fontWeight:'bold'}}>نموذج VR: </label>
            <span style={{color:'#f7b731',marginRight:8}}>تم الرفع</span>
            <input type="file" accept=".html,.vr,.zip" />
          </div>
          <div style={{margin:'8px 0',display:'flex',gap:8}}>
            <label style={{color:'#3867d6',fontWeight:'bold'}}>إحداثيات الخريطة:</label>
            <input type="number" defaultValue={31.6275} step="0.0001" style={{width:100}} />
            <input type="number" defaultValue={30.0665} step="0.0001" style={{width:100}} />
          </div>
        </div>
      </div>
      <footer style={{textAlign:'center',margin:'48px 0 12px 0',color:'#ffb300',fontWeight:'bold',fontSize:'1.1rem',textShadow:'0 0 8px #00ffe7'}}>
        جميع الحقوق محفوظة © one world. criptooman 2025
      </footer>
    </div>
  );
};

export default AdminDashboard;
