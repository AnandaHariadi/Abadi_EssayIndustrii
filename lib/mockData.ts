export interface ProductionRecord {
  id: string;
  date: string;
  biomassType: string;
  inputKg: number;
  biocharOutputKg: number;
  bioOilOutputLiters: number;
  syngasKwh: number;
  durationMin: number;
  avgTempC: number;
  co2SavedKg: number;
  operator: string;
}

export interface MapDeviceLocation {
  id: string;
  name: string;
  location: string;
  lat: number;
  lng: number;
  status: 'ACTIVE' | 'IDLE' | 'MAINTENANCE';
  biomassType: string;
  dailyCapacityKg: number;
  totalBiocharProducedKg: number;
  activeSensors: string[];
}

export interface GreenReward {
  id: string;
  title: string;
  category: 'VOUCHER' | 'FERTILIZER' | 'MERCHANDISE' | 'INSENTIF_TUNAI';
  pointsRequired: number;
  description: string;
  stock: number;
  badge: string;
}

export interface ForumThread {
  id: string;
  author: string;
  authorRole: string;
  avatar: string;
  title: string;
  category: 'R&D Biomassa' | 'Ekonomi Sirkular' | 'Teknologi IoT' | 'Komunitas';
  content: string;
  likes: number;
  replies: number;
  timestamp: string;
  tags: string[];
}

export interface MarketplaceItem {
  id: string;
  seller: string;
  sellerRating: number;
  productName: string;
  pricePerKg: number;
  stockKg: number;
  carbonFixedPct: number;
  biomassOrigin: string;
  location: string;
  certification: string;
}

export const INITIAL_PRODUCTION_HISTORY: ProductionRecord[] = [
  { id: 'BATCH-2026-089', date: '2026-07-22', biomassType: 'Batok Kelapa', inputKg: 250, biocharOutputKg: 92.5, bioOilOutputLiters: 48.2, syngasKwh: 120, durationMin: 55, avgTempC: 435, co2SavedKg: 245.8, operator: 'Dr. Budi Santoso' },
  { id: 'BATCH-2026-088', date: '2026-07-21', biomassType: 'Sekam Padi', inputKg: 180, biocharOutputKg: 57.6, bioOilOutputLiters: 32.0, syngasKwh: 85, durationMin: 45, avgTempC: 410, co2SavedKg: 148.0, operator: 'Siti Rahma' },
  { id: 'BATCH-2026-087', date: '2026-07-20', biomassType: 'Cangkang Sawit', inputKg: 300, biocharOutputKg: 118.0, bioOilOutputLiters: 65.4, syngasKwh: 155, durationMin: 60, avgTempC: 450, co2SavedKg: 312.4, operator: 'Rian Pratama' },
  { id: 'BATCH-2026-086', date: '2026-07-19', biomassType: 'Serbuk Kayu', inputKg: 200, biocharOutputKg: 58.0, bioOilOutputLiters: 41.5, syngasKwh: 92, durationMin: 50, avgTempC: 425, co2SavedKg: 152.6, operator: 'Dr. Budi Santoso' },
  { id: 'BATCH-2026-085', date: '2026-07-18', biomassType: 'Ampas Tebu', inputKg: 220, biocharOutputKg: 61.6, bioOilOutputLiters: 39.0, syngasKwh: 98, durationMin: 48, avgTempC: 405, co2SavedKg: 159.2, operator: 'Ahmad Fauzi' },
];

export const MAP_DEVICES: MapDeviceLocation[] = [
  { id: 'ABADI-NODE-01', name: 'Reaktor ABADI Subang Main Unit', location: 'Subang, Jawa Barat', lat: -6.5715, lng: 107.7587, status: 'ACTIVE', biomassType: 'Batok Kelapa & Sekam', dailyCapacityKg: 500, totalBiocharProducedKg: 4250, activeSensors: ['DHT22', 'BMP280', 'MQ-135', 'LoadCell'] },
  { id: 'ABADI-NODE-02', name: 'Reaktor ABADI Malang Agrotech', location: 'Malang, Jawa Timur', lat: -7.9666, lng: 112.6326, status: 'ACTIVE', biomassType: 'Sekam Padi & Serbuk Kayu', dailyCapacityKg: 350, totalBiocharProducedKg: 2980, activeSensors: ['DHT22', 'BMP280', 'MQ-135'] },
  { id: 'ABADI-NODE-03', name: 'Reaktor ABADI Lampung Sawit Center', location: 'Lampung Tengah, Sumatra', lat: -4.8524, lng: 105.2104, status: 'ACTIVE', biomassType: 'Cangkang Sawit', dailyCapacityKg: 800, totalBiocharProducedKg: 7890, activeSensors: ['DHT22', 'BMP280', 'MQ-135', 'Thermocouple K'] },
  { id: 'ABADI-NODE-04', name: 'Reaktor ABADI Karawang Circular', location: 'Karawang, Jawa Barat', lat: -6.3227, lng: 107.3376, status: 'IDLE', biomassType: 'Jerami & Batok Kelapa', dailyCapacityKg: 300, totalBiocharProducedKg: 1850, activeSensors: ['DHT22', 'BMP280', 'MQ-135'] },
  { id: 'ABADI-NODE-05', name: 'Reaktor ABADI Makassar Bio-Energy', location: 'Makassar, Sulawesi Selatan', lat: -5.1477, lng: 119.4327, status: 'ACTIVE', biomassType: 'Limbah Jagung & Sekam', dailyCapacityKg: 450, totalBiocharProducedKg: 3620, activeSensors: ['DHT22', 'BMP280', 'MQ-135'] },
];

