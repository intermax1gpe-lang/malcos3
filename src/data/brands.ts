export interface Brand {
  slug: string;
  name: string;
  logo: string;
  subtitle: string;
}

export const brands: Brand[] = [
  {
    slug: 'commax',
    name: 'COMMAX',
    logo: '/brands/logo-commax.png',
    subtitle: 'Videoporteros · Sistemas IP',
  },
  {
    slug: 'yusphone',
    name: 'YUSPHONE',
    logo: '/brands/logo-yusphone.png',
    subtitle: 'YUSPHONE · Residencial',
  },
  {
    slug: 'belcom',
    name: 'BELCOM',
    logo: '/brands/logo-belcom.png',
    subtitle: 'Edificios · Condominios',
  },
  {
    slug: 'hikvision',
    name: 'HIKVISION',
    logo: '/brands/logo-hikvision.jpeg',
    subtitle: 'Videoporteros IP · Redes',
  },
];
