import React from "react";
import styles from "../../styles/AdminDashboard.module.css";

const DevelopersAdmin: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h2 className={styles.title}>إدارة المطورين العقاريين</h2>
      {/* هنا جدول المطورين مع إمكانية الإضافة والتعديل والحذف */}
      <div className={styles.sectionBox} style={{marginTop: 32}}>
        <span>قريبًا: إضافة وتعديل وحذف المطورين مع نبذة وإنجازات وصورة</span>
      </div>
    </div>
  );
};

export default DevelopersAdmin;
