'use client';

import React, { useState, useEffect, useRef } from 'react';

interface NodeInfo {
  id: string;
  name: string;
  location: string;
  capacity: string;
  status: string;
  temp: string;
  pressure: string;
  biocharToday: string;
  co2Today: string;
  operator: string;
  lat: number;
  lng: number;
}

export default function InteractiveMapTab() {
  const [selectedNode, setSelectedNode] = useState('NODE-01');
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any>({});

  const nodes: NodeInfo[] = [
    {
      id: 'NODE-01',
      name: 'Subang Node #01 - Hub Desa Agroteknologi',
      location: 'Subang Hub Agroteknologi, Subang, Jawa Barat',
      capacity: '500 kg / batch',
      status: 'OPERATIONAL ONLINE',
      temp: '442.0 °C',
      pressure: '1018.4 hPa',
      biocharToday: '250 kg',
      co2Today: '+580 kg CO2e',
      operator: 'Pak Budi (Kelompok Tani Subang)',
      lat: -6.5684,
      lng: 107.7600,
    },
    {
      id: 'NODE-02',
      name: 'Subang Node #02 - Reaktor Karang Taruna Ciasem',
      location: 'Kecamatan Ciasem, Subang, Jawa Barat',
      capacity: '300 kg / batch',
      status: 'STANDBY READY',
      temp: '320.0 °C',
      pressure: '1012.0 hPa',
      biocharToday: '120 kg',
      co2Today: '+280 kg CO2e',
      operator: 'Mas Ahmad (Karang Taruna Tani)',
      lat: -6.3392,
      lng: 107.6892,
    },
    {
      id: 'NODE-03',
      name: 'Subang Node #03 - Lab Riset UPNVJT R&D',
      location: 'Kampus UPNVJT R&D Unit, Surabaya',
      capacity: '50 kg / batch',
      status: 'R&D CALIBRATION',
      temp: '250.0 °C',
      pressure: '1008.0 hPa',
      biocharToday: '25 kg',
      co2Today: '+60 kg CO2e',
      operator: 'Tim Peneliti Biomassa UPNVJT',
      lat: -7.3323,
      lng: 112.7938,
    },
  ];

  const active = nodes.find((n) => n.id === selectedNode) || nodes[0];

  // Initialize Leaflet Map with OpenStreetMap tiles
  useEffect(() => {
    let leafletScript: HTMLScriptElement | null = null;

    const initMap = () => {
      if (typeof window === 'undefined' || !mapContainerRef.current) return;
      const L = (window as any).L;
      if (!L) return;

      if (!mapInstanceRef.current) {
        // Initialize map centered at Subang
        const map = L.map(mapContainerRef.current, {
          center: [-6.5684, 107.7600],
          zoom: 9,
          zoomControl: true,
        });

        // OpenStreetMap High-Resolution Tile Layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | ABADI Eco-Tech GIS',
        }).addTo(map);

        mapInstanceRef.current = map;

        // Custom Leaflet Markers
        nodes.forEach((node) => {
          const customIcon = L.divIcon({
            className: 'custom-leaflet-marker',
            html: `
              <div class="cursor-pointer group">
                <div class="px-2.5 py-1 rounded-xl bg-slate-900 text-white border-2 border-orange-500 font-mono text-[11px] font-bold shadow-lg flex items-center gap-1.5 hover:bg-orange-600 transition-all">
                  <span class="w-2 h-2 rounded-full ${node.id === 'NODE-01' ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'}"></span>
                  <span>${node.id}</span>
                </div>
              </div>
            `,
            iconSize: [80, 30],
            iconAnchor: [40, 15],
          });

          const marker = L.marker([node.lat, node.lng], { icon: customIcon }).addTo(map);
          marker.bindTooltip(`<b>${node.name}</b><br/>${node.location}`, { direction: 'top' });
          marker.on('click', () => {
            setSelectedNode(node.id);
          });

          markersRef.current[node.id] = marker;
        });
      }
    };

    if ((window as any).L) {
      initMap();
    } else {
      leafletScript = document.createElement('script');
      leafletScript.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
      leafletScript.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
      leafletScript.crossOrigin = '';
      leafletScript.onload = initMap;
      document.body.appendChild(leafletScript);
    }

    return () => {
      // Keep map instance persistent
    };
  }, []);

  // Pan map when selected node changes
  const handleSelectNode = (id: string) => {
    setSelectedNode(id);
    const target = nodes.find((n) => n.id === id);
    if (target && mapInstanceRef.current && (window as any).L) {
      mapInstanceRef.current.flyTo([target.lat, target.lng], id === 'NODE-03' ? 11 : 10, {
        duration: 1.2,
      });
    }
  };

  return (
    <div className="space-y-8 animate-fade-in font-sans text-slate-900">
      
      {/* Header Banner - OpenStreetMap GIS Integration */}
      <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-lg flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest font-mono">SEBARAN GEOGRAFIS OPENSTREETMAP GIS</span>
          <h3 className="text-xl font-extrabold font-heading text-slate-900 mt-0.5">Peta Interaktif Jaringan Reaktor Subang & UPNVJT</h3>
          <p className="text-xs text-slate-500 mt-1">
            Terhubung langsung dengan peta topografi <strong>OpenStreetMap API</strong> untuk pemantauan geografis node desa & laboratorium R&D.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {nodes.map((n) => (
            <button
              key={n.id}
              onClick={() => handleSelectNode(n.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer border ${
                selectedNode === n.id
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {n.id}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Real OpenStreetMap Container */}
        <div className="lg:col-span-7 p-2 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden flex flex-col justify-between">
          
          <div className="flex justify-between items-center px-4 py-2 bg-slate-900 text-white rounded-t-2xl z-10 text-xs">
            <span className="font-mono font-bold text-orange-400">OPENSTREETMAP REAL-TIME TILES</span>
            <span className="font-mono text-slate-300 font-bold">POSISI LAT: {active.lat}, LNG: {active.lng}</span>
          </div>

          {/* Leaflet Map Canvas */}
          <div
            ref={mapContainerRef}
            className="w-full h-[420px] rounded-b-2xl z-0 overflow-hidden border-t border-slate-200"
          />

        </div>

        {/* Selected Node Details Card */}
        <div className="lg:col-span-5 p-6 rounded-3xl bg-white border border-slate-200 shadow-lg space-y-4">
          <div className="pb-3 border-b border-slate-200">
            <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest font-mono">DETAIL NODE TELEMETRI</span>
            <h4 className="text-lg font-extrabold font-heading text-slate-900 mt-0.5">{active.name}</h4>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">{active.location}</p>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div className="flex justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-slate-500 font-bold">STATUS HARI INI</span>
              <span className="font-extrabold text-emerald-600">{active.status}</span>
            </div>

            <div className="flex justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-slate-500 font-bold">KAPASITAS REAKTOR</span>
              <span className="font-bold text-slate-900">{active.capacity}</span>
            </div>

            <div className="flex justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-slate-500 font-bold">SUHU CORE PIROLISIS</span>
              <span className="font-extrabold text-orange-600">{active.temp}</span>
            </div>

            <div className="flex justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-slate-500 font-bold">PRODUKSI BIOCHAR HARI INI</span>
              <span className="font-extrabold text-slate-900">{active.biocharToday}</span>
            </div>

            <div className="flex justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-slate-500 font-bold">ESTIMASI FIKSASI KARBON</span>
              <span className="font-extrabold text-emerald-600">{active.co2Today}</span>
            </div>

            <div className="flex justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="text-slate-500 font-bold">PENANGGUNG JAWAB OPERATOR</span>
              <span className="font-bold text-slate-800">{active.operator}</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
