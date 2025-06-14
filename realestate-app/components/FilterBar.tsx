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

const financeOptions = [
  { label: "أي طريقة", value: "" },
  { label: "تمويل عقاري", value: "تمويل" },
  { label: "أقساط", value: "أقساط" },
  { label: "كاش", value: "كاش" },
];
const financeProviders = [
  "بنك مصر", "البنك الأهلي المصري", "بنك القاهرة", "QNB", "CIB", "الإمارات دبي الوطني", "SAIB", "العربي الأفريقي", "بنك التعمير والإسكان"
];

const FilterBar: React.FC<{ onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void, inputRef?: any }> = ({ onSubmit, inputRef }) => {
  const [minPrice, setMinPrice] = useState(500000);
  const [maxPrice, setMaxPrice] = useState(10000000);

  return (
    <form className={styles.filterBar} onSubmit={onSubmit}>
      <select name="country" defaultValue="" required>
        <option value="">اختار دولة</option>
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
      <select name="type" defaultValue="" required>
        <option value="">اختار نوع الوحدة</option>
        {unitTypes.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
      <select name="for" defaultValue="">
        <option value="">اختار الغرض</option>
        <option value="بيع">للبيع</option>
        <option value="ايجار">للإيجار</option>
      </select>
      <select name="developer">
        <option value="">اختار المطور</option>
        {mockDevelopers.map((dev) => (
          <option key={dev.id} value={dev.id}>{dev.name}</option>
        ))}
      </select>
      <select name="compound">
        <option value="">اختار الكمباوند</option>
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
      <select name="finance">
        {financeOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
      </select>
      <select name="financeProvider">
        <option value="">اختر ممول عقاري</option>
        {financeProviders.map((prov, i) => <option key={i} value={prov}>{prov}</option>)}
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
      <input ref={inputRef} type="text" name="search" placeholder="ابحث عن وحدة أو منطقة..." className={styles.searchInput} />
      <button type="submit">بحث</button>
    </form>
  );
};

export default FilterBar;
