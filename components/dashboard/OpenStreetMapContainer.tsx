'use client';

import React, { useEffect, useRef } from 'react';
import { MapDeviceLocation } from '@/lib/mockData';

interface OpenStreetMapContainerProps {
  devices: MapDeviceLocation[];
  selectedDevice: MapDeviceLocation;
  onSelectDevice: (device: MapDeviceLocation) => void;
}

export default function OpenStreetMapContainer({
  devices,
  selectedDevice,
  onSelectDevice,
}: OpenStreetMapContainerProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletInstanceRef = useRef<any>(null);

  // Region color mapping
  const getRegionColor = (location: string) => {
    if (location.includes('Jawa Barat')) return '#EA580C'; // Corporate Orange
    if (location.includes('Jawa Timur')) return '#10B981'; // Emerald
    if (location.includes('Sumatra') || location.includes('Lampung')) return '#F59E0B'; // Amber
    if (location.includes('Sulawesi') || location.includes('Makassar')) return '#0284C7'; // Sky Blue
    return '#6366F1'; // Indigo
  };

  useEffect(() => {
    if (typeof window === 'undefined' || !mapRef.current) return;

    // Dynamically import Leaflet to avoid SSR window errors
    import('leaflet').then((L) => {
      // Import leaflet CSS dynamically
      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link');
        link.id = 'leaflet-css';
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      // Fix default marker icon issues in Leaflet
      delete (L.Icon.Default.prototype as any)._getIconUrl;

      // Initialize map instance if not existing
      if (!leafletInstanceRef.current) {
        const map = L.map(mapRef.current!).setView([-2.5489, 118.0149], 5);

        // Add OpenStreetMap Tile Layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | ABADI Eco-Tech',
          maxZoom: 18,
        }).addTo(map);

        leafletInstanceRef.current = map;
      }

      const map = leafletInstanceRef.current;

      // Clear existing markers
      map.eachLayer((layer: any) => {
        if (layer instanceof L.CircleMarker || layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });

      // Add Custom Colored Markers for each Node
      devices.forEach((dev) => {
        const color = getRegionColor(dev.location);
        const isSelected = dev.id === selectedDevice.id;

        const circleMarker = L.circleMarker([dev.lat, dev.lng], {
          radius: isSelected ? 12 : 9,
          fillColor: color,
          color: '#FFFFFF',
          weight: isSelected ? 3 : 2,
          opacity: 1,
          fillOpacity: 0.9,
        }).addTo(map);

        // Bind Popup
        const popupContent = `
          <div style="font-family: sans-serif; padding: 4px; color: #0F172A;">
            <strong style="font-size: 13px; color: ${color};">${dev.name}</strong><br/>
            <span style="font-size: 11px; color: #475569;">${dev.location}</span><br/>
            <div style="margin-top: 6px; font-size: 11px; font-weight: bold; background: #F8FAFC; padding: 4px 6px; border-radius: 6px; border: 1px solid #E2E8F0;">
              Kapasitas: ${dev.dailyCapacityKg} kg/hari<br/>
              Total Biochar: ${dev.totalBiocharProducedKg} kg
            </div>
          </div>
        `;

        circleMarker.bindPopup(popupContent);

        circleMarker.on('click', () => {
          onSelectDevice(dev);
        });

        if (isSelected) {
          circleMarker.openPopup();
        }
      });
    });

    return () => {
      // cleanup on unmount if needed
    };
  }, [devices, selectedDevice, onSelectDevice]);

  return (
    <div className="relative w-full h-[420px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
      <div ref={mapRef} className="w-full h-full z-10" />
    </div>
  );
}