export const GREEN_REWARDS: GreenReward[] = [
  { id: 'REW-01', title: 'Voucher E-Wallet Rp 100.000', category: 'VOUCHER', pointsRequired: 500, description: 'Tukarkan poin hijau Anda menjadi saldo Gopay/OVO/Dana secara instan.', stock: 45, badge: 'Populer' },
  { id: 'REW-02', title: 'Biochar Organik 10kg + Soil Booster', category: 'FERTILIZER', pointsRequired: 350, description: 'Paket Biochar terfiksasi karbon tinggi 82% untuk regenerasi lahan tani.', stock: 120, badge: 'Eco Best' },
  { id: 'REW-03', title: 'Hoodie Eksklusif ABADI Youth Innovator', category: 'MERCHANDISE', pointsRequired: 800, description: 'Merchandise bahan katun daur ulang dengan bordir logo ABADI.', stock: 20, badge: 'Limited Edition' },
  { id: 'REW-04', title: 'Insentif Dana Riset Pemuda Rp 500.000', category: 'INSENTIF_TUNAI', pointsRequired: 2200, description: 'Dukungan insentif langsung untuk proyek riset lingkungan pemuda.', stock: 10, badge: 'Riset Grant' },
];

export const FORUM_THREADS: ForumThread[] = [
  {
    id: 'TH-101',
    author: 'Anisa Putri',
    authorRole: 'Ketua Riset Pemuda Hijau',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    title: 'Optimalisasi Pyrolysis Temperature untuk Sekam Padi Lokal',
    category: 'R&D Biomassa',
    content: 'Teman-teman innovator ABADI! Dari data ML Random Forest reaktor minggu ini, peningkatan suhu ke 430°C menambah Fixed Carbon hingga 78%. Apakah ada yang sudah mencoba mencampur sekam padi dengan cangkang kelapa sawit?',
    likes: 34,
    replies: 12,
    timestamp: '2 jam yang lalu',
    tags: ['#Pyrolysis', '#SekamPadi', '#RandomForestML']
  },
  {
    id: 'TH-102',
    author: 'Fajar Kurnia',
    authorRole: 'Pengusaha Tani Milenial',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    title: 'Pengalaman Menggunakan Biochar ABADI di Lahan Cabai Organik',
    category: 'Ekonomi Sirkular',
    content: 'Setelah retensi air meningkat 40% dengan Biochar ABADI hasil tukar Poin Hijau, penggunaan pupuk sintetis kami berkurang 50%! Skema insentif sirkular ini sangat terasa dampaknya bagi kelompok tani kami.',
    likes: 58,
    replies: 19,
    timestamp: '5 jam yang lalu',
    tags: ['#PetaniMilenial', '#Organik', '#PoinHijau']
  }
];

export const MARKETPLACE_ITEMS: MarketplaceItem[] = [
  { id: 'MKT-01', seller: 'Kelompok Tani Subang Mandiri', sellerRating: 4.9, productName: 'Premium Coconut Shell Biochar', pricePerKg: 12500, stockKg: 450, carbonFixedPct: 84.5, biomassOrigin: 'Batok Kelapa Subang', location: 'Subang, Jawa Barat', certification: 'SNI Biochar Grade A' },
  { id: 'MKT-02', seller: 'Koperasi Bio-Energi Malang', sellerRating: 4.8, productName: 'Rice Husk Biochar (Porositas Tinggi)', pricePerKg: 8500, stockKg: 800, carbonFixedPct: 76.2, biomassOrigin: 'Sekam Padi Malang', location: 'Malang, Jawa Timur', certification: 'Sertifikat Carbon Credit Ready' },
  { id: 'MKT-03', seller: 'Inovasi Biomassa Lampung', sellerRating: 5.0, productName: 'Palm Kernel Shell Biochar Heavy-Duty', pricePerKg: 14000, stockKg: 1200, carbonFixedPct: 88.0, biomassOrigin: 'Cangkang Sawit Lampung', location: 'Lampung', certification: 'ISO 14064 Carbon Offset' },
];
