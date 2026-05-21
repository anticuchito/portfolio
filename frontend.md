# Directrices de Estilo Brutalista

## Filosofía de Diseño

El estilo brutalista se caracteriza por:
- Estética cruda y honesta
- Bordes sólidos y prominentes
- Tipografía monoespaciada
- Transiciones rápidas y directas
- Contraste alto entre elementos

---

## Colores

### Tema Claro

```css
--bg-primary: #e8e4dc;      /* Fondo principal - ocre suave */
--bg-secondary: #d4cfc4;    /* Fondo secundario */
--text-primary: #1a1a1a;    /* Texto principal - negro */
--text-secondary: #6b6b6b;  /* Texto secundario - gris */
--border-color: #1a1a1a;    /* Bordes - negro */
--accent-color: #8b2635;    /* Acento - rojo oscuro */
--accent-hover: #6b1e2a;    /* Acento hover */
--box-bg: #f5f3ef;          /* Fondo de cajas */
```

### Tema Oscuro

```css
--bg-primary: #1a1a1a;      /* Fondo principal - negro */
--bg-secondary: #2a2a2a;    /* Fondo secundario */
--text-primary: #e8e4dc;    /* Texto principal - ocre */
--text-secondary: #8a8a8a;  /* Texto secundario */
--border-color: #e8e4dc;    /* Bordes - ocre */
--accent-color: #9d4edd;    /* Acento - morado */
--accent-hover: #7b2cbf;    /* Acento hover */
--box-bg: #252525;          /* Fondo de cajas */
```

### Reglas de Color
- ✅ Usar siempre las variables CSS definidas
- ✅ Mantener el contraste alto entre fondo y texto
- ✅ El color de acento debe ser el mismo en ambos temas pero diferente (rojo → morado)
- ❌ No usar colores brillantes o saturados

---

## Tipografía

### Familia Principal
```css
font-family: 'Courier New', Courier, monospace;
```

### Reglas Tipográficas
- ✅ Usar exclusivamente fuentes monoespaciadas
- ✅ Títulos en bold o uppercase
- ❌ Evitar fuentes serif o sans-serif
- ❌ No usar más de 2 tamaños de fuente diferentes

---

## Componentes

### Box Brutal (`.box-brutal`)
```css
.box-brutal {
  border: 4px solid var(--border-color);
  background-color: var(--box-bg);
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}

.box-brutal:hover {
  border-color: var(--accent-color);
  transform: translate(-4px, -4px);
  box-shadow: 8px 8px 0 var(--border-color);
}

.box-brutal:active {
  transform: translate(0, 0);
  box-shadow: 0 0 0 var(--border-color);
}
```

### Botón Brutal (`.btn-brutal`)
```css
.btn-brutal {
  border: 3px solid var(--border-color);
  background-color: var(--box-bg);
  color: var(--text-primary);
  padding: 12px 24px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease, background-color 0.15s ease, color 0.15s ease;
}

.btn-brutal:hover {
  border-color: var(--accent-color);
  background-color: var(--accent-color);
  color: white;
  transform: translate(-2px, -2px);
  box-shadow: 4px 4px 0 var(--border-color);
}
```

### Links
```css
a {
  color: var(--accent-color);
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: color 0.15s ease;
}
```

### Divisor
```css
.divider {
  height: 4px;
  background-color: var(--border-color);
  margin: 2rem 0;
}
```

---

## Reglas de Diseño

### Bordes
- ✅ Usar bordes sólidos de 3-4px
- ✅ Borders en elementos interactivos deben cambiar a color accent en hover
- ❌ No usar bordes redondeados (border-radius: 0 o muy pequeño)
- ❌ No usar sombras suaves o difusas

### Espaciado
- ✅ Espaciado consistente usando múltiplos de 8px
- ✅ Margins y paddings con valores marcados (no sutiles)
- ❌ Evitar espaciados muy pequeños o "apretados"

### Animaciones
- ✅ Duración rápida: 0.15s para interacciones
- ✅ Usar translate y box-shadow para efectos (no opacity o transform complejos)
- ❌ No usar animaciones que duren más de 0.3s
- ❌ Evitar animaciones que cambien el tamaño sin movimiento

### Scrollbar
```css
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background-color: var(--bg-secondary);
  border-left: 2px solid var(--border-color);
}

::-webkit-scrollbar-thumb {
  background-color: var(--border-color);
  border: 2px solid var(--bg-secondary);
}
```

---

## Accesibilidad

### Reducción de Movimiento
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  .box-brutal:hover,
  .box-brutal:active {
    transform: none;
    box-shadow: none;
  }
}
```

### Reglas de Accesibilidad
- ✅ Siempre incluir soporte para `prefers-reduced-motion`
- ✅ Mantener ratio de contraste mínimo 4.5:1
- ✅ Usar `color-scheme` para indicar tema claro/oscuro
- ✅ Labels y textos deben ser legibles sin efectos hover

---

## Checklist de Implementación

- [ ] Variables CSS definidas en `:root`
- [ ] Tema oscuro con clase `.dark`
- [ ] Tipografía monoespaciada
- [ ] Componente `.box-brutal` implementado
- [ ] Componente `.btn-brutal` implementado
- [ ] Estilos de links con underline
- [ ] Scrollbar personalizada
- [ ] Soporte para prefers-reduced-motion
- [ ] Transiciones rápidas (0.15s)
- [ ] Bordes sólidos 3-4px sin redondeo

---

## Ejemplo de Estructura HTML

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta name="color-scheme" content="light dark">
  </head>
  <body class="theme-transition">
    <div class="box-brutal">
      Contenido
    </div>
    <button class="btn-brutal">
      Botón
    </button>
    <a href="#">Enlace</a>
    <div class="divider"></div>
  </body>
</html>
```