import React from "react";
import styles from "@/styles/AdsBar.module.css";

const ads = [
  "عروض الصيف: خصومات حتى 20% على وحدات بالم هيلز!",
  "امتلك شقتك في التجمع الخامس بأقل مقدم وأطول فترة سداد.",
  "قصر فاخر للبيع في الساحل الشمالي - إطلالة بحرية مباشرة!",
  "فرصة ذهبية للاستثمار في العاصمة الإدارية الجديدة."
];

const AdsBar: React.FC = () => {
  return (
    <div className={styles.adsBar}>
      <span className={styles.adsText}>
        {ads.map((ad, i) => (
          <span key={i} style={{ margin: "0 48px" }}>{ad}</span>
        ))}
      </span>
    </div>
  );
};

export default AdsBar;
