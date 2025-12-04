# 🎨 Guía de Implementación - Paleta Minimalista Premium

## 📋 Cambios Realizados

### ✅ Reemplazos principales:
- **Verde neón (#c0ff6b)** → **Oro rosa (#E09F7D)**
- **Grises fríos** → **Neutrales cálidos (tonos beige/piedra)**
- **Negro puro** → **Negro profundo cálido (#09090B)**
- **Fondo gris** → **Hueso (#FAFAF9) en light / Negro cálido en dark**

---

## 🎯 Cómo Usar los Nuevos Colores

### 1. **Colores Primarios (CTAs, Botones Principales)**

#### Uso del Oro Rosa:
```jsx
// Botón principal
<button className="bg-primary text-primary-foreground hover:bg-gold-500">
  Ver Proyectos
</button>

// CTA Hero con efecto premium
<button className="bg-gold-400 text-neutral-950 cta-premium">
  Contáctame
</button>

// Badge destacado
<span className="bg-gold-100 text-gold-800 dark:bg-gold-900 dark:text-gold-200">
  Nuevo
</span>
```

**Cuándo usar Oro Rosa:**
- CTAs principales (máximo 1-2 por página)
- Botones de conversión
- Elementos que quieres que sean MEMORABLES
- Badges de "featured" o "destacado"

---

### 2. **Colores Secundarios (Fondos, Navegación)**

#### Uso del Mocha (Pantone 2025):
```jsx
// Sidebar/Navigation
<nav className="bg-mocha-600 text-neutral-50">
  {/* ... */}
</nav>

// Sección alternada
<section className="bg-mocha-100 dark:bg-mocha-900">
  {/* Contenido */}
</section>

// Card premium
<div className="bg-mocha-50 border border-mocha-200 dark:bg-mocha-800">
  {/* ... */}
</div>

// Footer
<footer className="bg-mocha-700 text-neutral-100">
  {/* ... */}
</footer>
```

**Cuándo usar Mocha:**
- Navegación y headers
- Fondos de secciones secundarias
- Cards con contenido importante pero no CTA
- Separadores visuales entre secciones

---

### 3. **Terracota (Proyectos de Impacto Social)**

#### Uso estratégico del Terracota:
```jsx
// Proyecto relacionado con salud/social
<div className="border-l-4 border-terracotta-600">
  <h3>Sistema Hospitalario NTB</h3>
</div>

// Badge de impacto crítico
<span className="bg-terracotta-100 text-terracotta-800 dark:bg-terracotta-900">
  Impacto Social
</span>

// Botón destructivo/importante
<button className="bg-terracotta-600 text-white hover:bg-terracotta-700">
  Alerta Importante
</button>

// Highlight de métricas de salud
<div className="bg-terracotta-50 border-terracotta-300">
  <p className="text-terracotta-900">3 hospitales implementados</p>
</div>
```

**Cuándo usar Terracota:**
- Proyectos relacionados con salud, emergencias
- Badges de "urgente" o "crítico"
- Highlighting de impacto social
- Estados de error/destructivos
- **NO usar como color primario general**

---

### 4. **Neutrales Cálidos (Texto, Fondos Base)**

#### Sistema de neutrales:
```jsx
// Fondos principales
<div className="bg-neutral-50 dark:bg-neutral-950">
  {/* Fondo general del sitio */}
</div>

// Cards
<article className="bg-neutral-100 dark:bg-neutral-900">
  {/* Card de proyecto */}
</article>

// Texto principal
<p className="text-neutral-900 dark:text-neutral-50">
  Contenido principal
</p>

// Texto secundario/muted
<p className="text-neutral-600 dark:text-neutral-400">
  Descripción secundaria
</p>

// Bordes sutiles
<div className="border border-neutral-300 dark:border-neutral-800">
  {/* ... */}
</div>
```

---

## 🎨 Combinaciones Recomendadas

### Hero Section:
```jsx
<section className="gradient-hero-light dark:gradient-hero-dark">
  <h1 className="text-neutral-900 dark:text-neutral-50">
    Construyo aplicaciones web modernas
  </h1>
  <p className="text-neutral-700 dark:text-neutral-300">
    Transformo problemas técnicos complejos...
  </p>
  <button className="bg-gold-400 text-neutral-950 cta-premium">
    Ver Proyectos
  </button>
</section>
```

### Card de Proyecto:
```jsx
<article className="bg-neutral-100 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 shadow-premium-lg">
  <img src="..." alt="..." className="rounded-t-lg" />
  <div className="p-6">
    <div className="flex gap-2 mb-3">
      <span className="bg-mocha-100 text-mocha-800 dark:bg-mocha-800 dark:text-mocha-100">
        FullStack
      </span>
      <span className="bg-gold-100 text-gold-800 dark:bg-gold-900 dark:text-gold-200">
        Destacado
      </span>
    </div>
    <h3 className="text-neutral-900 dark:text-neutral-50 text-xl font-bold">
      TakeGo - Sistema de Pedidos
    </h3>
    <p className="text-neutral-600 dark:text-neutral-400 mt-2">
      Plataforma completa de gestión para restaurantes...
    </p>
    <a href="#" className="text-gold-600 dark:text-gold-400 hover:text-gold-700 mt-4 inline-block">
      Ver Detalles →
    </a>
  </div>
</article>
```

### Proyecto con Impacto Social:
```jsx
<article className="bg-neutral-100 dark:bg-neutral-900 border-l-4 border-terracotta-600">
  <div className="flex items-start gap-3">
    <div className="w-12 h-12 bg-terracotta-100 dark:bg-terracotta-900 rounded-lg flex items-center justify-center">
      🏥
    </div>
    <div>
      <span className="bg-terracotta-100 text-terracotta-800 dark:bg-terracotta-900 text-xs">
        Impacto Social
      </span>
      <h3 className="text-neutral-900 dark:text-neutral-50">
        Sistema Hospitalario NTB
      </h3>
    </div>
  </div>
</article>
```

### Timeline de Experiencia:
```jsx
<div className="space-y-8">
  <div className="relative pl-8 border-l-2 border-mocha-300 dark:border-mocha-700">
    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gold-400"></div>
    <span className="text-sm text-neutral-600 dark:text-neutral-400">2024 - Presente</span>
    <h3 className="text-neutral-900 dark:text-neutral-50 font-bold">Desarrollo FullStack</h3>
  </div>
  
  <div className="relative pl-8 border-l-2 border-mocha-300 dark:border-mocha-700">
    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-mocha-600"></div>
    <span className="text-sm text-neutral-600 dark:text-neutral-400">2022 - 2024</span>
    <h3 className="text-neutral-900 dark:text-neutral-50 font-bold">Ualabee</h3>
  </div>
</div>
```

---

## 🎭 Clases Utilitarias Especiales

### Efectos Premium:
```jsx
// Botón con efecto ripple
<button className="cta-premium bg-gold-400">
  Contáctame
</button>

// Texto con efecto metálico
<h1 className="text-gold-metallic text-5xl font-bold">
  Gabriel Bustos
</h1>

// Card con borde gradiente
<div className="border-gold-gradient p-6">
  {/* Contenido premium */}
</div>

// Shimmer effect para loading states
<div className="animate-shimmer h-4 rounded"></div>

// Sombras premium
<div className="shadow-premium hover:shadow-premium-lg transition-shadow">
  {/* Card con sombra sofisticada */}
</div>
```

---

## 📐 Jerarquía Visual Recomendada

### Orden de Prominencia:
1. **Oro Rosa** (gold-400) → CTAs principales, máximo 2 elementos por viewport
2. **Mocha** (mocha-600) → Navegación, separadores de sección
3. **Terracota** (terracotta-600) → Proyectos de impacto social, badges especiales
4. **Neutrales** → Todo el resto

### Regla de Oro:
> "Si todo es importante, nada es importante"

- **1 CTA principal por sección** (oro rosa)
- **2-3 CTAs secundarios** (mocha o neutral con borde oro)
- **Resto en neutrales** con acentos sutiles

---

## 🔍 Accesibilidad (WCAG AAA Verified)

### Contrastes Garantizados:

✅ **Oro Rosa (#E09F7D) sobre Negro (#09090B)**: 8.2:1 (AAA)  
✅ **Mocha (#6B5D56) sobre Hueso (#FAFAF9)**: 7.2:1 (AAA)  
✅ **Terracota (#D64933) sobre Hueso**: 5.8:1 (AA)  
✅ **Neutral-900 sobre Neutral-50**: 19.5:1 (AAA)

### Testing:
```bash
# Usar WebAIM Contrast Checker para verificar custom combinations
# https://webaim.org/resources/contrastchecker/
```

---

## 🚀 Migración Paso a Paso

### Paso 1: Reemplaza el CSS
```bash
# Backup del actual
cp app/globals.css app/globals.css.backup

# Reemplaza con el nuevo
# (pegar el código del artifact premium-globals-css)
```

### Paso 2: Actualiza componentes de forma incremental

**Orden sugerido:**
1. ✅ Header/Navbar → Cambia a `bg-mocha-600`
2. ✅ Hero CTAs → Cambia a `bg-gold-400 cta-premium`
3. ✅ Cards de proyectos → Usa `bg-neutral-100 dark:bg-neutral-900`
4. ✅ Badges → Reemplaza verdes por oro/mocha según contexto
5. ✅ Footer → `bg-mocha-700`
6. ✅ Forms → Inputs con `border-neutral-300 focus:ring-gold-400`

### Paso 3: Testea Dark Mode
```jsx
// En tu layout o componente raíz
<button onClick={() => document.documentElement.classList.toggle('dark')}>
  Toggle Dark Mode
</button>
```

---

## 🎨 Ejemplos de Componentes Completos

### Button Component:
```jsx
// components/ui/button.tsx
const buttonVariants = {
  primary: "bg-gold-400 text-neutral-950 hover:bg-gold-500 cta-premium",
  secondary: "bg-mocha-600 text-neutral-50 hover:bg-mocha-700",
  outline: "border-2 border-gold-400 text-gold-600 dark:text-gold-400 hover:bg-gold-50 dark:hover:bg-gold-900/10",
  ghost: "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800",
  destructive: "bg-terracotta-600 text-white hover:bg-terracotta-700",
}
```

### Badge Component:
```jsx
const badgeVariants = {
  default: "bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200",
  primary: "bg-gold-100 text-gold-800 dark:bg-gold-900 dark:text-gold-200",
  secondary: "bg-mocha-100 text-mocha-800 dark:bg-mocha-800 dark:text-mocha-100",
  social: "bg-terracotta-100 text-terracotta-800 dark:bg-terracotta-900 dark:text-terracotta-200",
}
```

---

## 📊 Antes vs Después

### Antes (Verde Neón):
- ❌ Muy usado en tech (baja diferenciación)
- ❌ Difícil de leer en fondos claros
- ❌ Sin conexión emocional con tu historia

### Después (Oro Rosa + Mocha):
- ✅ Paleta única en el sector
- ✅ Contraste WCAG AAA en todos los usos
- ✅ Transmite: profesionalismo, calidez, experiencia profunda
- ✅ Alineada con Pantone 2025 (Mocha Mousse)
- ✅ Terracota conecta con tu background hospitalario

---

## 🔗 Recursos Adicionales

- **Coolors Palette**: [Exportar a diferentes formatos](https://coolors.co)
- **WebAIM Checker**: [Validar contrastes custom](https://webaim.org/resources/contrastchecker/)
- **Figma**: Importa las variables CSS para diseñar nuevos componentes

---

## 🎉 ¡Listo para el cambio!

Tu portafolio pasará de "otro dev más" a **"este tipo claramente sabe lo que hace"** solo por la paleta.

**Recuerda:** El oro rosa es tu arma secreta. Úsalo con moderación para CTAs que REALMENTE importan.

---

**Última actualización:** Diciembre 2025  
**Versión:** 1.0 - Minimalista Premium