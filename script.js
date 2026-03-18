'use strict';

// ==================
// iPhone SVG Generator — realistic phone illustrations per model
// ==================
function getPhoneSVG(product) {
  const colorMap = {
    'serie-xr-11': { body: '#1c1c1e', accent: '#2B3DA8', screen: '#0a84ff', label: '#fff' },
    'serie-12':    { body: '#1c1c1e', accent: '#5e5ce6', screen: '#30d158', label: '#fff' },
    'serie-13':    { body: '#1c1c1e', accent: '#30d158', screen: '#0a84ff', label: '#fff' },
    'serie-14':    { body: '#2c2c2e', accent: '#ffd60a', screen: '#ff375f', label: '#fff' },
    'serie-15':    { body: '#3a3a3c', accent: '#64d2ff', screen: '#bf5af2', label: '#fff' },
    'serie-16-17': { body: '#1c1c1e', accent: '#E8192C', screen: '#ff9f0a', label: '#fff' },
  };
  const c = colorMap[product.category] || colorMap['serie-xr-11'];

  // Determine notch style: Dynamic Island for 14+, notch for older
  const isDynamicIsland = product.category === 'serie-16-17' || product.category === 'serie-15' || (product.category === 'serie-14');
  const isProModel = product.name.includes('Pro');

  const notchSVG = isDynamicIsland
    ? `<rect x="68" y="14" width="44" height="14" rx="7" fill="#000"/>`
    : `<rect x="60" y="10" width="60" height="22" rx="11" fill="#000"/>`;

  const cameraCount = product.name.includes('Pro') ? 3 : (product.name.includes('Mini') || product.name.includes('XR') || product.name === 'iPhone 11') ? 1 : 2;
  
  let camerasSVG = '';
  if (cameraCount === 1) {
    camerasSVG = `
      <circle cx="100" cy="55" r="12" fill="#0a0a0a"/>
      <circle cx="100" cy="55" r="8" fill="#1a1a2e"/>
      <circle cx="100" cy="55" r="5" fill="#2d2d44"/>
      <circle cx="97" cy="52" r="1.5" fill="rgba(255,255,255,0.5)"/>`;
  } else if (cameraCount === 2) {
    camerasSVG = `
      <rect x="78" y="42" width="44" height="44" rx="14" fill="#0a0a0a"/>
      <circle cx="93" cy="57" r="9" fill="#1a1a2e"/>
      <circle cx="93" cy="57" r="6" fill="#2d2d44"/>
      <circle cx="91" cy="55" r="1.5" fill="rgba(255,255,255,0.5)"/>
      <circle cx="107" cy="57" r="9" fill="#1a1a2e"/>
      <circle cx="107" cy="57" r="6" fill="#2d2d44"/>
      <circle cx="105" cy="55" r="1.5" fill="rgba(255,255,255,0.5)"/>
      <circle cx="107" cy="75" r="3" fill="#1a1a2e"/>`;
  } else {
    camerasSVG = `
      <rect x="72" y="38" width="56" height="56" rx="16" fill="#0a0a0a"/>
      <circle cx="88" cy="55" r="9" fill="#1a1a2e"/>
      <circle cx="88" cy="55" r="6" fill="#2d2d44"/>
      <circle cx="86" cy="53" r="1.5" fill="rgba(255,255,255,0.5)"/>
      <circle cx="112" cy="55" r="9" fill="#1a1a2e"/>
      <circle cx="112" cy="55" r="6" fill="#2d2d44"/>
      <circle cx="110" cy="53" r="1.5" fill="rgba(255,255,255,0.5)"/>
      <circle cx="100" cy="76" r="9" fill="#1a1a2e"/>
      <circle cx="100" cy="76" r="6" fill="#2d2d44"/>
      <circle cx="98" cy="74" r="1.5" fill="rgba(255,255,255,0.5)"/>
      <circle cx="118" cy="42" r="3" fill="#1a1a2e"/>`;
  }

  return `
    <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" width="140" height="130">
      <defs>
        <linearGradient id="bg${product.id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${c.accent};stop-opacity:0.15"/>
          <stop offset="100%" style="stop-color:${c.accent};stop-opacity:0.03"/>
        </linearGradient>
        <linearGradient id="phone${product.id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2c2c2e"/>
          <stop offset="100%" style="stop-color:#1c1c1e"/>
        </linearGradient>
        <linearGradient id="screen${product.id}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0d1b2a"/>
          <stop offset="100%" style="stop-color:#1a1a2e"/>
        </linearGradient>
        <radialGradient id="glow${product.id}" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color:${c.accent};stop-opacity:0.3"/>
          <stop offset="100%" style="stop-color:${c.accent};stop-opacity:0"/>
        </radialGradient>
      </defs>

      <!-- Glow background -->
      <ellipse cx="100" cy="80" rx="70" ry="60" fill="url(#glow${product.id})"/>

      <!-- Phone body -->
      <rect x="55" y="5" width="90" height="150" rx="18" fill="url(#phone${product.id})"/>
      <rect x="56" y="6" width="88" height="148" rx="17" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>

      <!-- Screen area -->
      <rect x="60" y="8" width="80" height="144" rx="16" fill="url(#screen${product.id})"/>

      <!-- Notch / Dynamic Island -->
      ${notchSVG}

      <!-- Screen content glow -->
      <rect x="65" y="90" width="70" height="50" rx="8" fill="none"/>
      <rect x="68" y="95" width="30" height="4" rx="2" fill="rgba(255,255,255,0.15)"/>
      <rect x="68" y="103" width="20" height="3" rx="1.5" fill="rgba(255,255,255,0.08)"/>
      <rect x="110" y="95" width="22" height="22" rx="6" fill="${c.accent}" opacity="0.6"/>
      <text x="121" y="110" text-anchor="middle" fill="white" font-size="10">📱</text>

      <!-- Home indicator -->
      <rect x="88" y="148" width="24" height="3" rx="1.5" fill="rgba(255,255,255,0.3)"/>

      <!-- Side button -->
      <rect x="144" y="45" width="3" height="28" rx="1.5" fill="rgba(255,255,255,0.2)"/>
      <!-- Volume buttons -->
      <rect x="53" y="40" width="3" height="18" rx="1.5" fill="rgba(255,255,255,0.2)"/>
      <rect x="53" y="63" width="3" height="18" rx="1.5" fill="rgba(255,255,255,0.2)"/>

      <!-- Camera module -->
      ${camerasSVG}

      <!-- Shine -->
      <rect x="60" y="8" width="20" height="144" rx="16" fill="url(#bg${product.id})"/>
    </svg>`;
}

