import React from "react";
import styles from "../../styles/AdminDashboard.module.css";

const SettingsAdmin: React.FC = () => {
  return (
    <div className={styles.dashboardContainer}>
      <h2 className={styles.title}>إعدادات التطبيق</h2>
      {/* هنا إعدادات عامة مثل الألوان، اللغة، صلاحيات المستخدمين... */}
      <div className={styles.sectionBox} style={{marginTop: 32}}>
        <span>قريبًا: إعدادات الألوان، اللغة، صلاحيات المستخدمين، وغيرها</span>
      </div>
    </div>
  );
};

export default SettingsAdmin;
