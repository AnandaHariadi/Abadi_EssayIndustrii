import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ABADI - Eco-Tech Biomassa, Telemetri IoT & AI Machine Learning',
  description: 'Platform Inovasi IoT Telemetry (DHT22, BMP280, MQ-135) & Random Forest Regression untuk pengolahan biomassa menjadi energi terbarukan dan biochar terfiksasi karbon.',
  keywords: ['ABADI', 'Biochar', 'Pirolisis', 'IoT', 'Machine Learning', 'Random Forest', 'Poin Hijau', 'Net Zero Emission'],
  icons: {
    icon: [
      { url: '/abadi-emblem.png', type: 'image/png' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    shortcut: '/abadi-emblem.png',
    apple: '/abadi-emblem.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" type="image/png" href="/abadi-emblem.png" sizes="any" />
        <link rel="shortcut icon" href="/abadi-emblem.png" />
        <link rel="apple-touch-icon" href="/abadi-emblem.png" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className="antialiased bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
