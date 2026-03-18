# 📱 JM Store – Sitio Web Oficial

Sitio web moderno y optimizado para conversión de **JM Store**, tienda de iPhones originales en Perú.

## 🚀 Cómo subir a GitHub Pages

### Paso 1 – Crear cuenta en GitHub
Ve a [github.com](https://github.com) y crea una cuenta gratuita si no tienes una.

### Paso 2 – Crear un nuevo repositorio
1. Haz clic en el botón verde **"New"** o **"+"** → **New repository**
2. Nombre del repositorio: `jmstore` (o el que prefieras)
3. Selecciona **Public**
4. **NO** marques ninguna casilla adicional
5. Haz clic en **"Create repository"**

### Paso 3 – Subir los archivos

**Opción A – Desde el navegador (más fácil):**
1. En tu repositorio vacío, haz clic en **"uploading an existing file"**
2. Arrastra TODA la carpeta del proyecto (o selecciona todos los archivos)
3. Escribe un mensaje como `"Primer upload JM Store"`
4. Haz clic en **"Commit changes"**

**Opción B – Con Git (más rápido si tienes Git instalado):**
```bash
cd jmstore
git init
git add .
git commit -m "JM Store website v1.0"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/jmstore.git
git push -u origin main
```

### Paso 4 – Activar GitHub Pages
1. Ve a tu repositorio → **Settings** (engranaje)
2. En el menú izquierdo, busca **"Pages"**
3. En **"Source"**, selecciona **"Deploy from a branch"**
4. En **"Branch"**, selecciona **"main"** y **"/ (root)"**
5. Haz clic en **"Save"**
6. ¡Listo! En 2-5 minutos tu web estará en:
   `https://TU_USUARIO.github.io/jmstore/`

---

## 📁 Estructura del proyecto

```
jmstore/
├── index.html          ← Página principal
├── styles.css          ← Todos los estilos
├── script.js           ← Toda la funcionalidad JS
├── assets/
│   └── images/
│       └── logo.png    ← Logo de JM Store
└── README.md           ← Este archivo
```

---

## ✏️ Cómo personalizar

### Cambiar número de WhatsApp
Busca en `index.html` y `script.js` el número `51999999999` y reemplázalo con tu número real (con código de país, sin el +).

Ejemplo: Si tu número es `+51 987 654 321`, escribe `51987654321`

### Actualizar precios
Los precios están en `script.js` en el array `PRODUCTS`. Cada producto tiene:
```javascript
{
  name: 'iPhone 16 Pro',
  prices: [
    { storage: '128GB', price: 3400 },  ← Precio en soles
    { storage: '256GB', price: 3600 }
  ],
  startPrice: 3400  ← Precio que aparece en la tarjeta
}
```

### Cambiar redes sociales
Busca en `index.html`:
- `@Jm_store.18` → tu Instagram
- `Jmstoreoficial_peru` → tu Facebook
- Links de `instagram.com/`, `facebook.com/`, `tiktok.com/`

---

## 🌟 Características

- ✅ 100% compatible con GitHub Pages
- ✅ HTML + CSS + JS puro (sin frameworks)
- ✅ 26 productos del catálogo real
- ✅ Carrito funcional con localStorage
- ✅ Filtros por serie (XR, 12, 13, 14, 15, 16-17)
- ✅ Modal detallado por producto
- ✅ Formulario de planes con WhatsApp
- ✅ Formulario de contacto
- ✅ Botón flotante de WhatsApp
- ✅ Animaciones suaves al scroll
- ✅ Totalmente responsive (móvil, tablet, PC)
- ✅ SEO básico optimizado
- ✅ Diseño inspirado en Apple Store

---

## 📞 Soporte

Si necesitas ayuda para personalizar la web, escribe a: jm_store.18 en Instagram
