import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Unit } from '@/types/realestate';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94dXNlciIsImEiOiJja2xqZ2Z2b2IwM2JwMnBvN2J6b2J6b2J6In0.2v9Qw8w8w8w8w8w8w8w8w8'; // مفتاح تجريبي، استبدله بمفتاحك لاحقاً

interface MapComponentProps {
  units: Unit[];
}

const cityCoords: Record<string, [number, number]> = {
  "القاهرة": [31.2357, 30.0444],
  "الشيخ زايد": [30.9781, 30.0238],
  "القاهرة الجديدة": [31.4913, 30.0074],
  "الساحل الشمالي": [28.9245, 31.0847],
};

const iconByType: Record<string, string> = {
  "قصر": "/globe.svg",
  "فيلا": "/file.svg",
  "شقة": "/window.svg",
  // أضف رموز أخرى حسب الحاجة
};

const MapComponent: React.FC<MapComponentProps> = ({ units }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current) return;
    if (!mapContainer.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [31.2357, 30.0444], // القاهرة
      zoom: 7,
    });
    // إضافة رموز للوحدات
    units.forEach((unit) => {
      const coords = cityCoords[unit.city] || [31.2357, 30.0444];
      const el = document.createElement('div');
      el.style.backgroundImage = `url(${iconByType[unit.type] || '/file.svg'})`;
      el.style.width = '36px';
      el.style.height = '36px';
      el.style.backgroundSize = 'contain';
      el.style.cursor = 'pointer';
      el.title = unit.title;
      el.onclick = () => {
        alert(`تفاصيل الوحدة: ${unit.title}`);
      };
      new mapboxgl.Marker(el).setLngLat(coords).addTo(map.current!);
    });
    return () => {
      map.current?.remove();
    };
  }, [units]);

  return <div ref={mapContainer} style={{ width: '100%', height: 400, borderRadius: 12, marginTop: 24 }} />;
};

export default MapComponent;
