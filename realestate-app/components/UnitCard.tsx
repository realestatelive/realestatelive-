import React from "react";
import { Unit } from "@/types/realestate";
import styles from "@/styles/UnitCard.module.css";
import Link from "next/link";

const UnitCard: React.FC<{ unit: Unit }> = ({ unit }) => {
  return (
    <div className={styles.card}>
      <Link href={`/unit/${unit.id}`} className={styles.imgBox}>
        <img src={unit.images[0]} alt={unit.title} className={styles.img} />
        {unit.panoramaImages && <span className={styles.badge}>بانوراما</span>}
        {unit.model3dUrl && <span className={styles.badge3d}>3D</span>}
        {unit.vrUrl && <span className={styles.badgeVR}>VR</span>}
      </Link>
      <div className={styles.info}>
        <h3 className={styles.title}>{unit.title}</h3>
        <div className={styles.meta}>
          <span>النوع: {unit.type}</span>
          <span>الغرف: {unit.bedrooms}</span>
          <span>الحمامات: {unit.bathrooms}</span>
          <span>المساحة: {unit.area}م²</span>
        </div>
        <div className={styles.price}>{unit.price.toLocaleString()} جنيه</div>
        <div className={styles.features}>
          {unit.garden && <span>🌳 حديقة</span>}
          {unit.pool && <span>🏊‍♂️ حمام سباحة</span>}
          {unit.floors > 1 && <span>🏢 {unit.floors} طوابق</span>}
        </div>
        <Link href={`/unit/${unit.id}`} className={styles.detailsBtn}>تفاصيل</Link>
      </div>
    </div>
  );
};

export default UnitCard;
