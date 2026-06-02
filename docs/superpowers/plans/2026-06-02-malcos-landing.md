# MALCOS Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a full-height, static landing page for MALCOS S.A.C. in Astro 4 + Tailwind CSS with WhatsApp quote CTA.

**Architecture:** Single Astro page (`index.astro`) composing 10 isolated section components. No backend — 100% static output. WhatsApp form logic handled client-side via inline `<script>` in the Cotizacion component.

**Tech Stack:** Astro 4, Tailwind CSS 3.4, TypeScript, static output (`output: 'static'`)

---

## File Map

| File | Responsabilidad |
|------|----------------|
| `astro.config.mjs` | Config Astro: integración Tailwind, output static |
| `tailwind.config.mjs` | Tokens de color: blue, orange, dark, gray |
| `src/layouts/Layout.astro` | HTML shell: `<head>` con SEO, meta, JSON-LD |
| `src/data/brands.ts` | Array tipado de las 4 marcas con logo, slug, subtítulo |
| `src/components/TopBar.astro` | Logo + teléfono + email |
| `src/components/Navbar.astro` | Sticky nav azul con links de marcas |
| `src/components/Hero.astro` | 100vh hero + franja de 4 marcas al pie |
| `src/components/Nosotros.astro` | 100vh grid foto/texto |
| `src/components/CtaBanner.astro` | 30vh banner con foto + texto + círculo 24h |
| `src/components/Beneficios.astro` | 100vh grid 3×2 de cards |
| `src/components/Cotizacion.astro` | 100vh formulario + lógica WhatsApp |
| `src/components/TechBanner.astro` | 30vh banner técnico split azul/foto |
| `src/components/Footer.astro` | Fondo #333, 3 columnas |
| `src/components/WhatsAppFloat.astro` | Botón fijo esquina inferior derecha |
| `src/pages/index.astro` | Ensambla todos los componentes |
| `public/brands/` | PNGs de logos descargados |
| `public/images/hero-bg.jpg` | Foto hero descargada |

---

## Task 1: Scaffold del proyecto Astro + Tailwind

**Files:**
- Create: `astro.config.mjs`
- Create: `tailwind.config.mjs`
- Create: `tsconfig.json`
- Create: `package.json`

- [ ] **Step 1: Crear proyecto Astro desde cero**

```bash
cd "C:\Users\InterMAX24\Documents\PROYECT_JUNIO\MALCOS3"
npm create astro@latest . -- --template minimal --typescript strict --no-install --no-git
```

Cuando pregunte si sobreescribir archivos existentes: **Yes**.

- [ ] **Step 2: Instalar dependencias + Tailwind**

```bash
npm install
npx astro add tailwind --yes
```

- [ ] **Step 3: Verificar `astro.config.mjs` generado — debe tener Tailwind**

Contenido esperado:
```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
});
```

Si `output: 'static'` no está, agrégalo manualmente.