// ==================
// PRODUCT DATA
// ==================
const PRODUCTS = [
  { id:1, name:'iPhone XR', series:'iPhone XR', category:'serie-xr-11',
    screen:'6.1"', chip:'A12 Bionic', cameras:'1 cámara · 12 MP', battery:'100%', badge:'Exhibición',
    prices:[{storage:'64GB',price:700},{storage:'128GB',price:800}], startPrice:700,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:2, name:'iPhone 11', series:'iPhone 11', category:'serie-xr-11',
    screen:'6.1"', chip:'A13 Bionic', cameras:'2 cámaras · 12 MP', battery:'100%', badge:'Exhibición',
    prices:[{storage:'64GB',price:900},{storage:'128GB',price:1000},{storage:'256GB',price:1200}], startPrice:900,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:3, name:'iPhone 11 Pro', series:'iPhone 11 Pro', category:'serie-xr-11',
    screen:'5.8"', chip:'A13 Bionic', cameras:'3 cámaras · 12 MP', battery:'100%', badge:'Exhibición',
    prices:[{storage:'128GB',price:1200},{storage:'256GB',price:1400},{storage:'512GB',price:1600}], startPrice:1200,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:4, name:'iPhone 11 Pro Max', series:'iPhone 11 Pro Max', category:'serie-xr-11',
    screen:'6.5"', chip:'A13 Bionic', cameras:'3 cámaras Pro', battery:'100%', badge:'Exhibición',
    prices:[{storage:'128GB',price:1400},{storage:'256GB',price:1500},{storage:'512GB',price:1700}], startPrice:1400,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:5, name:'iPhone 12 Mini', series:'iPhone 12 Mini', category:'serie-12',
    screen:'5.4"', chip:'A14 Bionic', cameras:'2 cámaras · 12 MP', battery:'100%', badge:'Exhibición',
    prices:[{storage:'64GB',price:1000},{storage:'128GB',price:1200},{storage:'256GB',price:1400}], startPrice:1000,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:6, name:'iPhone 12', series:'iPhone 12', category:'serie-12',
    screen:'6.1"', chip:'A14 Bionic', cameras:'2 cámaras · 12 MP', battery:'100%', badge:'Exhibición',
    prices:[{storage:'64GB',price:1200},{storage:'128GB',price:1400},{storage:'256GB',price:1500}], startPrice:1200,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:7, name:'iPhone 12 Pro', series:'iPhone 12 Pro', category:'serie-12',
    screen:'6.1"', chip:'A14 Bionic', cameras:'3 cámaras Pro', battery:'100%', badge:'Exhibición',
    prices:[{storage:'128GB',price:1600},{storage:'256GB',price:1800}], startPrice:1600,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:8, name:'iPhone 12 Pro Max', series:'iPhone 12 Pro Max', category:'serie-12',
    screen:'6.7"', chip:'A14 Bionic', cameras:'3 cámaras Pro', battery:'100%', badge:'Exhibición',
    prices:[{storage:'128GB',price:1900},{storage:'256GB',price:2100}], startPrice:1900,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:9, name:'iPhone 13 Mini', series:'iPhone 13 Mini', category:'serie-13',
    screen:'5.4"', chip:'A15 Bionic', cameras:'2 cámaras · 12 MP', battery:'100%', badge:'Exhibición',
    prices:[{storage:'128GB',price:1400},{storage:'256GB',price:1600},{storage:'512GB',price:1800}], startPrice:1400,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:10, name:'iPhone 13', series:'iPhone 13', category:'serie-13',
    screen:'6.1"', chip:'A15 Bionic', cameras:'2 cámaras · 12 MP', battery:'100%', badge:'Exhibición · Sellado', isNew:true,
    prices:[{storage:'128GB',price:1600},{storage:'256GB',price:1750},{storage:'512GB',price:1950}],
    sealedPrices:[{storage:'128GB',price:2000}], startPrice:1600,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:11, name:'iPhone 13 Pro', series:'iPhone 13 Pro', category:'serie-13',
    screen:'6.1"', chip:'A15 Bionic', cameras:'3 cámaras Pro', battery:'100%', badge:'Exhibición',
    prices:[{storage:'128GB',price:2000},{storage:'256GB',price:2150},{storage:'512GB',price:2300}], startPrice:2000,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:12, name:'iPhone 13 Pro Max', series:'iPhone 13 Pro Max', category:'serie-13',
    screen:'6.7"', chip:'A15 Bionic', cameras:'3 cámaras Pro', battery:'100%', badge:'Exhibición',
    prices:[{storage:'128GB',price:2500},{storage:'256GB',price:2650},{storage:'512GB',price:2900}], startPrice:2500,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:13, name:'iPhone 14', series:'iPhone 14', category:'serie-14',
    screen:'6.1"', chip:'A15 Bionic', cameras:'2 cámaras · 12 MP', battery:'100%', badge:'Exhibición',
    prices:[{storage:'128GB',price:1900},{storage:'256GB',price:2000}], startPrice:1900,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:14, name:'iPhone 14 Pro', series:'iPhone 14 Pro', category:'serie-14',
    screen:'6.1"', chip:'A16 Bionic', cameras:'3 cámaras · 48 MP', battery:'100%', badge:'Exhibición',
    prices:[{storage:'128GB',price:2500},{storage:'256GB',price:2700},{storage:'512GB',price:2950}], startPrice:2500,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:15, name:'iPhone 14 Pro Max', series:'iPhone 14 Pro Max', category:'serie-14',
    screen:'6.7"', chip:'A16 Bionic', cameras:'3 cámaras · 48 MP', battery:'100%', badge:'Exhibición',
    prices:[{storage:'128GB',price:2800},{storage:'256GB',price:3000},{storage:'512GB',price:3200}], startPrice:2800,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:16, name:'iPhone 15', series:'iPhone 15', category:'serie-15',
    screen:'6.1"', chip:'A16 Bionic', cameras:'2 cámaras · 48 MP', battery:'100%', badge:'Exhibición',
    prices:[{storage:'128GB',price:2200},{storage:'256GB',price:2400}], startPrice:2200,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:17, name:'iPhone 15 Plus', series:'iPhone 15 Plus', category:'serie-15',
    screen:'6.7"', chip:'A16 Bionic', cameras:'2 cámaras · 48 MP', battery:'100%', badge:'Exhibición',
    prices:[{storage:'128GB',price:2600},{storage:'256GB',price:2800}], startPrice:2600,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:18, name:'iPhone 15 Pro', series:'iPhone 15 Pro', category:'serie-15',
    screen:'6.1"', chip:'A17 Pro', cameras:'3 cámaras Pro · 48 MP', battery:'100%', badge:'Exhibición', isNew:true,
    prices:[{storage:'128GB',price:2800},{storage:'256GB',price:3000}], startPrice:2800,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:19, name:'iPhone 15 Pro Max', series:'iPhone 15 Pro Max', category:'serie-15',
    screen:'6.7"', chip:'A17 Pro', cameras:'3 cámaras Pro · 48 MP', battery:'100%', badge:'Exhibición', isNew:true,
    prices:[{storage:'256GB',price:3300},{storage:'512GB',price:3500}], startPrice:3300,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:20, name:'iPhone 16e', series:'iPhone 16e', category:'serie-16-17',
    screen:'6.1"', chip:'A18 Pro', cameras:'Fusion 48 MP', battery:'100%', badge:'Exhibición', isNew:true,
    prices:[{storage:'128GB',price:1900},{storage:'256GB',price:2050}], startPrice:1900,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:21, name:'iPhone 16', series:'iPhone 16', category:'serie-16-17',
    screen:'6.1"', chip:'A18 Pro', cameras:'2 cámaras · Fusion 48 MP', battery:'100%', badge:'Exhibición', isNew:true,
    prices:[{storage:'128GB',price:2500},{storage:'256GB',price:2700},{storage:'512GB',price:2900}], startPrice:2500,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:22, name:'iPhone 16 Plus', series:'iPhone 16 Plus', category:'serie-16-17',
    screen:'6.7"', chip:'A18 Pro', cameras:'2 cámaras · Fusion 48 MP', battery:'100%', badge:'Exhibición', isNew:true,
    prices:[{storage:'128GB',price:3000},{storage:'256GB',price:3200}], startPrice:3000,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:23, name:'iPhone 16 Pro', series:'iPhone 16 Pro', category:'serie-16-17',
    screen:'6.3"', chip:'A18 Pro', cameras:'3 cámaras Pro · 48 MP', battery:'100%', badge:'Exhibición', isNew:true,
    prices:[{storage:'128GB',price:3400},{storage:'256GB',price:3600}], startPrice:3400,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:24, name:'iPhone 16 Pro Max', series:'iPhone 16 Pro Max', category:'serie-16-17',
    screen:'6.9"', chip:'A18 Pro', cameras:'3 cámaras Pro · 48 MP', battery:'100%', badge:'Exhibición', isNew:true,
    prices:[{storage:'256GB',price:3800},{storage:'512GB',price:4000}], startPrice:3800,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:25, name:'iPhone 17', series:'iPhone 17', category:'serie-16-17',
    screen:'6.3"', chip:'A19', cameras:'Pro Fusion 48 MP', battery:'100%', badge:'Exhibición · Sellado', isNew:true,
    prices:[{storage:'256GB',price:3100}], sealedPrices:[{storage:'256GB',price:3500}], startPrice:3100,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },

  { id:26, name:'iPhone 17 Pro Max', series:'iPhone 17 Pro Max', category:'serie-16-17',
    screen:'6.9"', chip:'A19 Pro', cameras:'Pro Fusion 48 MP · 5x', battery:'100%', badge:'Exhibición · Sellado', isNew:true,
    prices:[{storage:'256GB',price:4500}], sealedPrices:[{storage:'256GB',price:5600}], startPrice:4500,
    accessories:'Cubo + Cable · Case Clear · Protector de Pantalla' },
];

