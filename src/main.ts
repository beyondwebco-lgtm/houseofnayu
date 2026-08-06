import './style.css';
import { PRODUCTS_DATA } from './data';
import type { Product, CartItem } from './data';
import { createIcons, icons } from 'lucide';
import confetti from 'canvas-confetti';

// Global State
let currentCategory: string = 'ALL';
let currentMaxPrice: number = 10000;
let selectedSizeFilter: string = 'ALL';
let cart: CartItem[] = [];
let activeProduct: Product | null = null;

// Initialize Lucide icons
function refreshIcons() {
  createIcons({ icons });
}

// Format Currency
function formatRs(amount: number) {
  return '₹' + amount.toLocaleString('en-IN');
}

// Render Products Grid with Sizes & Price Filtering
function renderProducts() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;

  let filtered = PRODUCTS_DATA.filter(p => {
    const matchesCategory = currentCategory === 'ALL' || p.category === currentCategory;
    const matchesPrice = p.price <= currentMaxPrice;
    const matchesSize = selectedSizeFilter === 'ALL' || p.availableSizes.includes(selectedSizeFilter);
    return matchesCategory && matchesPrice && matchesSize;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding: 60px 0; color:var(--text-muted);">
        <i data-lucide="filter-x" style="width:48px; height:48px; opacity:0.4; margin-bottom:12px;"></i>
        <h3>No sarees match your selected price (Under ${formatRs(currentMaxPrice)})</h3>
        <p style="font-size:0.9rem; margin-top:6px;">Try adjusting the price slider or selecting another size filter.</p>
      </div>
    `;
    refreshIcons();
    return;
  }

  grid.innerHTML = filtered.map(product => `
    <div class="product-card" data-id="${product.id}">
      <div class="card-img-wrap">
        <span class="category-badge">${product.category}</span>
        <img src="${product.images[0].url}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="card-body">
        <h3 class="product-title">${product.name}</h3>
        <div class="product-price-wrap">
          <span class="current-price">${formatRs(product.price)}</span>
          <span class="original-price">${formatRs(product.originalPrice)}</span>
        </div>

        <div class="card-actions">
          <button class="add-cart-btn quick-view-trigger" data-id="${product.id}">
            <i data-lucide="eye" style="width:16px; height:16px;"></i> Quick View
          </button>
          <button class="icon-btn direct-add-cart" data-id="${product.id}" title="Add to Bag">
            <i data-lucide="shopping-bag" style="width:18px; height:18px;"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  refreshIcons();

  // Attach Card Click Handlers
  document.querySelectorAll('.quick-view-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = (btn as HTMLElement).dataset.id;
      const prod = PRODUCTS_DATA.find(p => p.id === id);
      if (prod) openProductModal(prod);
    });
  });

  document.querySelectorAll('.direct-add-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = (btn as HTMLElement).dataset.id;
      const prod = PRODUCTS_DATA.find(p => p.id === id);
      if (prod) addToCart(prod);
    });
  });

  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = (card as HTMLElement).dataset.id;
      const prod = PRODUCTS_DATA.find(p => p.id === id);
      if (prod) openProductModal(prod);
    });
  });
}

// Category & Permanent Left Sidebar Filters
function setupCategoryFilters() {
  const checkboxItems = document.querySelectorAll('.filter-checkbox-item, .nav-item');
  checkboxItems.forEach(item => {
    item.addEventListener('click', () => {
      const cat = (item as HTMLElement).dataset.cat || (item as HTMLElement).dataset.category;
      if (!cat) return;

      currentCategory = cat;

      // Update Checkbox Active State
      document.querySelectorAll('.filter-checkbox-item').forEach(p => {
        const isActive = (p as HTMLElement).dataset.cat === cat;
        p.classList.toggle('active', isActive);
        const box = p.querySelector('.custom-checkbox');
        if (box) box.classList.toggle('checked', isActive);
      });
      
      document.querySelectorAll('.nav-item').forEach(n => {
        n.classList.toggle('active', (n as HTMLElement).dataset.category === cat);
      });

      renderProducts();
    });
  });

  // Accordion Expand/Collapse Toggle
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.closest('.filter-accordion');
      if (parent) parent.classList.toggle('open');
    });
  });

  // Filter Button Toggle (Hides section by default, opens on click)
  const filterBtn = document.getElementById('filter-toggle-btn');
  const filterPanel = document.getElementById('sidebar-filters-panel');
  const gridContainer = document.getElementById('store-grid-container');
  const closeFilterBtn = document.getElementById('close-filter-btn');

  function toggleFilterPanel() {
    if (!filterPanel || !gridContainer || !filterBtn) return;
    const isHidden = filterPanel.classList.contains('hidden');
    
    if (isHidden) {
      filterPanel.classList.remove('hidden');
      gridContainer.classList.add('filter-active');
      filterBtn.classList.add('active');
    } else {
      filterPanel.classList.add('hidden');
      gridContainer.classList.remove('filter-active');
      filterBtn.classList.remove('active');
    }
  }

  filterBtn?.addEventListener('click', toggleFilterPanel);
  closeFilterBtn?.addEventListener('click', toggleFilterPanel);

  // Sort dropdown
  document.getElementById('sort-select')?.addEventListener('change', () => {
    renderProducts();
  });

  // Price Slider Listener - Live Filter Products & Update Label
  const rangeSlider = document.getElementById('price-range-slider') as HTMLInputElement;
  const priceValLabel = document.getElementById('price-val-label');

  rangeSlider?.addEventListener('input', () => {
    currentMaxPrice = parseInt(rangeSlider.value);
    if (priceValLabel) priceValLabel.textContent = formatRs(currentMaxPrice);
    renderProducts();
  });

  // Size Checkbox Listener - Filter Products by Size
  document.querySelectorAll('.size-checkbox-item').forEach(item => {
    item.addEventListener('click', () => {
      const sz = (item as HTMLElement).dataset.size || 'ALL';
      selectedSizeFilter = sz;

      document.querySelectorAll('.size-checkbox-item').forEach(el => {
        const isActive = (el as HTMLElement).dataset.size === sz;
        el.classList.toggle('active', isActive);
      });

      renderProducts();
    });
  });
}

