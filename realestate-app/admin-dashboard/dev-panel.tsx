import React from "react";
import styles from "../../styles/AdminDashboard.module.css";

const DevPanel: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h2 className={styles.title}>لوحة تحكم المطورين العقاريين</h2>
      {/* هنا يمكن لكل مطور إضافة وحداته ومتابعة العملاء */}
      <div className={styles.sectionBox} style={{marginTop: 32}}>
        <span>قريبًا: تسجيل دخول المطور، إضافة وحدات، متابعة العملاء، إدارة بياناته</span>
      </div>
      <footer style={{textAlign:'center',margin:'48px 0 12px 0',color:'#ffb300',fontWeight:'bold',fontSize:'1.1rem',textShadow:'0 0 8px #00ffe7'}}>
        جميع الحقوق محفوظة © one world. criptooman 2025
      </footer>
    </div>
  );
};

export default DevPanel;
