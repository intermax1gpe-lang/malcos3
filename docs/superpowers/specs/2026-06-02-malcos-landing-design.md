# MALCOS S.A.C. — Landing Page Design Spec

**Date:** 2026-06-02  
**Stack:** Astro + Tailwind CSS  
**URL actual:** https://malcos.com.pe/

---

## Resumen

Landing page para **MALCOS S.A.C.**, empresa peruana distribuidora de intercomunicadores en Lima. Rediseño del sitio actual con estructura mejorada, secciones de altura completa y CTA de cotización vía WhatsApp.

---

## Paleta de Colores

| Token | Valor | Uso |
|-------|-------|-----|
| `blue` | `#1a4f9c` | Navbar, acentos primarios |
| `orange` | `#f7941d` | Botones CTA, bullets, hover |
| `dark` | `#2d2d2d` | Sección formulario |
| `gray` | `#333333` | Footer |

Logo: cyan `#2dd4bf` itálico (asset real: `logo-malcos-01.png`)

---

## Estructura de Secciones

### 1. Top Bar (fija, no sticky)
- Logo real MALCOS (imagen PNG)
- Teléfono: **934 852 558** con ícono
- Email: **ventas@malcos.com.pe** con ícono

### 2. Navbar (sticky)
- Fondo `#1a4f9c`, texto blanco
- Links: Inicio · COMMAX ▾ · YUSPHONE ▾ · BELCOM ▾ · KOCOM ▾
- Cada marca tiene dropdown con sus productos
- Íconos Facebook e Instagram a la derecha

### 3. Hero (100vh)
- Foto de fondo: `girl-answer-the-intercom-call...jpg` (asset del sitio actual)
- Overlay oscuro degradado
- Badge: "🔒 Distribuidor Autorizado · Lima, Perú"
- H1: **"TEN EL CONTROL DE QUIÉN ENTRA Y SALE!"**
- Subtítulo: "Con nuestros productos podrás hacerlo desde la comodidad de tu hogar, oficina o departamento."
- CTA primario: botón naranja **"Contáctanos"** → ancla `#cotizar`
- **Franja de 4 marcas al pie del hero** (grid 4 cols, fondo semitransparente oscuro):
  - Logo blanco de cada marca (COMMAX, YUSPHONE, BELCOM, KOCOM)
  - Subtítulo de categoría
  - "Ver productos →" en naranja
  - Hover: fondo naranja suave, logo a color

### 4. Nosotros (100vh)
- Grid 2 columnas: foto izquierda | texto derecho
- Contenido: descripción de la empresa, lista de 4 marcas con bullets naranja
- CTA: botón naranja "Más información"

### 5. CTA Banner (30vh)
- Foto de fondo con overlay oscuro
- Texto: "¡Conecta Tu Espacio, Transforma Tu Comunicación!"
- Círculo naranja con "24 HORAS"

### 6. Beneficios (100vh)
- Fondo `#f8fafc`
- Grid 3×2 de cards: Ahorro · Rapidez · Vigilancia · Comunicación · Seguridad · Garantía

### 7. Formulario de Cotización (100vh) — id="cotizar"
- Fondo `#2d2d2d`
- Grid 2 cols: formulario izquierda | texto motivacional derecha
- Campos: Nombres*, Email, Celular*, Marca de interés (select), Mensaje
- **Submit → abre WhatsApp** `https://wa.me/51934852558` con mensaje pre-llenado con los datos del formulario
- Botón verde WhatsApp "Enviar por WhatsApp"

### 8. Banner Técnico (30vh)
- Fondo: mitad azul `#1a4f9c` | mitad foto de técnico
- Texto: "PROFESIONALES TÉCNICOS DE ALTA CALIFICACIÓN Y AMPLIA EXPERIENCIA A SU SERVICIO."

### 9. Footer
- Fondo `#333`
- 3 columnas: Logo + descripción | Dirección | Contacto
- Dirección: Calle Don Pompeyo Mz. C2 Lt. 4, Urb. Santa Rosa - Surco, Lima
- Teléfono grande: 934 852 558
- Copyright: "derechos reservados MALCOS®"

### 10. WhatsApp Flotante (fijo)
- Botón circular verde en esquina inferior derecha
- Siempre visible, abre WhatsApp con +51934852558

---

## Assets

Todos los assets se descargan del CDN del sitio actual:

| Asset | URL |
|-------|-----|
| Logo MALCOS | `https://malcos.com.pe/wp-content/uploads/2024/01/logo-malcos-01.png` |
| Logo COMMAX | `https://malcos.com.pe/wp-content/uploads/2024/01/logo-commax-1024x226.png` |
| Logo YUSPHONE | `https://malcos.com.pe/wp-content/uploads/2024/01/yuphone-logo.png` |
| Logo BELCOM | `https://malcos.com.pe/wp-content/uploads/2024/01/cropped-Lg-Belcom-Peru-Intercomunicadores-003.png` |
| Logo KOCOM | `https://malcos.com.pe/wp-content/uploads/2024/01/Kocom-logo-1024x364.png` |
| Hero foto | `https://malcos.com.pe/wp-content/uploads/2024/01/girl-answer-the-intercom-call-while-holding-the-ph-2023-11-27-04-55-41-utc-scaled.jpg` |

---

## Lógica WhatsApp CTA

```js
const msg = `Hola MALCOS, me interesa una cotización.
Nombre: ${nombre}
Celular: ${celular}
Marca: ${marca}
Mensaje: ${mensaje}`
window.open(`https://wa.me/51934852558?text=${encodeURIComponent(msg)}`)
```

---

## Decisiones técnicas

- **Astro 4+** con output `static`
- **Tailwind CSS 3.4+** — sin CSS-in-JS
- Sin backend — 100% estático
- Assets de marcas: descargados a `/public/brands/` en build
- Fuentes: sistema (`font-sans`) para body, sin Google Fonts externos
- SEO: `<title>`, meta description, JSON-LD LocalBusiness
- Zona horaria display: `America/Lima`
