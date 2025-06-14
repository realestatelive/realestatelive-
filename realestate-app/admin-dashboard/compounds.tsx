cd /workspaces/realestatelive-/realestate-app
npm install
npm run dev -- --port 3001import React from "react";
import styles from "../../styles/AdminDashboard.module.css";

const CompoundsAdmin: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h2 className={styles.title}>إدارة الكمباوندات</h2>
      {/* هنا جدول الكمباوندات مع إمكانية الإضافة والتعديل والحذف */}
      <div className={styles.sectionBox} style={{marginTop: 32}}>
        <span>قريبًا: إضافة وتعديل وحذف الكمباوندات مع نبذة ومرافق وصورة</span>
      </div>
    </div>
  );
};

export default CompoundsAdmin;