- [ ] **Step 4: Configurar tokens de color en `tailwind.config.mjs`**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue:   '#1a4f9c',
          orange: '#f7941d',
          dark:   '#2d2d2d',
          gray:   '#333333',
        },
      },
      minHeight: {
        'screen-30': '30vh',
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 5: Verificar que el proyecto compila**

```bash
npm run build
```

Esperado: `dist/` generado sin errores.

- [ ] **Step 6: Commit**

```bash
git init
git add .
git commit -m "feat: scaffold Astro 4 + Tailwind con tokens de color MALCOS"
```

---

## Task 2: Descargar assets a /public

**Files:**
- Create: `public/brands/logo-malcos.png`
- Create: `public/brands/logo-commax.png`
- Create: `public/brands/logo-yusphone.png`
- Create: `public/brands/logo-belcom.png`
- Create: `public/brands/logo-kocom.png`
- Create: `public/images/hero-bg.jpg`

- [ ] **Step 1: Crear carpetas**

```bash
mkdir -p public/brands public/images
```

- [ ] **Step 2: Descargar logos de marcas**

```bash
curl -L "https://malcos.com.pe/wp-content/uploads/2024/01/logo-malcos-01.png" -o public/brands/logo-malcos.png
curl -L "https://malcos.com.pe/wp-content/uploads/2024/01/logo-commax-1024x226.png" -o public/brands/logo-commax.png
curl -L "https://malcos.com.pe/wp-content/uploads/2024/01/yuphone-logo.png" -o public/brands/logo-yusphone.png
curl -L "https://malcos.com.pe/wp-content/uploads/2024/01/cropped-Lg-Belcom-Peru-Intercomunicadores-003.png" -o public/brands/logo-belcom.png
curl -L "https://malcos.com.pe/wp-content/uploads/2024/01/Kocom-logo-1024x364.png" -o public/brands/logo-kocom.png
curl -L "https://malcos.com.pe/wp-content/uploads/2024/01/girl-answer-the-intercom-call-while-holding-the-ph-2023-11-27-04-55-41-utc-scaled.jpg" -o public/images/hero-bg.jpg
```

- [ ] **Step 3: Verificar que los archivos existen y tienen peso > 0**

```bash
ls -lh public/brands/ public/images/
```

Todos deben pesar > 5 KB.

- [ ] **Step 4: Commit**

```bash
git add public/
git commit -m "feat: agregar assets de marcas y hero desde malcos.com.pe"
```

---

## Task 3: Layout.astro + datos de marcas

**Files:**
- Create: `src/layouts/Layout.astro`
- Create: `src/data/brands.ts`

- [ ] **Step 1: Crear `src/data/brands.ts`**

```ts
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
    slug: 'kocom',
    name: 'KOCOM',
    logo: '/brands/logo-kocom.png',
    subtitle: 'Control de acceso',
  },
];
```

- [ ] **Step 2: Crear `src/layouts/Layout.astro`**

```astro
---
interface Props {
  title?: string;
  description?: string;
}
const {
  title = 'MALCOS S.A.C. — Intercomunicadores en Lima, Perú',
  description = 'Venta e instalación de intercomunicadores COMMAX, YUSPHONE, BELCOM y KOCOM en Lima. Distribuidor autorizado. Solicita tu cotización.',
} = Astro.props;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'MALCOS S.A.C.',
  description,
  telephone: '+51934852558',
  email: 'ventas@malcos.com.pe',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Calle Don Pompeyo Mz. C2 Lt. 4, Urb. Santa Rosa',
    addressLocality: 'Surco',
    addressRegion: 'Lima',
    addressCountry: 'PE',
  },
  url: 'https://malcos.com.pe',
};
---
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    <title>{title}</title>
    <link rel="icon" type="image/png" href="/brands/logo-malcos.png" />
    <script type="application/ld+json" set:html={JSON.stringify(jsonLd)} />
  </head>
  <body class="font-sans antialiased">
    <slot />
  </body>
</html>
```

- [ ] **Step 3: Build para verificar**

```bash
npm run build
```

Esperado: sin errores TypeScript ni Astro.

- [ ] **Step 4: Commit**

```bash
git add src/
git commit -m "feat: Layout con SEO + JSON-LD LocalBusiness + data de marcas"
```

---

## Task 4: TopBar + Navbar

**Files:**
- Create: `src/components/TopBar.astro`
- Create: `src/components/Navbar.astro`

- [ ] **Step 1: Crear `src/components/TopBar.astro`**

```astro
---
---
<div class="bg-white border-b border-slate-200 px-12 py-3 flex justify-between items-center">
  <!-- Logo -->
  <a href="/">
    <img
      src="/brands/logo-malcos.png"
      alt="MALCOS Intercomunicadores"
      class="h-14 w-auto"
    />
  </a>

  <!-- Contactos -->
  <div class="flex gap-8">
    <!-- Teléfono -->
    <div class="flex items-center gap-3">
      <div class="w-9 h-9 rounded-full border-2 border-brand-blue flex items-center justify-center text-brand-blue text-sm">
        📞
      </div>
      <div>
        <p class="text-lg font-extrabold text-brand-blue leading-tight">934 852 558</p>
        <p class="text-xs text-slate-500">Celular</p>
      </div>
    </div>
    <!-- Email -->
    <div class="flex items-center gap-3">
      <div class="w-9 h-9 rounded-full border-2 border-brand-blue flex items-center justify-center text-brand-blue text-sm">
        ✉️
      </div>
      <div>
        <p class="font-extrabold text-brand-blue leading-tight text-sm">ventas@malcos.com.pe</p>
        <p class="text-xs text-slate-500">Email</p>
      </div>
    </div>
  </div>
</div>
```

- [ ] **Step 2: Crear `src/components/Navbar.astro`**

```astro
---
import { brands } from '../data/brands';
---
<nav class="bg-brand-blue sticky top-0 z-50 px-12 flex justify-between items-center">
  <ul class="flex">
    <li>
      <a href="/" class="block px-5 py-4 text-white text-xs font-bold uppercase tracking-wide bg-black/20">
        Inicio
      </a>
    </li>
    {brands.map((b) => (
      <li class="relative group">
        <a
          href={`#${b.slug}`}
          class="block px-5 py-4 text-white text-xs font-bold uppercase tracking-wide hover:bg-black/25 transition-colors"
        >
          {b.name} ▾
        </a>
      </li>
    ))}
  </ul>
  <div class="flex gap-4 items-center">
    <a href="https://facebook.com" target="_blank" rel="noopener" class="text-white text-xs font-bold opacity-80 hover:opacity-100">FB</a>
    <a href="https://instagram.com" target="_blank" rel="noopener" class="text-white text-xs font-bold opacity-80 hover:opacity-100">IG</a>
  </div>
