import React from "react";
import styles from "@/styles/FilterBar.module.css";

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
        <option value="قصر">قصر</option>
        <option value="فيلا">فيلا</option>
        <option value="تاون هاوس">تاون هاوس</option>
        <option value="توين هاوس">توين هاوس</option>
        <option value="شقة">شقة</option>
        <option value="استوديو">استوديو</option>
        <option value="عيادة">عيادة</option>
        <option value="محل">محل</option>
        <option value="مكتب اداري">مكتب اداري</option>
        <option value="غرف فندقية">غرف فندقية</option>
      </select>
      <select name="for" defaultValue="بيع">
        <option value="بيع">للبيع</option>
        <option value="ايجار">للإيجار</option>
      </select>
      <input type="number" name="minPrice" placeholder="أقل سعر" min={0} />
      <input type="number" name="maxPrice" placeholder="أعلى سعر" min={0} />
      <input type="text" name="developer" placeholder="اسم المطور أو الكمباوند" />
      <button type="submit">بحث</button>
    </form>
  );
};

export default FilterBar;
