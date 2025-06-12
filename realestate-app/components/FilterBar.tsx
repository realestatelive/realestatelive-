import React, { useState } from "react";
import styles from "@/styles/FilterBar.module.css";
import { mockDevelopers, mockCompounds } from "@/types/mockDevelopers";

const unitTypes = [
  "قصر",
  "فيلا",
  "تاون هاوس",
  "توين هاوس",
  "شقة",
  "استوديو",
  "عيادة",
  "محل",
  "مكتب اداري",
  "غرف فندقية"
];

const yesNo = [
  { label: "أي", value: "" },
  { label: "نعم", value: "yes" },
  { label: "لا", value: "no" },
];

const FilterBar: React.FC<{ onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void }> = ({ onSubmit }) => {
  const [minPrice, setMinPrice] = useState(500000);
  const [maxPrice, setMaxPrice] = useState(10000000);

  return (
    <form className={styles.filterBar} onSubmit={onSubmit}>
      <select name="country" defaultValue="مصر">
        <option value="مصر">مصر</option>
        <option value="الإمارات">الإمارات</option>
        <option value="السعودية">السعودية</option>
        <option value="الكويت">الكويت</option>
        <option value="البحرين">البحرين</option>
        <option value="قطر">قطر</option>
        <option value="المغرب">المغرب</option>
        <option value="تونس">تونس</option>
        <option value="الجزائر">الجزائر</option>
        <option value="عمان">عمان</option>
        <option value="الأردن">الأردن</option>
      </select>
      <select name="type" defaultValue="شقة">
        {unitTypes.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
      <select name="for" defaultValue="بيع">
        <option value="بيع">للبيع</option>
        <option value="ايجار">للإيجار</option>
      </select>
      <select name="developer">
        <option value="">اختر المطور</option>
        {mockDevelopers.map((dev) => (
          <option key={dev.id} value={dev.id}>{dev.name}</option>
        ))}
      </select>
      <select name="compound">
        <option value="">اختر الكمباوند</option>
        {mockCompounds.map((comp) => (
          <option key={comp.id} value={comp.id}>{comp.name}</option>
        ))}
      </select>
      <input type="number" name="bedrooms" placeholder="عدد الغرف" min={0} />
      <input type="number" name="bathrooms" placeholder="عدد الحمامات" min={0} />
      <input type="number" name="area" placeholder="المساحة (م²)" min={0} />
      <input type="number" name="floors" placeholder="عدد الطوابق" min={0} />
      <select name="pool">
        <option value="">حمام سباحة</option>
        <option value="yes">نعم</option>
        <option value="no">لا</option>
      </select>
      <select name="garden">
        <option value="">حديقة</option>
        <option value="yes">نعم</option>
        <option value="no">لا</option>
      </select>
      <div className={styles.sliderBox}>
        <label className={styles.sliderLabel}>الحد الأدنى للسعر</label>
        <input type="range" name="minPrice" min={0} max={maxPrice} step={50000} value={minPrice} onChange={e => setMinPrice(Number(e.target.value))} className={styles.slider} />
        <span className={styles.sliderValue}>{minPrice.toLocaleString()} جنيه</span>
      </div>
      <div className={styles.sliderBox}>
        <label className={styles.sliderLabel}>الحد الأقصى للسعر</label>
        <input type="range" name="maxPrice" min={minPrice} max={20000000} step={50000} value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))} className={styles.slider} />
        <span className={styles.sliderValue}>{maxPrice.toLocaleString()} جنيه</span>
      </div>
      <button type="submit">بحث</button>
    </form>
  );
};

export default FilterBar;