</nav>
```

- [ ] **Step 3: Build**

```bash
npm run build
```

Esperado: sin errores.

- [ ] **Step 4: Commit**

```bash
git add src/components/TopBar.astro src/components/Navbar.astro
git commit -m "feat: TopBar con logo real y Navbar sticky con links de marcas"
```

---

## Task 5: Hero (100vh + franja de marcas)

**Files:**
- Create: `src/components/Hero.astro`

- [ ] **Step 1: Crear `src/components/Hero.astro`**

```astro
---
import { brands } from '../data/brands';
---
<section
  class="relative flex flex-col"
  style="min-height: 100vh;"
>
  <!-- Fondo con overlay -->
  <div
    class="absolute inset-0 bg-cover bg-center"
    style="background-image: url('/images/hero-bg.jpg');"
  ></div>
  <div class="absolute inset-0 bg-gradient-to-b from-[#0a1437/70] via-[#0a1437/55] to-black/80"></div>

  <!-- Contenido principal -->
  <div class="relative flex-1 flex items-center px-20 pt-20 pb-10">
    <div class="max-w-2xl">
      <!-- Badge -->
      <span class="inline-block mb-6 bg-brand-orange/20 border border-brand-orange text-amber-400 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
        🔒 Distribuidor Autorizado · Lima, Perú
      </span>
      <!-- Título -->
      <h1 class="text-6xl font-black text-white uppercase leading-[1.08] mb-5">
        Ten el control<br />de quién<br />entra y sale!
      </h1>
      <!-- Subtítulo -->
      <p class="text-lg text-slate-300 leading-relaxed max-w-lg mb-8">
        Con nuestros productos podrás hacerlo desde la comodidad de tu hogar, oficina o departamento.
      </p>
      <!-- CTA -->
      <a
        href="#cotizar"
        class="inline-block bg-brand-orange text-white px-9 py-4 rounded font-extrabold text-sm uppercase tracking-widest hover:bg-orange-600 transition-colors"
      >
        Contáctanos
      </a>
    </div>
  </div>

  <!-- Franja de 4 marcas al pie del hero -->
  <div class="relative grid grid-cols-4 border-t border-white/10 bg-black/55 backdrop-blur-sm">
    {brands.map((b) => (
      <a
        href={`#${b.slug}`}
        class="group flex flex-col items-center justify-center gap-3 py-6 px-5 border-r border-white/10 last:border-r-0 hover:bg-brand-orange/20 transition-colors"
      >
        <img
          src={b.logo}
          alt={b.name}
          class="h-9 object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all"
        />
        <span class="text-slate-400 text-xs text-center">{b.subtitle}</span>
        <span class="text-brand-orange text-xs font-bold">Ver productos →</span>
      </a>
    ))}
  </div>
</section>
```

- [ ] **Step 2: Build**

```bash
npm run build
```

Esperado: sin errores.

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.astro
git commit -m "feat: Hero 100vh con overlay + franja de 4 marcas al pie"
```

---

## Task 6: Nosotros (100vh)

**Files:**
- Create: `src/components/Nosotros.astro`

- [ ] **Step 1: Crear `src/components/Nosotros.astro`**