// Modal Handlers
function openProductModal(product: Product) {
  activeProduct = product;
  const modal = document.getElementById('product-modal');
  if (!modal) return;

  (document.getElementById('modal-main-img') as HTMLImageElement).src = product.images[0].url;
  (document.getElementById('modal-category') as HTMLElement).textContent = product.category;
  (document.getElementById('modal-title') as HTMLElement).textContent = product.name;
  (document.getElementById('modal-price') as HTMLElement).textContent = formatRs(product.price);
  (document.getElementById('modal-orig-price') as HTMLElement).textContent = formatRs(product.originalPrice);
  (document.getElementById('modal-description') as HTMLElement).textContent = product.description;
  (document.getElementById('modal-fabric') as HTMLElement).textContent = product.fabric;
  (document.getElementById('modal-craft') as HTMLElement).textContent = product.craft;

  // Bind Size Pill selection inside modal
  const sizePills = document.querySelectorAll('.modal-size-btn');
  sizePills.forEach(pill => {
    pill.addEventListener('click', () => {
      sizePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  // Render Image Thumbnails
  const thumbsContainer = document.getElementById('modal-thumbs');
  if (thumbsContainer) {
    thumbsContainer.innerHTML = product.images.map((img, idx) => `
      <img 
        src="${img.url}" 
        alt="${img.type}" 
        class="thumb-img ${idx === 0 ? 'active' : ''}" 
        data-url="${img.url}"
      />
    `).join('');

    thumbsContainer.querySelectorAll('.thumb-img').forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbsContainer.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        (document.getElementById('modal-main-img') as HTMLImageElement).src = (thumb as HTMLElement).dataset.url || '';
      });
    });
  }

  modal.classList.add('active');
}

function closeProductModal() {
  const modal = document.getElementById('product-modal');
  if (modal) modal.classList.remove('active');
}

// Cart Handlers
function addToCart(product: Product) {
  const existing = cart.find(item => item.product.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    const activeSizeBtn = document.querySelector('.modal-size-btn.active') as HTMLElement;
    const selectedSize = activeSizeBtn ? activeSizeBtn.dataset.size || 'S' : 'S';
    cart.push({ product, selectedSize, quantity: 1 });
  }
  updateCartUI();
  showToast(`Added "${product.name}" (${cart[cart.length - 1]?.selectedSize || 'S'}) to your royal bag!`);
}

function updateCartUI() {
  const countBadge = document.getElementById('cart-count');
  const itemsContainer = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal');

  const totalItems = cart.reduce((acc, i) => acc + i.quantity, 0);
  const subtotal = cart.reduce((acc, i) => acc + (i.product.price * i.quantity), 0);

  if (countBadge) countBadge.textContent = totalItems.toString();
  if (subtotalEl) subtotalEl.textContent = formatRs(subtotal);

  if (itemsContainer) {
    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <div style="text-align:center; padding:40px 0; color:var(--text-muted);">
          <i data-lucide="shopping-bag" style="width:48px; height:48px; opacity:0.3; margin-bottom:12px;"></i>
          <p>Your bag is currently empty.</p>
        </div>
      `;
    } else {
      itemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
          <img src="${item.product.images[0].url}" class="cart-item-img" alt="${item.product.name}" />
          <div class="cart-item-details">
            <h4 style="font-size:0.9rem; font-weight:600; margin-bottom:4px;">${item.product.name}</h4>
            <div style="color:var(--gold-light); font-size:0.95rem; font-weight:700;">${formatRs(item.product.price)} x ${item.quantity}</div>
          </div>
          <button class="remove-cart-item" data-id="${item.product.id}" style="background:none; border:none; color:var(--text-muted); cursor:pointer;">
            <i data-lucide="trash-2" style="width:18px; height:18px;"></i>
          </button>
        </div>
      `).join('');

      itemsContainer.querySelectorAll('.remove-cart-item').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = (btn as HTMLElement).dataset.id;
          cart = cart.filter(i => i.product.id !== id);
          updateCartUI();
        });
      });
    }
  }

  refreshIcons();
}

function showToast(msg: string) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  setupCategoryFilters();
  refreshIcons();

  // Modal Listeners
  document.getElementById('close-modal-btn')?.addEventListener('click', closeProductModal);
  document.getElementById('product-modal')?.addEventListener('click', (e) => {
    if (e.target === document.getElementById('product-modal')) closeProductModal();
  });
  document.getElementById('modal-add-cart-btn')?.addEventListener('click', () => {
    if (activeProduct) {
      addToCart(activeProduct);
      closeProductModal();
    }
  });

  // Cart Drawer Listeners
  const cartDrawer = document.getElementById('cart-drawer');
  document.getElementById('cart-toggle-btn')?.addEventListener('click', () => {
    cartDrawer?.classList.add('active');
  });
  document.getElementById('close-cart-btn')?.addEventListener('click', () => {
    cartDrawer?.classList.remove('active');
  });

  // Explore button smooth scroll
  document.getElementById('explore-btn')?.addEventListener('click', () => {
    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Checkout Button Demo
  document.getElementById('checkout-btn')?.addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('Please add items to your bag first!');
      return;
    }
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    alert('Thank you for testing the House of Nayu demo! Razorpay / Cashfree payment popup will connect here once cloud database & payment gateways are enabled.');
  });
});
