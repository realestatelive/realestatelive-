import { useRouter } from "next/router";
import { mockUnits, mockStandaloneUnits } from "@/types/mockUnits";
import { mockDevelopers, mockCompounds } from "@/types/mockDevelopers";
import styles from "@/styles/UnitDetails.module.css";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/MapComponent"), { ssr: false });

export default function UnitDetails() {
  const router = useRouter();
  const { id } = router.query;
  const allUnits = [...mockUnits, ...mockStandaloneUnits];
  const unit = allUnits.find((u) => u.id === id);

  if (!unit) return <div className={styles.notFound}>الوحدة غير موجودة</div>;

  // جلب المطور والكمباوند
  const developer = mockDevelopers.find((d) => d.id === unit.developerId);
  const compound = mockCompounds.find((c) => c.id === unit.compoundId);

  // تحديد نقطة الوحدة فقط للخريطة
  const unitOnMap = [{ ...unit }];

  return (
    <div className={styles.detailsContainer} style={{background:'var(--color-accent)',borderRadius:18}}>
      <h1 className={styles.title} style={{color:'#fff',background:'var(--color-blue)',padding:'8px 0',borderRadius:12}}>تفاصيل الوحدة</h1>
      <div className={styles.imagesSection} style={{flexWrap:'wrap'}}>
        {unit.images.map((img, i) => (
          <img key={i} src={img} alt={unit.title} className={styles.unitImage} />
        ))}
        {/* صور بانوراما */}
        {unit.panoramaImages && unit.panoramaImages.map((img, i) => (
          <iframe key={i} src={img} title="بانوراما" className={styles.panoFrame}></iframe>
        ))}
        {/* نموذج 3D */}
        {unit.model3dUrl && (
          <model-viewer src={unit.model3dUrl} ar auto-rotate camera-controls style={{width:'100%',height:'320px',background:'#111',borderRadius:'12px',marginTop:'12px',maxWidth:'100vw'}}></model-viewer>
        )}
        {/* VR */}
        {unit.vrUrl && (
          <iframe src={unit.vrUrl} title="VR" className={styles.vrFrame}></iframe>
        )}
      </div>
      <div className={styles.infoSection} style={{color:'#fff',background:'var(--color-green)',borderRadius:12,padding:'12px 8px',margin:'12px 0'}}>
        <p><b>النوع:</b> <span className={styles.colored}>{unit.type}</span></p>
        <p><b>الغرض:</b> <span className={styles.colored}>{unit.for}</span></p>
        <p><b>الدولة:</b> <span className={styles.colored}>{unit.country}</span></p>
        <p><b>المدينة:</b> <span className={styles.colored}>{unit.city}</span></p>
        <p><b>المطور:</b> <span className={styles.colored}>{developer?.name}</span></p>
        <p><b>السعر:</b> <span className={styles.colored}>{unit.price.toLocaleString()} جنيه</span></p>
        <p><b>عدد الغرف:</b> <span className={styles.colored}>{unit.bedrooms}</span></p>
        <p><b>عدد الحمامات:</b> <span className={styles.colored}>{unit.bathrooms}</span></p>
        <p><b>المساحة:</b> <span className={styles.colored}>{unit.area} م²</span></p>
        <p><b>عدد الطوابق:</b> <span className={styles.colored}>{unit.floors}</span></p>
        <p><b>مميزات:</b> <span className={styles.colored}>{unit.features?.join("، ")}</span></p>
        <p><b>الوصف:</b> <span className={styles.colored}>{unit.description}</span></p>
        {/* نبذة المطور */}
        {developer && (
          <div className={styles.devBox}>
            <h3>عن المطور</h3>
            <p className={styles.colored}>{developer.description}</p>
            <ul>
              {developer.achievements?.map((ach, i) => <li key={i} className={styles.colored}>{ach}</li>)}
            </ul>
          </div>
        )}
        {/* نبذة الكمباوند */}
        {compound && (
          <div className={styles.compoundBox}>
            <h3>عن الكمباوند</h3>
            <p className={styles.colored}>{compound.description}</p>
            <ul>
              {compound.facilities?.map((f, i) => <li key={i} className={styles.colored}>{f}</li>)}
            </ul>
          </div>
        )}
        <div style={{display:'flex',gap:16,marginTop:24,flexWrap:'wrap'}}>
          <a href={`tel:201234567890`} className={styles.actionBtn} style={{background:'#f7b731',color:'#fff',minWidth:120,textAlign:'center'}}>اتصل الآن</a>
          <a href="/baitk-map" className={styles.actionBtn} style={{background:'#3867d6',color:'#fff',minWidth:120,textAlign:'center'}}>عرض على الخريطة</a>
        </div>
      </div>
      {/* خريطة توضح موقع الوحدة داخل الكمباوند أو الموقع الدقيق */}
      <div style={{width:'100%',maxWidth:600,margin:'32px auto'}}>
        <MapComponent units={unitOnMap} />
      </div>
      <footer className={styles.footer} style={{background:'var(--color-blue)',color:'#fff',position:'fixed',bottom:0,left:0,width:'100%',borderRadius:0}}>
        جميع الحقوق محفوظة © شركة بيتي AR 2025
      </footer>
    </div>
  );
}
