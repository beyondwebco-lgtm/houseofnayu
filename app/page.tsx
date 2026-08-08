'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Eye, SlidersHorizontal, Sparkles, X, ChevronUp } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRODUCTS_DATA, Product } from '@/src/data';
import { supabase } from '@/src/supabase';

export default function StorefrontPage() {
  const [currentCategory, setCurrentCategory] = useState<string>('ALL');
  const [currentMaxPrice, setCurrentMaxPrice] = useState<number>(10000);
  const [selectedSizeFilter, setSelectedSizeFilter] = useState<string>('ALL');
  const [filterActive, setFilterActive] = useState<boolean>(false);
  const [cart, setCart] = useState<{ product: Product; selectedSize: string; quantity: number }[]>([]);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [selectedModalImage, setSelectedModalImage] = useState<string>('');
  const [selectedModalSize, setSelectedModalSize] = useState<string>('S');
  const [toastMessage, setToastMessage] = useState<string>('');
  const [dbProducts, setDbProducts] = useState<Product[]>(PRODUCTS_DATA);

  const [categoriesList, setCategoriesList] = useState<string[]>(['ALL', 'Cotton Sarees', 'Silk Sarees', 'Chiffon Sarees', 'Kota Sarees', 'Sico Sarees']);

  useEffect(() => {
    async function fetchStoreData() {
      // Fetch dynamic categories
      const { data: catData } = await supabase.from('categories').select('name').order('name');
      if (catData && catData.length > 0) {
        setCategoriesList(['ALL', ...catData.map((c: any) => c.name)]);
      }

      // Fetch dynamic products from Supabase
      const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false });
      if (!error && data && data.length > 0) {
        const mapped: Product[] = data.map((item: any) => {
          const gallery = item.gallery_urls && item.gallery_urls.length > 0
            ? item.gallery_urls.map((url: string, idx: number) => ({ id: String(idx + 1), url, type: idx === 0 ? 'full' : 'detail' }))
            : [{ id: '1', url: item.image_url || '/images/cotton_1/model_full.jpg', type: 'full' }];

          return {
            id: item.id,
            name: item.title,
            category: item.category_name || 'Cotton Sarees',
            price: item.price,
            originalPrice: item.original_price || item.price * 1.3,
            description: item.description || '',
            fabric: item.fabric || 'Handloom',
            craft: item.craft || 'Handcrafted',
            blouseIncluded: item.blouse_included ?? true,
            availableSizes: item.available_sizes || ['XS', 'S', 'M', 'L', 'XL'],
            images: gallery
          };
        });

        // Combine Supabase live uploaded sarees with sample dataset
        setDbProducts(mapped);
      }
    }
    fetchStoreData();
  }, []);

  const filteredProducts = dbProducts.filter(p => {
    const matchesCat = currentCategory === 'ALL' || p.category === currentCategory;
    const matchesPrice = p.price <= currentMaxPrice;
    const matchesSize = selectedSizeFilter === 'ALL' || p.availableSizes.includes(selectedSizeFilter);
    return matchesCat && matchesPrice && matchesSize;
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleAddToCart = (product: Product, size?: string) => {
    const sz = size || selectedModalSize || 'S';
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id && item.selectedSize === sz);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id && item.selectedSize === sz
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, selectedSize: sz, quantity: 1 }];
    });
    showToast(`Added "${product.name}" (${sz}) to your royal bag!`);
  };

  const openQuickView = (product: Product) => {
    setActiveModalProduct(product);
    setSelectedModalImage(product.images[0]?.url || '');
    setSelectedModalSize('S');
  };

  const handleCheckout = () => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    showToast('✨ Thank you for choosing House of Nayu! Processing your luxury order.');
    setCart([]);
    setCartOpen(false);
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div className="next-root">
      {/* Top Navbar */}
      <nav className="navbar">
        <div className="brand-left">
          <Image src="/images/logo_icon_sharp.png" alt="House of Nayu Emblem" width={60} height={60} className="logo-icon-left" />
        </div>
        <div className="brand-center">
          <Image src="/images/brand_title_sharp.png" alt="House of Nayu Crest" width={220} height={50} className="brand-center-img" />
        </div>
        <div className="nav-actions">
          <Link href="/admin" className="admin-nav-link" style={{ color: 'var(--gold-light)', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px', border: '1px solid var(--border-gold)', padding: '6px 14px', borderRadius: '20px' }}>
            ADMIN
          </Link>
          <button className="icon-btn" onClick={() => setCartOpen(true)} title="View Cart">
            <ShoppingBag size={20} />
            <span className="cart-badge">{cart.reduce((a, b) => a + b.quantity, 0)}</span>
          </button>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="hero-banner-minimal">
        <div className="hero-content-minimal">
          <span className="gold-badge-tag"><Sparkles size={14} /> THE HERITAGE EDIT</span>
          <h1 className="hero-headline">Handcrafted Elegance</h1>
          <p className="hero-subtext-gold">Explore custom sarees woven by India’s finest master artisans.</p>
        </div>
      </header>

      {/* Main Catalog */}
      <main className="store-layout">
        <div className="filter-top-bar">
          <button className={`filter-toggle-btn-transparent-left ${filterActive ? 'active' : ''}`} onClick={() => setFilterActive(!filterActive)}>
            <SlidersHorizontal size={16} />
            <span>FILTER BY CATEGORY</span>
          </button>
        </div>

        <div className={`store-grid-container ${filterActive ? 'filter-active' : ''}`}>
          {/* Left Expandable Sidebar */}
          <aside className={`sidebar-filters-panel ${filterActive ? '' : 'hidden'}`}>
            <div className="sidebar-header">
              <h2>FILTERS</h2>
              <button className="icon-btn-sm" onClick={() => setFilterActive(false)}><X size={16} /></button>
            </div>

            {/* Price Accordion */}
            <div className="filter-accordion open">
              <div className="accordion-header">
                <span>PRICE</span>
                <ChevronUp size={16} />
              </div>
              <div className="accordion-body">
                <div className="price-slider-wrap">
                  <div className="price-val-row">
                    <span>Under: <strong style={{ color: 'var(--gold-light)' }}>₹{currentMaxPrice.toLocaleString('en-IN')}</strong></span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Max: ₹10,000</span>
                  </div>
                  <div className="range-slider-container">
                    <input type="range" min="3000" max="10000" step="500" value={currentMaxPrice} onChange={e => setCurrentMaxPrice(Number(e.target.value))} className="range-input-active" />
                  </div>
                </div>
              </div>
            </div>

            {/* Size Accordion */}
            <div className="filter-accordion open">
              <div className="accordion-header">
                <span>SIZE</span>
                <ChevronUp size={16} />
              </div>
              <div className="accordion-body">
                <ul className="category-checkbox-list">
                  {['ALL', 'XS', 'S', 'M', 'L', 'XL'].map(sz => (
                    <li key={sz} className={`filter-checkbox-item ${selectedSizeFilter === sz ? 'active' : ''}`} onClick={() => setSelectedSizeFilter(sz)}>
                      <span className={`custom-checkbox ${selectedSizeFilter === sz ? 'checked' : ''}`}></span>
                      <span className="checkbox-label">{sz === 'ALL' ? 'All Sizes' : sz}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Category Accordion */}
            <div className="filter-accordion open">
              <div className="accordion-header">
                <span>CATEGORY & FABRIC</span>
                <ChevronUp size={16} />
              </div>
              <div className="accordion-body">
                <ul className="category-checkbox-list">
                  {categoriesList.map(cat => (
                    <li key={cat} className={`filter-checkbox-item ${currentCategory === cat ? 'active' : ''}`} onClick={() => setCurrentCategory(cat)}>
                      <span className={`custom-checkbox ${currentCategory === cat ? 'checked' : ''}`}></span>
                      <span className="checkbox-label">{cat === 'ALL' ? 'All Collections' : cat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product Gallery Grid */}
          <div className="products-gallery-col">
            <div className="product-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className="card-img-wrap">
                    <span className="category-badge">{product.category}</span>
                    <img src={product.images[0]?.url} alt={product.name} loading="lazy" />
                  </div>
                  <div className="card-body">
                    <h3 className="product-title">{product.name}</h3>
                    <div className="product-price-wrap">
                      <span className="current-price">₹{product.price.toLocaleString('en-IN')}</span>
                      <span className="original-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="card-actions">
                      <button className="add-cart-btn" onClick={() => openQuickView(product)}>
                        <Eye size={16} /> Quick View
                      </button>
                      <button className="icon-btn" onClick={() => handleAddToCart(product, 'S')} title="Add to Bag">
                        <ShoppingBag size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Quick View Modal */}
      {activeModalProduct && (
        <div className="modal-backdrop active" onClick={() => setActiveModalProduct(null)}>
          <div className="modal-container" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveModalProduct(null)}><X size={18} /></button>
            <div className="modal-grid">
              <div className="modal-gallery">
                <div className="modal-main-img-wrap">
                  <img src={selectedModalImage || activeModalProduct.images[0]?.url} alt={activeModalProduct.name} />
                </div>
                <div className="modal-thumbs">
                  {activeModalProduct.images.map((img, idx) => (
                    <img key={idx} src={img.url} alt={img.type} className={`thumb-img ${selectedModalImage === img.url ? 'active' : ''}`} onClick={() => setSelectedModalImage(img.url)} />
                  ))}
                </div>
              </div>
              <div className="modal-details">
                <span className="category-badge">{activeModalProduct.category}</span>
                <h2 style={{ fontSize: '1.5rem', margin: '8px 0', color: 'var(--gold-light)' }}>{activeModalProduct.name}</h2>
                <div className="product-price-wrap" style={{ margin: '12px 0' }}>
                  <span className="current-price" style={{ fontSize: '1.4rem' }}>₹{activeModalProduct.price.toLocaleString('en-IN')}</span>
                  <span className="original-price">₹{activeModalProduct.originalPrice.toLocaleString('en-IN')}</span>
                </div>
                <p style={{ color: 'var(--text-muted)', margin: '16px 0', fontSize: '0.95rem' }}>{activeModalProduct.description}</p>
                <div style={{ marginBottom: '18px' }}>
                  <strong style={{ color: 'var(--gold-light)', fontSize: '0.85rem', display: 'block', marginBottom: '8px' }}>SELECT SIZE:</strong>
                  <div className="modal-size-pills">
                    {['S', 'M', 'L', 'XL', 'Custom Tailored'].map(sz => (
                      <button key={sz} className={`modal-size-btn ${selectedModalSize === sz ? 'active' : ''}`} onClick={() => setSelectedModalSize(sz)}>
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
                <button className="btn-gold" style={{ width: '100%', justifyContent: 'center' }} onClick={() => { handleAddToCart(activeModalProduct, selectedModalSize); setActiveModalProduct(null); }}>
                  <ShoppingBag size={18} /> Add To Royal Bag
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      <div className={`cart-drawer-overlay ${cartOpen ? 'active' : ''}`} onClick={() => setCartOpen(false)}>
        <div className="cart-drawer" onClick={e => e.stopPropagation()}>
          <div className="cart-header">
            <h3><ShoppingBag size={20} /> Your Royal Bag</h3>
            <button className="icon-btn" onClick={() => setCartOpen(false)}><X size={18} /></button>
          </div>
          <div className="cart-body">
            {cart.length === 0 ? (
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', margin: '40px 0' }}>Your bag is empty.</p>
            ) : (
              cart.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '12px', padding: '12px 0', borderBottom: '1px solid var(--border-subtle)' }}>
                  <img src={item.product.images[0]?.url} alt={item.product.name} style={{ width: '50px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>{item.product.name}</h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--gold-light)' }}>Size: {item.selectedSize} | Qty: {item.quantity}</span>
                    <p style={{ fontWeight: 600 }}>₹{(item.product.price * item.quantity).toLocaleString('en-IN')}</p>
                  </div>
                </div>
              ))
            )}
          </div>
          {cart.length > 0 && (
            <div className="cart-footer" style={{ padding: '20px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontWeight: 600 }}>
                <span>Subtotal:</span>
                <span style={{ color: 'var(--gold-light)' }}>₹{cartTotal.toLocaleString('en-IN')}</span>
              </div>
              <button className="btn-gold" style={{ width: '100%', justifyContent: 'center' }} onClick={handleCheckout}>
                Proceed To Checkout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Toast Alert */}
      {toastMessage && (
        <div style={{ position: 'fixed', bottom: '30px', right: '30px', background: 'var(--bg-surface)', border: '1px solid var(--border-gold)', color: 'var(--gold-light)', padding: '14px 24px', borderRadius: '30px', zIndex: 3000, boxShadow: '0 8px 32px rgba(0,0,0,0.8)', fontSize: '0.9rem' }}>
          {toastMessage}
        </div>
      )}
    </div>
  );
}