```astro
---
import { brands } from '../data/brands';
---
<section class="grid grid-cols-2" style="min-height: 100vh;">
  <!-- Foto izquierda -->
  <div
    class="bg-cover bg-center"
    style="background-image: url('/images/hero-bg.jpg');"
    aria-hidden="true"
  ></div>

  <!-- Texto derecho -->
  <div class="flex flex-col justify-center px-18 py-20 bg-white">
    <span class="text-brand-orange text-xs font-bold uppercase tracking-widest mb-4">
      Quiénes somos
    </span>
    <h2 class="text-4xl font-black text-slate-900 mb-5 leading-tight">Nosotros</h2>
    <p class="text-sm text-slate-600 leading-relaxed mb-4">
      Somos una Empresa peruana dedicada a la Importación e Distribución de
      INTERCOMUNICADORES, VIDEO PORTEROS, SISTEMAS DIGITALES Y ANÁLOGAS,
      Cerraduras Eléctricas y Accesorios.
    </p>
    <p class="text-sm text-slate-600 leading-relaxed mb-4">
      Para Casa, Oficina, Edificio, Condominio, Hoteles.
      <strong>MARCAS DE LÍDER MUNDIAL</strong> en Intercomunicadores.
    </p>
    <ul class="mb-8 divide-y divide-slate-100">
      {brands.map((b) => (
        <li class="flex items-center gap-3 py-2.5 text-sm font-bold text-slate-800">
          <span class="w-2.5 h-2.5 rounded-full bg-brand-orange flex-shrink-0"></span>
          {b.name}
        </li>
      ))}
    </ul>
    <a
      href="#cotizar"
      class="inline-block self-start bg-brand-orange text-white px-8 py-3.5 rounded font-extrabold text-xs uppercase tracking-widest hover:bg-orange-600 transition-colors"
    >
      Más información
    </a>
  </div>
</section>
```

- [ ] **Step 2: Build**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Nosotros.astro
git commit -m "feat: sección Nosotros 100vh con foto y lista de marcas"
```

---

## Task 7: CtaBanner + TechBanner (30vh)

**Files:**
- Create: `src/components/CtaBanner.astro`
- Create: `src/components/TechBanner.astro`

- [ ] **Step 1: Crear `src/components/CtaBanner.astro`**

```astro
---
---
<section
  class="relative flex items-center justify-between gap-8 px-16"
  style="min-height: 30vh; background: linear-gradient(rgba(0,0,0,0.62), rgba(0,0,0,0.62)), url('/images/hero-bg.jpg') center/cover;"
>
  <h2 class="text-4xl font-black text-white leading-snug max-w-xl">
    ¡Conecta Tu Espacio,<br />Transforma Tu Comunicación!
  </h2>
  <div class="flex-shrink-0 w-28 h-28 rounded-full border-4 border-brand-orange bg-brand-orange/15 flex flex-col items-center justify-center">
    <span class="text-4xl font-black text-brand-orange leading-none">24</span>
    <span class="text-xs font-bold text-brand-orange">HORAS</span>
  </div>
</section>
```

- [ ] **Step 2: Crear `src/components/TechBanner.astro`**

```astro
---
---
<section
  class="flex items-center px-20"
  style="min-height: 30vh; background: linear-gradient(90deg, #1a4f9c 52%, transparent 52%), url('/images/hero-bg.jpg') right center / cover;"
>
  <h2 class="text-4xl font-black text-white uppercase leading-snug max-w-xl">
    Profesionales técnicos<br />de alta calificación<br />
    y amplia experiencia<br />a su servicio.
  </h2>
</section>
```

- [ ] **Step 3: Build**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/components/CtaBanner.astro src/components/TechBanner.astro
git commit -m "feat: CtaBanner y TechBanner en 30vh"
```

---

## Task 8: Beneficios (100vh)

**Files:**
- Create: `src/components/Beneficios.astro`

- [ ] **Step 1: Crear `src/components/Beneficios.astro`**

```astro
---
const items = [
  { icon: '💰', title: 'Ahorro',         desc: 'Mejores precios del mercado con calidad garantizada' },
  { icon: '⚡', title: 'Rapidez',        desc: 'Instalación en Lima Metropolitana en 24–48 horas' },
  { icon: '📹', title: 'Vigilancia',     desc: 'Control visual de accesos en tiempo real' },
  { icon: '📞', title: 'Comunicación',   desc: 'Intercomunicación clara entre ambientes' },
  { icon: '🛡️', title: 'Seguridad',     desc: 'Protege tu hogar, edificio u oficina' },
  { icon: '✅', title: 'Garantía',       desc: '12 meses en todos los equipos y mano de obra' },
];
---
<section
  class="bg-slate-50 flex flex-col items-center justify-center px-12"
  style="min-height: 100vh;"
>
  <h2 class="text-4xl font-black text-brand-blue mb-3">¿Por qué elegirnos?</h2>
  <p class="text-slate-500 text-sm mb-14">Más de 10 años protegiendo hogares y empresas en Lima</p>

  <div class="grid grid-cols-3 gap-6 w-full max-w-5xl">
    {items.map((item) => (
      <div class="bg-white border border-slate-200 rounded-2xl p-9 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
        <div class="text-4xl mb-4">{item.icon}</div>
        <h3 class="text-base font-extrabold text-brand-blue mb-2">{item.title}</h3>
        <p class="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
      </div>
    ))}
  </div>
</section>
```

