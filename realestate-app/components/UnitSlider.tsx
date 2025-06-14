import React, { useState, useEffect } from "react";
import { mockUnits } from "@/types/mockUnits";
import styles from "../styles/UnitSlider.module.css";
import Link from "next/link";

const UnitSlider: React.FC<{ title: string; units: typeof mockUnits }> = ({ title, units }) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % units.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [units.length]);

  if (!units.length) return null;

  return (
    <div className={styles.sliderBox}>
      <h2 className={styles.sliderTitle}>{title}</h2>
      <div className={styles.sliderContent}>
        {units.map((unit, i) => (
          <div
            key={unit.id}
            className={styles.slide + (i === current ? ' ' + styles.active : '')}
            style={{ display: i === current ? 'block' : 'none' }}
          >
            <Link href={`/unit/${unit.id}`} className={styles.unitLink}>
              <img src={unit.images[0]} alt={unit.title} className={styles.unitImg} />
              <div className={styles.unitInfo}>
                <h3>{unit.title}</h3>
                <span>{unit.price.toLocaleString()} جنيه</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {units.map((_, i) => (
          <span
            key={i}
            className={styles.dot + (i === current ? ' ' + styles.activeDot : '')}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default UnitSlider;
