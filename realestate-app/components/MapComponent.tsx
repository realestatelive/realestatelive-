import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94dXNlciIsImEiOiJja2xqZ2Z2b2IwM2JwMnBvN2J6b2J6b2J6In0.2v9Qw8w8w8w8w8w8w8w8w8'; // مفتاح تجريبي، استبدله بمفتاحك لاحقاً

const MapComponent: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current) return;
    if (!mapContainer.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [31.2357, 30.0444], // القاهرة
      zoom: 10,
    });
    return () => {
      map.current?.remove();
    };
  }, []);

  return <div ref={mapContainer} style={{ width: '100%', height: 400, borderRadius: 12, marginTop: 24 }} />;
};

export default MapComponent;
