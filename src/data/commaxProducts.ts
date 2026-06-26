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
      { name: 'Kit de 1 punto de Audio COMMAX', img: '/images/products/Kit-de-1-punto-de-Audio-COMMAX-1-300x300.jpg', url: 'https://malcos.com.pe/producto/kit-de-1-punto-de-audio-commax/' },
      { name: 'Kit de 2 puntos de Audio COMMAX', img: '/images/products/Kit-de-2-puntos-de-Audio-COMMAX-1-300x300.jpg', url: 'https://malcos.com.pe/producto/kit-de-2-puntos-de-audio-commax/' },
    ],
  },
  {
    category: 'Audio Digital Edificio',
    slug: 'audio-digital-edificio',
    products: [
      { name: 'Portero Digital Audio DR-2AG', img: '/images/products/DR-2AG-commax-285x300.png', url: 'https://malcos.com.pe/producto/portero-digital-audio-dr-2ag/' },
      { name: 'Central de Conserjería CDS-2AG', img: '/images/products/CDS-2AG-commax-300x289.png', url: 'https://malcos.com.pe/producto/central-de-conserjeria-cds-2ag/' },
      { name: 'Intercom Audio Digital AP-2SG', img: '/images/products/AP-2SG-commax-300x300.jpg', url: 'https://malcos.com.pe/producto/intercom-audio-digital-ap-2sg/' },
    ],
  },
  {
    category: 'Edificio Audio',
    slug: 'edificio-audio',
    products: [
      { name: 'Portero Audio DR-2UM', img: '/images/products/DR-2UM-commax-226x300.png', url: 'https://malcos.com.pe/producto/portero-audio-dr-2um/' },
      { name: 'Portero Audio DR-4UM', img: '/images/products/DR-4UM-commax-280x300.png', url: 'https://malcos.com.pe/producto/portero-audio-dr-4um/' },
      { name: 'Portero Audio DR-6UM', img: '/images/products/DR-6UM-commax-269x300.png', url: 'https://malcos.com.pe/producto/portero-audio-dr-6um/' },
      { name: 'Portero Audio DR-8UM', img: '/images/products/DR-8UM-commax-214x300.png', url: 'https://malcos.com.pe/producto/portero-audio-dr-8um/' },
      { name: 'Intercom de Audio DP-SS', img: '/images/products/DP-SS-comma-257x300.jpg', url: 'https://malcos.com.pe/producto/intercom-de-audio-dp-ss/' },
    ],
  },
  {
    category: 'Hotelera',
    slug: 'hotelera',
    products: [
      { name: 'Master de 12 Botones TP-12RM', img: '/images/products/TP-12RM-commax-300x300.png', url: 'https://malcos.com.pe/producto/master-de-12-botones-tp-12rm/' },
      { name: 'Intercom de Audio TP-S', img: '/images/products/TP-S-commax-300x300.png', url: 'https://malcos.com.pe/producto/intercom-de-audio-tp-s/' },
      { name: 'Fuente RF-2A', img: '/images/products/RF-2A-commax-291x300.png', url: 'https://malcos.com.pe/producto/fuente-rf-2a/' },
    ],
  },
  {
    category: 'Oficina',
    slug: 'oficina',
    products: [
      { name: 'Portero de Audio DR-DW2N', img: '/images/products/DR-DW2N-commax-300x300.jpg', url: 'https://malcos.com.pe/producto/portero-de-audio-dr-dw2n/' },
      { name: 'Intercom Audio TP-6RC', img: '/images/products/TP-6RC-commax-300x300.jpg', url: 'https://malcos.com.pe/producto/intercom-audio-tp-6rc/' },
      { name: 'Intercom Audio TP-12RC', img: '/images/products/tp-12rc-commax-300x300.png', url: 'https://malcos.com.pe/producto/intercom-audio-tp-12rc/' },
      { name: 'Fuente RF-1A', img: '/images/products/RF-1A-commax-300x300.jpg', url: 'https://malcos.com.pe/producto/fuente-rf-1a/' },
      { name: 'Portero DRC-4CGN2', img: '/images/products/drc-4cgn2-commax--300x273.jpg', url: 'https://malcos.com.pe/producto/portero-drc-4cgn2/' },
    ],
  },
  {
    category: 'Video Casa',
    slug: 'video-casa',
    products: [
      { name: 'Cámara Pin Hall DRC-4CGN', img: '/images/products/DRC-4CGN-commax-284x300.jpg', url: 'https://malcos.com.pe/producto/camara-pin-hall-drc-4cgn/' },
      { name: 'Monitor LCD 4.3" CDV-43K', img: '/images/products/cdv-43k-1-commax-300x300.png', url: 'https://malcos.com.pe/producto/monitor-lcd-4-3-cdv-43k/' },
      { name: 'Monitor LCD 7" CDV-70K', img: '/images/products/CDV-70K-commax-1-242x300.png', url: 'https://malcos.com.pe/producto/monitor-lcd-7-cdv-70k/' },
      { name: 'Monitor LCD 7" CDV-70N2', img: '/images/products/CDV-70N2-commaX3-300x300.png', url: 'https://malcos.com.pe/producto/monitor-lcd-de-7-cdv-70n2/' },
      { name: 'Anexo de Video DP-4VHP', img: '/images/products/DP-4VHP-commax-2-2-225x300.png', url: 'https://malcos.com.pe/producto/anexo-de-video-dp-4vhp/' },
    ],
  },
  {
    category: 'Video Digital Edificio',
    slug: 'video-digital-edificio',
    products: [
      { name: 'Portero Cámara Digital DRC-GUC', img: '/images/products/DRC-GUC-commax-300x255.png', url: 'https://malcos.com.pe/producto/portero-camara-digital-drc-guc/' },
      { name: 'Central de Conserjería CDS-4GS', img: '/images/products/CDS-4GS-commax-225x300.jpg', url: 'https://malcos.com.pe/producto/central-de-conserjeria-cds-4gs/' },
      { name: 'Distribuidor de Video Digital CCU-4GF', img: '/images/products/CCU-4GF-commax-300x300.jpg', url: 'https://malcos.com.pe/producto/distribuidor-de-video-digital-ccu-4gf/' },
    ],
  },
  {
    category: 'Video Edificio',
    slug: 'video-edificio',
    products: [
      { name: 'Portero Cámara DRC-2UC', img: '/images/products/DRC-2UC-commax-300x300.png', url: 'https://malcos.com.pe/producto/portero-camara-drc-2uc/' },
      { name: 'Portero Cámara DRC-3UC', img: '/images/products/DRC-3UC-commax-300x257.png', url: 'https://malcos.com.pe/producto/portero-camara-drc-3uc/' },
      { name: 'Portero Cámara DRC-4UC', img: '/images/products/DRC-4UC-commax-300x300.png', url: 'https://malcos.com.pe/producto/portero-camara-drc-4uc/' },
    ],
  },
];
