# VainaWeb - Agencia Web Dominicana

**"Arreglamo tu vaina virtual"**

## 🎨 Descripción

VainaWeb es un sitio web de agencia digital diseñado con una estética **editorial brutalist** que combina:

- **Tipografía audaz** - Mix de Playfair Display (serif editorial) + Inter (moderna sans) + Space Grotesk (monospace)
- **Colores vibrantes** - Acentos rojos/naranjas/amarillos en fondos limpios (inspirado en diseño suizo y brutalism)
- **Honestidad brutal** - Copy directo y auténtico, sin corporativismo vacío (inspirado en dbrand)
- **Layouts asimétricos** - Diseño tipo revista/editorial, no el típico funnel de agencia
- **Animaciones sutiles** - Micro-interacciones que mejoran la experiencia

## 📁 Estructura del Sitio

### Páginas Principales

1. **Home (`/`)** - Página principal con hero impactante, manifesto, servicios overview, y CTAs
2. **Trabajo (`/work`)** - Portfolio de proyectos con grid editorial
3. **Servicios (`/services`)** - Descripción detallada de servicios ofrecidos
4. **Proceso (`/process`)** - Timeline visual del proceso de trabajo
5. **Nosotros (`/about`)** - Historia del equipo, valores, y cultura
6. **Contacto (`/contact`)** - Formulario de contacto + info de contacto

### Componentes

- **Navigation** - Header minimalista con gradiente en logo
- **Footer** - Footer oscuro con links y social media

## 🎨 Sistema de Diseño

### Paleta de Colores

```css
--vaina-red: #FF3B30      /* Acentos principales */
--vaina-orange: #FF9500   /* Acentos secundarios */
--vaina-yellow: #FFD60A   /* Acentos terciarios */
--vaina-black: #0A0A0A    /* Fondo oscuro */
--vaina-white: #FAFAFA    /* Fondo claro */
--vaina-gray: #E5E5E5     /* Grises neutrales */
--vaina-dark-gray: #1A1A1A
```

### Tipografía

- **Display/Headings**: Playfair Display (900 weight, editorial)
- **Body/UI**: Inter (variable weights 300-900)
- **Monospace/Technical**: Space Grotesk (para labels y CTAs)

### Utilidades CSS Personalizadas

- `.brutalist-card` - Cards con border negro y shadow en hover
- `.gradient-text` - Texto con gradiente animado
- `.hand-underline` - Efecto de subrayado al hover
- `.text-editorial` - Estilo italic para énfasis
- `.text-brutal` - Uppercase bold para títulos técnicos
- `.hover-lift` - Elevación suave en hover
- `.fade-in` - Animación de entrada
- `.stagger-children` - Animaciones escalonadas

## 🚀 Tecnologías

- **Framework**: Next.js 16 (App Router)
- **Styling**: TailwindCSS + Custom CSS
- **Fonts**: Google Fonts (Playfair Display, Inter, Space Grotesk)
- **TypeScript**: Para type-safety

## 🏗️ Desarrollo

### Instalación

```bash
cd vainaweb
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build

```bash
npm run build
npm run start
```

## 🎯 Características Destacadas

### 1. Diseño Editorial

- **Tipografía mezclada**: Combina serif elegante (Playfair) con sans moderna (Inter)
- **Layouts asimétricos**: Grids no tradicionales inspirados en revistas
- **Espaciado generoso**: Breathing room para que el contenido respire

### 2. Branding Auténtico

- **Copy honesto**: "Arreglamo tu vaina virtual" - directo, sin corporativismo
- **Zero bullshit**: Promesas realistas, no marketing inflado
- **Personalidad única**: Como dbrand, pero para agencias web

### 3. UX Optimizada

- **Micro-animaciones**: Transiciones suaves que guían la atención
- **Navegación clara**: Links con underline effects
- **Responsive total**: Mobile-first design
- **Performance**: Optimizado para carga rápida

### 4. Estructura No Tradicional

En lugar del típico funnel de agencia (Home > Services > Portfolio > Contact), VainaWeb tiene:

- **Manifesto section** - "No somos tu agencia típica"
- **Why us section** - Honestidad brutal sobre nuestros valores
- **Process page** - Transparencia total sobre cómo trabajamos
- **Multiple CTAs** - Varios puntos de conversión, no solo uno

## 📝 Copy Guidelines

El tono de VainaWeb es:

✅ **Directo y honesto** - "Te decimos la verdad de frente"
✅ **Playful pero profesional** - "Arreglamo tu vaina" + expertise real
✅ **Anti-corporativo** - Sin jerga empresarial vacía
✅ **Confiado** - Sabemos lo que hacemos, y lo mostramos

❌ **No corporativo** - Evitar "soluciones innovadoras end-to-end"
❌ **No exagerado** - Evitar "los mejores del mundo"
❌ **No genérico** - Evitar copy de plantilla

## 🎨 Referencias de Diseño

El diseño se inspiró en:

1. **Diseño editorial suizo** - Tipografía bold, grids asimétricos
2. **Brutalism web** - Honestidad visual, sin decoración innecesaria
3. **dbrand branding** - Honestidad brutal, playful pero confiado
4. **Revistas de diseño** - Alto contraste, fotografía + tipografía

## 🔮 Próximos Pasos Sugeridos

1. **Contenido real**: Reemplazar placeholder copy con proyectos reales
2. **Imágenes**: Agregar fotografía profesional y screenshots de proyectos
3. **Blog**: Sección de artículos sobre diseño/desarrollo
4. **Case studies**: Páginas detalladas de proyectos (work/[id])
5. **Animations**: Más micro-interacciones en scroll
6. **SEO**: Optimizar meta tags, structured data
7. **Analytics**: Implementar Google Analytics / Plausible
8. **CMS**: Integrar un CMS headless (Sanity, Contentful)

## 📄 Licencia

Proyecto privado - VainaWeb © 2024

---

**Hecho con ❤️ (y honestidad brutal) en República Dominicana** 🇩🇴
# vainaweb
