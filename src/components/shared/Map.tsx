'use client';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';

const position: [number, number] = [39.8283, -98.5795];

const Map = () => {
  if (typeof window === 'undefined') return;
  return (
    <>
  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
  <MapContainer className="h-full w-full" {...({ center: position, zoom: 6 } as any)}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </>
  );
};

export default Map;
