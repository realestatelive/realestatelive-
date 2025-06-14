import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const iconByType: Record<string, {icon: string, color: string}> = {
  "قصر": {icon: "🏰", color: "#f7b731"},
  "فيلا": {icon: "🏡", color: "#3867d6"},
  "شقة": {icon: "🏢", color: "#ff6f91"},
  "بنتهاوس": {icon: "🏙️", color: "#8854d0"},
  "تاون هاوس": {icon: "🏠", color: "#20bf6b"},
  "توين هاوس": {icon: "🏠", color: "#20bf6b"},
  "استوديو": {icon: "🎬", color: "#f78ca2"},
  "عيادة": {icon: "🏥", color: "#3867d6"},
  "محل": {icon: "🏪", color: "#f7b731"},
  "مكتب اداري": {icon: "🏢", color: "#ff6f91"},
  "غرف فندقية": {icon: "🏨", color: "#8854d0"},
};

const MapComponentLeaflet = ({ units }: { units: any[] }) => {
  useEffect(() => {
    const map = L.map("baitk-map", {
      center: [30.0444, 31.2357],
      zoom: 7,
      scrollWheelZoom: true,
    });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);
    units.forEach((unit) => {
      if (!unit.coords) return;
      const {icon, color} = iconByType[unit.type] || {icon: "🏠", color: "#3867d6"};
      const marker = L.marker([unit.coords[1], unit.coords[0]], {
        title: unit.title,
        icon: L.divIcon({
          className: "unit-marker",
          html: `<span style='font-size:2rem;filter:drop-shadow(0 2px 4px ${color}99);'>${icon}</span>`
        })
      }).addTo(map);
      marker.bindPopup(`
        <div style='font-weight:bold;color:${color};font-size:1.1rem;'>${icon} ${unit.title}</div>
        <div style='color:#444;margin:6px 0;'>${unit.price ? unit.price.toLocaleString() + ' جنيه' : ''}</div>
        <button style='background:${color};color:#fff;padding:6px 18px;border:none;border-radius:6px;font-weight:bold;cursor:pointer;margin:4px 0;' onclick="window.location='/unit/${unit.id}'">تفاصيل</button>
      `);
    });
    return () => map.remove();
  }, [units]);

  return <div id="baitk-map" style={{ width: "100%", height: 500, borderRadius: 16, margin: "32px auto" }} />;
};

export default MapComponentLeaflet;