// ==================
// STATE
// ==================
let cart = JSON.parse(localStorage.getItem('jmstore_cart') || '[]');
let activeTestimonial = 0;

// ==================
// INIT
// ==================
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  renderProducts('all');
  initFilters();
  initCart();
  initModals();
  initPlans();
  initTestimonials();
  initReveal();
  initBackTop();
  initStats();
  updateCartBadge();
});

// ==================
// HEADER
// ==================
function initHeader() {
  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileNavClose = document.getElementById('mobileNavClose');

  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  function openMenu() {
    mobileNav.classList.add('open');
    hamburger.classList.add('open');
    mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    mobileNav.classList.remove('open');
    hamburger.classList.remove('open');
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', openMenu);
  mobileNavClose.addEventListener('click', closeMenu);
  mobileOverlay.addEventListener('click', closeMenu);
  document.querySelectorAll('.mobile-nav-link').forEach(l => l.addEventListener('click', closeMenu));
}

// ==================
// PRODUCTS
// ==================
function renderProducts(filter) {
  const grid = document.getElementById('productsGrid');
  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  grid.innerHTML = filtered.map((p, i) => `
    <div class="product-card" data-id="${p.id}" style="animation-delay:${i * 0.055}s">
      <div class="product-img-box">
        <div class="phone-svg-wrap">${getPhoneSVG(p)}</div>
        <div class="product-badge-tag">${p.badge.includes('Sellado') && p.badge.includes('Exhibición') ? 'Exhibición' : p.badge}</div>
        ${p.isNew ? '<div class="product-badge-new">Nuevo</div>' : ''}
      </div>
      <div class="product-info">
        <div class="product-series">${p.series}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-specs">${p.screen} · ${p.chip} · ${p.cameras}</div>
        <div class="product-price-row">
          <div>
            <div class="product-price-from">Desde</div>
            <div class="product-price">S/ ${p.startPrice.toLocaleString()}</div>
          </div>
          <button class="product-add-btn" data-id="${p.id}">+ Carrito</button>
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', e => {
      if (!e.target.closest('.product-add-btn')) openProductModal(parseInt(card.dataset.id));
    });
  });
  grid.querySelectorAll('.product-add-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      addToCart(parseInt(btn.dataset.id), btn);
    });
  });
}

function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProducts(btn.dataset.filter);
    });
  });
}

// ==================
// PRODUCT MODAL
// ==================
function openProductModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const overlay = document.getElementById('modalOverlay');
  const body = document.getElementById('modalBody');

  const pricesHTML = p.prices.map(pr =>
    `<div class="modal-price-row"><span>${pr.storage} · Exhibición</span><span>S/ ${pr.price.toLocaleString()}</span></div>`
  ).join('');
  const sealedHTML = p.sealedPrices ? p.sealedPrices.map(pr =>
    `<div class="modal-price-row"><span>${pr.storage} · Sellado</span><span>S/ ${pr.price.toLocaleString()}</span></div>`
  ).join('') : '';

  body.innerHTML = `
    <div class="modal-product-hero">
      <div style="display:flex;justify-content:center;margin-bottom:8px">${getPhoneSVG(p)}</div>
      <div class="modal-product-title">${p.name}</div>
      <div class="modal-product-series">${p.chip} · Batería ${p.battery}</div>
    </div>
    <div class="modal-specs-grid">
      <div class="modal-spec"><div class="modal-spec-icon">📺</div><div class="modal-spec-label">Pantalla</div><div class="modal-spec-value">${p.screen}</div></div>
      <div class="modal-spec"><div class="modal-spec-icon">⚡</div><div class="modal-spec-label">Chip</div><div class="modal-spec-value">${p.chip}</div></div>
      <div class="modal-spec"><div class="modal-spec-icon">📷</div><div class="modal-spec-label">Cámaras</div><div class="modal-spec-value">${p.cameras.split('·')[0].trim()}</div></div>
      <div class="modal-spec"><div class="modal-spec-icon">🔋</div><div class="modal-spec-label">Batería</div><div class="modal-spec-value">${p.battery}</div></div>
    </div>
    <div class="modal-prices">
      <h4>Opciones disponibles</h4>
      <div class="modal-price-options">${pricesHTML}${sealedHTML}</div>
    </div>
    <div class="modal-accessories"><strong>🎁 Accesorios incluidos:</strong>${p.accessories}</div>
    <div class="modal-actions" style="margin-top:16px">
      <button class="btn btn-primary" onclick="addToCart(${p.id},this);closeProductModal()">Agregar al carrito</button>
      <a href="https://wa.me/51999999999?text=Hola%20JM%20Store%2C%20quiero%20información%20sobre%20el%20${encodeURIComponent(p.name)}" class="btn btn-outline" target="_blank" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.2)">Consultar por WA</a>
    </div>`;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function initModals() {
  document.getElementById('modalClose').addEventListener('click', closeProductModal);
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('modalOverlay')) closeProductModal();
  });
}

// ==================
// CART
// ==================
function initCart() {
  document.getElementById('cartBtn').addEventListener('click', openCart);
  document.getElementById('drawerOverlay').addEventListener('click', closeCart);
  document.getElementById('drawerClose').addEventListener('click', closeCart);
  document.getElementById('checkoutBtn').addEventListener('click', () => {
    const items = cart.map(i => `• ${i.name} (desde S/ ${i.price.toLocaleString()})`).join('%0A');
    window.open(`https://wa.me/51999999999?text=Hola%20JM%20Store%2C%20quiero%20consultar%20sobre:%0A${items}`, '_blank');
  });
}

