import React from "react";
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

const FilterBar: React.FC = () => {
  return (
    <form className={styles.filterBar}>
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
      <input type="number" name="minPrice" placeholder="أقل سعر" min={0} />
      <input type="number" name="maxPrice" placeholder="أعلى سعر" min={0} />
      <button type="submit">بحث</button>
    </form>
  );
};

export default FilterBar;