- [ ] **Step 2: Build**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Beneficios.astro
git commit -m "feat: sección Beneficios 100vh grid 3x2"
```

---

## Task 9: Cotizacion (100vh + WhatsApp)

**Files:**
- Create: `src/components/Cotizacion.astro`

- [ ] **Step 1: Crear `src/components/Cotizacion.astro`**

```astro
---
import { brands } from '../data/brands';
---
<section
  id="cotizar"
  class="bg-brand-dark grid grid-cols-2 gap-20 items-center px-20"
  style="min-height: 100vh;"
>
  <!-- Formulario -->
  <div>
    <h3 class="text-2xl font-extrabold text-white text-center mb-2 leading-snug">
      Solicite su Cotización<br />Personalizada Hoy
    </h3>
    <p class="text-gray-400 text-xs text-center mb-7">
      y Dé el Primer Paso Hacia la Realización de Sus Metas
    </p>

    <form id="wa-form" class="flex flex-col gap-3">
      <input
        id="f-nombre"
        type="text"
        placeholder="Nombres *"
        required
        class="w-full bg-white rounded px-4 py-3 text-sm text-slate-800 outline-none"
      />
      <input
        id="f-email"
        type="email"
        placeholder="Email"
        class="w-full bg-white rounded px-4 py-3 text-sm text-slate-800 outline-none"
      />
      <input
        id="f-celular"
        type="tel"
        placeholder="Celular *"
        required
        class="w-full bg-white rounded px-4 py-3 text-sm text-slate-800 outline-none"
      />
      <select
        id="f-marca"
        class="w-full bg-white rounded px-4 py-3 text-sm text-slate-800 outline-none"
      >
        <option value="">Marca de interés</option>
        {brands.map((b) => <option value={b.name}>{b.name}</option>)}
        <option value="No sé aún">No sé aún</option>
      </select>
      <textarea
        id="f-mensaje"
        placeholder="Mensaje (tipo de inmueble, cantidad de departamentos...)"
        rows="4"
        class="w-full bg-white rounded px-4 py-3 text-sm text-slate-800 outline-none resize-none"
      ></textarea>

      <button
        type="submit"
        class="w-full bg-[#25d366] text-white py-4 rounded font-extrabold text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#1fba58] transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        Enviar por WhatsApp
      </button>
      <p class="text-gray-500 text-xs text-center">
        Se abrirá WhatsApp con tu consulta lista → +51 934 852 558
      </p>
    </form>

    <script>
      document.getElementById('wa-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre  = (document.getElementById('f-nombre')  as HTMLInputElement).value;
        const email   = (document.getElementById('f-email')   as HTMLInputElement).value;
        const celular = (document.getElementById('f-celular') as HTMLInputElement).value;
        const marca   = (document.getElementById('f-marca')   as HTMLSelectElement).value;
        const mensaje = (document.getElementById('f-mensaje') as HTMLTextAreaElement).value;

        const text = `Hola MALCOS, me interesa una cotización.\nNombre: ${nombre}\nEmail: ${email}\nCelular: ${celular}\nMarca: ${marca || 'No especificada'}\nMensaje: ${mensaje}`;
        window.open(`https://wa.me/51934852558?text=${encodeURIComponent(text)}`, '_blank');
      });
    </script>
  </div>

  <!-- Texto motivacional -->
  <div>
    <h2 class="text-3xl font-extrabold text-white leading-snug mb-5">
      Si lo desea, permítanos ser parte de su camino hacia el éxito.
    </h2>
    <p class="text-gray-400 text-base leading-relaxed">
      Estamos listos y dispuestos a brindarle nuestra experta asistencia en su proyecto.
      Atendemos Lima Metropolitana.
    </p>
  </div>