function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('drawerOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCartItems();
}

function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('drawerOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function addToCart(id, btn) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  if (!cart.find(i => i.id === id)) {
    cart.push({ id: p.id, name: p.name, price: p.startPrice });
    saveCart(); updateCartBadge();
    if (btn) {
      const orig = btn.textContent;
      btn.textContent = '✓ Agregado'; btn.classList.add('added');
      setTimeout(() => { btn.textContent = orig; btn.classList.remove('added'); }, 2000);
    }
    showToast(`${p.name} agregado al carrito`);
  } else { showToast(`${p.name} ya está en tu carrito`); }
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart(); updateCartBadge(); renderCartItems();
}

function saveCart() { localStorage.setItem('jmstore_cart', JSON.stringify(cart)); }
function updateCartBadge() { document.getElementById('cartBadge').textContent = cart.length; }

function renderCartItems() {
  const list = document.getElementById('cartItemsList');
  const footer = document.getElementById('cartFooter');
  const empty = document.getElementById('cartEmpty');

  if (cart.length === 0) {
    list.innerHTML = '';
    list.appendChild(empty);
    empty.style.display = 'flex';
    footer.style.display = 'none';
    return;
  }
  empty.style.display = 'none';
  footer.style.display = 'block';
  list.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">📱</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">Desde S/ ${item.price.toLocaleString()}</div>
      </div>
      <button class="cart-item-remove" data-id="${item.id}">✕</button>
    </div>`).join('');
  list.querySelectorAll('.cart-item-remove').forEach(btn =>
    btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id))));
  document.getElementById('cartTotalAmt').textContent =
    `S/ ${cart.reduce((s, i) => s + i.price, 0).toLocaleString()}`;
}

// ==================
// PLANS
// ==================
function initPlans() {
  document.querySelectorAll('.btn-plan').forEach(btn => {
    btn.addEventListener('click', () => openPlanModal(btn.dataset.planName, btn.dataset.planPrice));
  });
  document.getElementById('planModalClose').addEventListener('click', closePlanModal);
  document.getElementById('planModalOverlay').addEventListener('click', e => {
    if (e.target === document.getElementById('planModalOverlay')) closePlanModal();
  });
  document.getElementById('planForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('pName').value.trim();
    const dni = document.getElementById('pDni').value.trim();
    const phone = document.getElementById('pPhone').value.trim();
    if (!name || !dni || !phone) { alert('Completa los campos obligatorios (*)'); return; }
    const model = document.getElementById('pModel').value;
    const tipo = document.querySelector('input[name="tipo"]:checked')?.value || '';
    const plan = document.getElementById('planModalTitle').textContent;
    const msg = `Hola JM Store! Me interesa el *${plan}*.\n\n👤 ${name}\n🪪 DNI: ${dni}\n📱 Tel: ${phone}\n📦 Modelo: ${model || 'Por definir'}\n🏷️ Tipo: ${tipo}`;
    window.open(`https://wa.me/51999999999?text=${encodeURIComponent(msg)}`, '_blank');
    document.getElementById('planSuccess').classList.add('show');
    document.getElementById('planForm').style.display = 'none';
    setTimeout(closePlanModal, 3000);
  });
}

