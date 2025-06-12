import { useRouter } from "next/router";
import { mockUnits } from "@/types/mockUnits";
import styles from "@/styles/UnitDetails.module.css";

export default function UnitDetails() {
  const router = useRouter();
  const { id } = router.query;
  const unit = mockUnits.find((u) => u.id === id);

  if (!unit) return <div className={styles.notFound}>الوحدة غير موجودة</div>;

  return (
    <div className={styles.detailsContainer}>
      <h1>{unit.title}</h1>
      <div className={styles.imagesSection}>
        {unit.images.map((img, i) => (
          <img key={i} src={img} alt={unit.title} className={styles.unitImage} />
        ))}
      </div>
      <div className={styles.infoSection}>
        <p><b>النوع:</b> {unit.type}</p>
        <p><b>الغرض:</b> {unit.for}</p>
        <p><b>الدولة:</b> {unit.country}</p>
        <p><b>المدينة:</b> {unit.city}</p>
        <p><b>المطور:</b> {unit.ownerName}</p>
        <p><b>السعر:</b> {unit.price.toLocaleString()} جنيه</p>
        <p><b>عدد الغرف:</b> {unit.bedrooms}</p>
        <p><b>عدد الحمامات:</b> {unit.bathrooms}</p>
        <p><b>المساحة:</b> {unit.area} م²</p>
        <p><b>عدد الطوابق:</b> {unit.floors}</p>
        <p><b>مميزات:</b> {unit.features?.join("، ")}</p>
        <p><b>الوصف:</b> {unit.description}</p>
      </div>
    </div>
  );
}
