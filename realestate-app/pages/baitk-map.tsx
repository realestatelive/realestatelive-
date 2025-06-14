import dynamic from "next/dynamic";
import { mockUnits, mockStandaloneUnits } from "@/types/mockUnits";
import styles from "@/styles/Home.module.css";

const MapComponent = dynamic(() => import("@/components/MapComponentLeaflet"), { ssr: false });

export default function BaiTKMap() {
  const allUnits = [...mockUnits, ...mockStandaloneUnits];
  return (
    <div className={styles.mapPage}>
      <h1 className={styles.mapTitle}>خريطة بيتك</h1>
      <MapComponent units={allUnits} />
    </div>
  );
}