function openPlanModal(name, price) {
  document.getElementById('planModalTitle').textContent = name;
  document.getElementById('planModalSub').textContent = price;
  document.getElementById('planSuccess').classList.remove('show');
  document.getElementById('planForm').style.display = 'block';
  document.getElementById('planForm').reset();
  document.getElementById('planModalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closePlanModal() {
  document.getElementById('planModalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ==================
// TESTIMONIALS
// ==================
function initTestimonials() {
  const track = document.getElementById('testimonialsTrack');
  const dotsEl = document.getElementById('tDots');
  if (!track) return;
  const cards = [...track.querySelectorAll('.testimonial-card')];
  let perView = getPerView();

  function getPerView() {
    return window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1;
  }

  function buildDots() {
    const count = Math.ceil(cards.length / perView);
    dotsEl.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const d = document.createElement('div');
      d.className = `t-dot${i === 0 ? ' active' : ''}`;
      d.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(d);
    }
  }

  function goTo(idx) {
    activeTestimonial = idx;
    const w = cards[0].offsetWidth + 16;
    track.style.transform = `translateX(-${idx * perView * w}px)`;
    document.querySelectorAll('.t-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
  }

  buildDots();
  window.addEventListener('resize', () => { perView = getPerView(); buildDots(); goTo(0); });
  setInterval(() => goTo((activeTestimonial + 1) % Math.ceil(cards.length / perView)), 5000);
}

// ==================
// REVEAL
// ==================
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('.reveal,.reveal-delay-1,.reveal-delay-2,.reveal-delay-3,.reveal-right')
    .forEach(el => observer.observe(el));
}

// ==================
// STATS COUNTER
// ==================
function initStats() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.stat-num').forEach(el => {
          animateCounter(el, 0, parseInt(el.dataset.target), 1600);
        });
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.4 });
  const s = document.querySelector('.stats-section');
  if (s) observer.observe(s);
}

function animateCounter(el, from, to, dur) {
  const start = performance.now();
  const update = t => {
    const p = Math.min((t - start) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(from + (to - from) * ease).toLocaleString();
    if (p < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

// ==================
// BACK TO TOP
// ==================
function initBackTop() {
  const btn = document.getElementById('backTop');
  window.addEventListener('scroll', () => btn.classList.toggle('visible', window.scrollY > 400), { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ==================
// TOAST
// ==================
function showToast(msg) {
  let t = document.getElementById('jm-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'jm-toast';
    t.style.cssText = `position:fixed;bottom:80px;left:50%;transform:translateX(-50%);
      background:#1a1a1a;border:1px solid rgba(43,61,168,0.4);color:white;
      padding:11px 22px;border-radius:50px;font-size:0.83rem;font-weight:500;
      z-index:500;box-shadow:0 8px 24px rgba(0,0,0,0.5);transition:all 0.3s ease;
      opacity:0;pointer-events:none;white-space:nowrap;font-family:'Manrope',sans-serif;`;
    document.body.appendChild(t);
  }
  t.textContent = `✓ ${msg}`;
  t.style.opacity = '1';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.opacity = '0'; }, 2500);
}

// Keyboard ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeProductModal(); closePlanModal(); closeCart(); }
});