</section>
```

- [ ] **Step 2: Build**

```bash
npm run build
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Cotizacion.astro
git commit -m "feat: formulario cotización 100vh con submit a WhatsApp"
```

---

## Task 10: Footer + WhatsAppFloat

**Files:**
- Create: `src/components/Footer.astro`
- Create: `src/components/WhatsAppFloat.astro`

- [ ] **Step 1: Crear `src/components/Footer.astro`**

```astro
---
---
<footer class="bg-brand-gray px-20 py-14 grid grid-cols-3 gap-12">
  <!-- Columna 1: Logo + descripción -->
  <div>
    <img src="/brands/logo-malcos.png" alt="MALCOS" class="h-12 mb-4" />
    <p class="text-xs text-gray-400 leading-relaxed">
      Somos una Empresa peruana dedicada a la Importación e Distribución de
      INTERCOMUNICADORES, VIDEO PORTEROS, SISTEMAS DIGITALES Y ANÁLOGAS,
      Cerraduras Eléctricas y Accesorios.
    </p>
  </div>

  <!-- Columna 2: Dirección -->
  <div>
    <h4 class="text-sm font-bold text-white mb-4">Ubícanos</h4>
    <address class="not-italic text-xs text-gray-400 leading-loose">
      📍 Calle Don Pompeyo Mz. C2 Lt. 4<br />
      Urbanización Santa Rosa - Surco<br />
      Lima, Perú
    </address>
  </div>

  <!-- Columna 3: Contacto -->
  <div>
    <h4 class="text-sm font-bold text-white mb-4">Contáctenos</h4>
    <p class="text-4xl font-black text-white leading-none mb-3">934 852 558</p>
    <p class="text-xs text-gray-400">✉️ ventas@malcos.com.pe</p>
  </div>
</footer>
<div class="bg-[#222] text-center py-3 text-xs text-gray-600">
  derechos reservados MALCOS® · Lima, Perú
</div>
```

- [ ] **Step 2: Crear `src/components/WhatsAppFloat.astro`**

```astro
---
---
<a
  href="https://wa.me/51934852558"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Contáctanos por WhatsApp"
  class="fixed bottom-7 right-7 z-50 w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.55)] hover:scale-110 transition-transform"
>
  <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
</a>
```

- [ ] **Step 3: Build**

```bash
npm run build
```

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.astro src/components/WhatsAppFloat.astro
git commit -m "feat: Footer 3 columnas + botón WhatsApp flotante"
```

---

## Task 11: Ensamblar index.astro

**Files:**
- Create: `src/pages/index.astro`

- [ ] **Step 1: Crear `src/pages/index.astro`**

```astro
---
import Layout from '../layouts/Layout.astro';
import TopBar from '../components/TopBar.astro';
import Navbar from '../components/Navbar.astro';
import Hero from '../components/Hero.astro';
import Nosotros from '../components/Nosotros.astro';
import CtaBanner from '../components/CtaBanner.astro';
import Beneficios from '../components/Beneficios.astro';
import Cotizacion from '../components/Cotizacion.astro';
import TechBanner from '../components/TechBanner.astro';
import Footer from '../components/Footer.astro';
import WhatsAppFloat from '../components/WhatsAppFloat.astro';
---
<Layout>
  <TopBar />
  <Navbar />
  <Hero />
  <Nosotros />
  <CtaBanner />
  <Beneficios />
  <Cotizacion />
  <TechBanner />
  <Footer />
  <WhatsAppFloat />
</Layout>
```

- [ ] **Step 2: Build final completo**

```bash
npm run build
```

Esperado: `dist/index.html` generado, sin errores ni warnings críticos.

- [ ] **Step 3: Levantar dev server y verificar visualmente**

```bash
npm run dev
```

Abrir `http://localhost:4321` y verificar sección por sección:
- [ ] TopBar muestra logo real
- [ ] Navbar sticky y azul con 4 marcas
- [ ] Hero ocupa 100vh con franja de marcas al pie
- [ ] Nosotros ocupa 100vh con foto + texto
- [ ] CTA Banner ocupa ~30vh
- [ ] Beneficios ocupa 100vh con 6 cards
- [ ] Formulario ocupa 100vh, submit abre WhatsApp
- [ ] Tech Banner ocupa ~30vh
- [ ] Footer 3 columnas con logo y datos
- [ ] Botón WhatsApp flotante visible en todas las secciones

- [ ] **Step 4: Commit final**

```bash
git add src/pages/index.astro
git commit -m "feat: landing page MALCOS completa — todas las secciones ensambladas"
```
