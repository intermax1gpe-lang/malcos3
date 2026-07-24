export interface Product {
  name: string;
  img: string;
  url: string;
}

export interface ProductCategory {
  category: string;
  slug: string;
  products: Product[];
}

export const commaxProducts: ProductCategory[] = [
  {
    category: 'Audio Casa',
    slug: 'audio-casa',
    products: [
      { name: 'Portero Audio DR-2GN', img: '/images/products/DR-2GN-commax.jpeg', url: 'https://malcos.com.pe/producto/portero-audio-dr-2gn/' },
      { name: 'Intercom Audio DP-2S', img: '/images/products/DP-2S-commax.png', url: 'https://malcos.com.pe/producto/intercom-audio-dp-2s/' },
    ],
  },
  {
    category: 'Oficina',
    slug: 'oficina',
    products: [
      { name: 'Portero de Audio DR-DW2N', img: '/images/products/DR-DW2N-commax.png', url: 'https://malcos.com.pe/producto/portero-de-audio-dr-dw2n/' },
      { name: 'Intercom Audio TP-6RC', img: '/images/products/TP-6RC-commax.png', url: 'https://malcos.com.pe/producto/intercom-audio-tp-6rc/' },
      { name: 'Intercom Audio TP-12RC', img: '/images/products/TP-12RC-commax.png', url: 'https://malcos.com.pe/producto/intercom-audio-tp-12rc/' },
      { name: 'Fuente RF-1A', img: '/images/products/RF-1A-commax.png', url: 'https://malcos.com.pe/producto/fuente-rf-1a/' },
    ],
  },
  {
    category: 'Video Casa',
    slug: 'video-casa',
    products: [
      { name: 'Cámara Pin Hall DRC-4CGN', img: '/images/products/DRC-4CGN-commax.jpeg', url: 'https://malcos.com.pe/producto/camara-pin-hall-drc-4cgn/' },
      { name: 'Monitor LCD 4.3" CDV-43K', img: '/images/products/CDV-43K-2-commax.png', url: 'https://malcos.com.pe/producto/monitor-lcd-4-3-cdv-43k/' },
      { name: 'Monitor LCD 7" CDV-70N2', img: '/images/products/CDV-70N2-commax.jpeg', url: 'https://malcos.com.pe/producto/monitor-lcd-de-7-cdv-70n2/' },
      { name: 'Anexo de Video DP-4VHP', img: '/images/products/DP-4VHP-commax.png', url: 'https://malcos.com.pe/producto/anexo-de-video-dp-4vhp/' },
    ],
  },
  {
    category: 'Edificio Audio',
    slug: 'edificio-audio',
    products: [
      { name: 'Portero Audio DR-2UM', img: '/images/products/DR-2UM-commax.png', url: 'https://malcos.com.pe/producto/portero-audio-dr-2um/' },
      { name: 'Portero Audio DR-4UM', img: '/images/products/DR-4UM-commax.png', url: 'https://malcos.com.pe/producto/portero-audio-dr-4um/' },
      { name: 'Portero Audio DR-6UM', img: '/images/products/DR-6UM-commax.png', url: 'https://malcos.com.pe/producto/portero-audio-dr-6um/' },
      { name: 'Portero Audio DR-8UM', img: '/images/products/DR-8UM-commax.png', url: 'https://malcos.com.pe/producto/portero-audio-dr-8um/' },
      { name: 'Portero Decorativo Audio DR-10AM', img: '/images/products/DR-10AM-commax.png', url: 'https://malcos.com.pe/producto/portero-decorativo-audio-dr-10am/' },
      { name: 'Portero Decorativo Audio DR-12AM', img: '/images/products/DR-12AM-commax.jpeg', url: 'https://malcos.com.pe/producto/portero-decorativo-audio-dr-12am/' },
      { name: 'Portero Decorativo Audio DR-14AM', img: '/images/products/DR-14AM-commax.png', url: 'https://malcos.com.pe/producto/portero-decorativo-audio-dr-14am/' },
      { name: 'Portero Decorativo Audio DR-16AM', img: '/images/products/DR-16AM-commax.png', url: 'https://malcos.com.pe/producto/portero-decorativo-audio-dr-16am/' },
      { name: 'Extensión Audio DR-24ML', img: '/images/products/DR-24ML-commax.png', url: 'https://malcos.com.pe/producto/extension-audio-dr-24ml/' },
      { name: 'Intercom de Audio DP-SS', img: '/images/products/DP-SS-2-commax.png', url: 'https://malcos.com.pe/producto/intercom-de-audio-dp-ss/' },
      { name: 'Intercom de Audio DP-ML', img: '/images/products/DP-ML-commax.png', url: 'https://malcos.com.pe/producto/intercom-de-audio-dp-ml/' },
    ],
  },
  {
    category: 'Audio Digital Edificio',
    slug: 'audio-digital-edificio',
    products: [
      { name: 'Portero Digital Audio DR-2AG', img: '/images/products/DR-2AG-commax.jpeg', url: 'https://malcos.com.pe/producto/portero-digital-audio-dr-2ag/' },
      { name: 'Central de Conserjería CDS-2AG', img: '/images/products/CDS-2AG-commax.png', url: 'https://malcos.com.pe/producto/central-de-conserjeria-cds-2ag/' },
      { name: 'Distribuidor de Audio Digital CCU-204AGF', img: '/images/products/CCU-204AGF-commax.png', url: 'https://malcos.com.pe/producto/distribuidor-de-audio-digital-ccu-204agf/' },
      { name: 'Distribuidor de Audio Digital CCU-232AGF', img: '/images/products/CCU-232AGF-commax.png', url: 'https://malcos.com.pe/producto/distribuidor-de-audio-digital-ccu-232agf/' },
      { name: 'Intercom Audio Digital AP-2SG', img: '/images/products/AP-2SG-2-commax.png', url: 'https://malcos.com.pe/producto/intercom-audio-digital-ap-2sg/' },
      { name: 'Fuente RF-2A', img: '/images/products/RF-2A-2-commax.png', url: 'https://malcos.com.pe/producto/fuente-rf-2a/' },
    ],
  },
  {
    category: 'Video Edificio',
    slug: 'video-edificio',
    products: [
      { name: 'Portero Cámara DRC-2ML', img: '/images/products/DRC-2ML-commax.png', url: 'https://malcos.com.pe/producto/portero-camara-drc-2ml/' },
      { name: 'Portero Cámara DRC-4ML', img: '/images/products/DRC-4ML-commax.png', url: 'https://malcos.com.pe/producto/portero-camara-drc-4ml/' },
      { name: 'Portero Cámara DRC-6ML', img: '/images/products/DRC-6ML-commax.png', url: 'https://malcos.com.pe/producto/portero-camara-drc-6ml/' },
      { name: 'Portero Cámara DRC-8ML', img: '/images/products/DRC-8ML-commax.png', url: 'https://malcos.com.pe/producto/portero-camara-drc-8ml/' },
      { name: 'Portero Cámara DRC-10ML', img: '/images/products/DRC-10ML-commax.png', url: 'https://malcos.com.pe/producto/portero-camara-drc-10ml/' },
      { name: 'Portero Cámara DRC-12AC2', img: '/images/products/DRC-12AC2-commax.png', url: 'https://malcos.com.pe/producto/portero-camara-drc-12ac2/' },
      { name: 'Portero Cámara DRC-14AC2', img: '/images/products/DRC-14AC2-commax.png', url: 'https://malcos.com.pe/producto/portero-camara-drc-14ac2/' },
      { name: 'Portero Cámara DRC-16AC2', img: '/images/products/DRC-16AC2-commax.png', url: 'https://malcos.com.pe/producto/portero-camara-drc-16ac2/' },
      { name: 'Intercom de Audio DP-3HP', img: '/images/products/DP-3HP-commax.png', url: 'https://malcos.com.pe/producto/intercom-de-audio-dp-3hp/' },
    ],
  },
  {
    category: 'Video Digital Edificio',
    slug: 'video-digital-edificio',
    products: [
      { name: 'Portero Cámara Digital DRC-GUC', img: '/images/products/DRC-GUC-2-commax.png', url: 'https://malcos.com.pe/producto/portero-camara-digital-drc-guc/' },
      { name: 'Central de Conserjería CDS-4GS', img: '/images/products/CDS-4GS-2-commax.png', url: 'https://malcos.com.pe/producto/central-de-conserjeria-cds-4gs/' },
      { name: 'Monitor LCD 4.3 Digital CAV-43MHG', img: '/images/products/CAV-43MHG-commax.jpeg', url: 'https://malcos.com.pe/producto/monitor-lcd-4-3-digital-cav-43mhg/' },
      { name: 'Intercom de Audio Digital AP-3SG', img: '/images/products/AP-3SG-commax.png', url: 'https://malcos.com.pe/producto/intercom-de-audio-digital-ap-3sg/' },
      { name: 'Distribuidor de Video Digital CCU-4GF', img: '/images/products/CCU-4GF-2-commax.png', url: 'https://malcos.com.pe/producto/distribuidor-de-video-digital-ccu-4gf/' },
    ],
  },
  {
    category: 'Línea Hotelera',
    slug: 'linea-hotelera',
    products: [
      { name: 'Master de 12 Botones TP-12RM', img: '/images/products/TP-12RM-commax.png', url: 'https://malcos.com.pe/producto/master-de-12-botones-tp-12rm/' },
      { name: 'Intercom de Audio TP-S', img: '/images/products/TP-S-2-commax.png', url: 'https://malcos.com.pe/producto/intercom-de-audio-tp-s/' },
    ],
  },
];
