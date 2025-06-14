import React, { useState } from "react";
import styles from "../../styles/AdminDashboard.module.css";
import { mockUnits } from "@/types/mockUnits";
import { Unit } from "@/types/realestate";

const UnitsAdmin: React.FC = () => {
  const [units, setUnits] = useState<Unit[]>(mockUnits);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<Partial<Unit>>({});

  const handleEdit = (unit: Unit) => {
    setEditingId(unit.id);
    setForm(unit);
  };

  const handleDelete = (id: string) => {
    setUnits(units.filter((u) => u.id !== id));
    if (editingId === id) setEditingId(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!editingId) return;
    setUnits(units.map((u) => (u.id === editingId ? { ...u, ...form } as Unit : u)));
    setEditingId(null);
    setForm({});
  };

  return (
    <div className={styles.dashboardContainer}>
      <h2 className={styles.title}>إدارة الوحدات العقارية</h2>
      <table style={{width:'100%',maxWidth:900,background:'#fff',borderRadius:12,boxShadow:'0 2px 24px #00c6fb22',margin:'auto'}}>
        <thead>
          <tr style={{background:'#00c6fb',color:'#fff'}}>
            <th>العنوان</th>
            <th>النوع</th>
            <th>الغرض</th>
            <th>السعر</th>
            <th>المدينة</th>
            <th>تعديل</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          {units.map((unit) => (
            <tr key={unit.id}>
              <td>{editingId === unit.id ? <input name="title" value={form.title||''} onChange={handleChange} /> : unit.title}</td>
              <td>{editingId === unit.id ? <input name="type" value={form.type||''} onChange={handleChange} /> : unit.type}</td>
              <td>{editingId === unit.id ? <input name="for" value={form.for||''} onChange={handleChange} /> : unit.for}</td>
              <td>{editingId === unit.id ? <input name="price" value={form.price||''} onChange={handleChange} /> : unit.price}</td>
              <td>{editingId === unit.id ? <input name="city" value={form.city||''} onChange={handleChange} /> : unit.city}</td>
              <td>
                {editingId === unit.id ? (
                  <button onClick={handleSave}>حفظ</button>
                ) : (
                  <button onClick={() => handleEdit(unit)}>تعديل</button>
                )}
              </td>
              <td>
                <button onClick={() => handleDelete(unit.id)} style={{color:'#b00'}}>حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UnitsAdmin;
