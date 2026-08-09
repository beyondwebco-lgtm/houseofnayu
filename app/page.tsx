'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Eye, SlidersHorizontal, Sparkles, X, ChevronUp, Search, User, LogOut } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Product } from '@/src/data';
import { supabase } from '@/src/supabase';
import CustomerAuthModal from '@/app/components/CustomerAuthModal';
import LuxuryToast, { ToastMessage } from '@/app/components/LuxuryToast';

import { loadCartForUser, saveCartForUser, syncCartOnLogin } from '@/src/cartStorage';

export default function StorefrontPage() {
  const [currentCategory, setCurrentCategory] = useState<string>('ALL');
  const [currentMaxPrice, setCurrentMaxPrice] = useState<number>(10000);
  const [filterActive, setFilterActive] = useState<boolean>(false);
  const [dbProducts, setDbProducts] = useState<Product[]>([]);
  const [categoriesList, setCategoriesList] = useState<string[]>(['ALL']);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartItems, setCartItems] = useState<any[]>([]);
  
  // Customer Auth & Toast State
  const [customerUser, setCustomerUser] = useState<any>(null);
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const showToast = (title: string, description?: string, type: 'success' | 'info' | 'warning' | 'error' = 'success') => {
    setToast({ id: String(Date.now()), title, description, type });
  };

  const updateCartState = (newCart: any[], uId = customerUser?.id) => {
    setCartItems(newCart);
    setCartCount(newCart.reduce((a: number, b: any) => a + (b.quantity || 1), 0));
    saveCartForUser(newCart, uId);
  };

  useEffect(() => {
    // 1. Sync Customer Supabase Auth Session and User Cart
    async function checkAuth() {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setCustomerUser(session.user);
        setAuthModalOpen(false);
        const userCart = syncCartOnLogin(session.user.id);
        setCartItems(userCart);
        setCartCount(userCart.reduce((a: number, b: any) => a + (b.quantity || 1), 0));
      } else {
        const guestCart = loadCartForUser(null);
        setCartItems(guestCart);
        setCartCount(guestCart.reduce((a: number, b: any) => a + (b.quantity || 1), 0));
      }
    }
    checkAuth();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setCustomerUser(session.user);
        setAuthModalOpen(false);
        const userCart = syncCartOnLogin(session.user.id);
        setCartItems(userCart);
        setCartCount(userCart.reduce((a: number, b: any) => a + (b.quantity || 1), 0));
      } else {
        setCustomerUser(null);
        const guestCart = loadCartForUser(null);
        setCartItems(guestCart);
        setCartCount(guestCart.reduce((a: number, b: any) => a + (b.quantity || 1), 0));
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    async function fetchStoreData() {
      // 1. Fetch live categories created by user
      const { data: catData } = await supabase.from('categories').select('name').order('name');
      if (catData && catData.length > 0) {
        setCategoriesList(['ALL', ...catData.map((c: any) => c.name)]);
      }

      // 2. Fetch live products created by user ONLY
      const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false });
      if (!error && data && data.length > 0) {
        const mapped: Product[] = data.map((item: any) => {
          const uniqueUrls = item.gallery_urls && item.gallery_urls.length > 0
            ? Array.from(new Set(item.gallery_urls as string[]))
            : [item.image_url];

          const gallery = uniqueUrls.filter(Boolean).map((url: string, idx: number) => ({
            id: String(idx + 1),
            url: url,
            type: (idx === 0 ? 'full' : 'detail') as 'full' | 'detail' | 'blouse'
          }));

          return {
            id: item.id,
            name: item.title,
            category: item.category_name || 'General',
            price: item.price,
            originalPrice: item.original_price || item.price * 1.3,
            description: item.description || '',
            fabric: item.fabric || '',
            craft: item.craft || '',
            blouseIncluded: item.blouse_included ?? true,
            availableSizes: item.available_sizes || ['XS', 'S', 'M', 'L', 'XL'],
            images: gallery
          };
        });

        setDbProducts(mapped);
      } else {
        setDbProducts([]);
      }
    }
    fetchStoreData();
  }, []);

  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = dbProducts.filter(p => {
    const matchesCat = currentCategory === 'ALL' || p.category === currentCategory;
    const matchesPrice = p.price <= currentMaxPrice;
    const matchesSearch = !searchQuery.trim() || 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.fabric.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.craft.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesPrice && matchesSearch;
  });

  return (
    <div className="next-root">
      {/* Top Navbar */}
      <nav className="navbar">
        <div className="brand-left">
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <Image src="/images/logo_icon_sharp.png" alt="House of Nayu Emblem" width={60} height={60} className="logo-icon-left" />
          </Link>
        </div>
        <div className="brand-center">
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <Image src="/images/brand_title_sharp.png" alt="House of Nayu Crest" width={450} height={80} priority style={{ height: '80px', width: '450px', objectFit: 'contain', flexShrink: 0 }} />
          </Link>
        </div>
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {customerUser ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(212, 175, 55, 0.1)', padding: '6px 14px', borderRadius: '25px', border: '1px solid var(--border-gold)' }}>
              <span style={{ color: 'var(--gold-light)', fontSize: '0.85rem', fontWeight: 600 }}>
                ✨ {customerUser.user_metadata?.full_name?.split(' ')[0] || customerUser.email.split('@')[0]}
              </span>
              <button
                onClick={() => supabase.auth.signOut()}
                style={{ background: 'none', border: 'none', color: '#e74c3c', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                title="Sign Out"
              >
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <button
              className="icon-btn"
              onClick={() => setAuthModalOpen(true)}
              aria-label="Customer Login"
              title="Sign In / Register"
            >
              <User size={22} style={{ color: 'var(--gold-light)' }} />
            </button>
          )}

          <button className="icon-btn" onClick={() => setCartOpen(true)} aria-label="Shopping Cart">
            <ShoppingBag size={22} style={{ color: 'var(--gold-light)' }} />
            <span className="cart-badge">{cartCount}</span>
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
        <div className="filter-top-bar" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', width: '100%', margin: '20px 0 30px 0' }}>
          <button className={`filter-toggle-btn-transparent-left ${filterActive ? 'active' : ''}`} onClick={() => setFilterActive(!filterActive)}>
            <SlidersHorizontal size={16} />
            <span>FILTER BY CATEGORY</span>
          </button>

          {/* Storefront Search Bar - Centered in Middle */}
          <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: '420px', maxWidth: '80%' }}>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search sarees by name, fabric, weave..."
              style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '11px 16px 11px 42px', borderRadius: '30px', fontSize: '0.9rem', outline: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.4)' }}
            />
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '12px', color: 'var(--gold-light)' }} />
          </div>

          <div style={{ width: '160px' }}></div>
        </div>

        <div className={`store-grid-container ${filterActive ? 'filter-active' : ''}`}>
          {/* Left Expandable Sidebar */}
          <aside className={`sidebar-filters-panel ${filterActive ? '' : 'hidden'}`}>
            <div className="sidebar-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid var(--border-gold)', marginBottom: '16px' }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--gold-light)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px', letterSpacing: '0.08em', margin: 0 }}>
                <SlidersHorizontal size={17} style={{ color: 'var(--gold-light)' }} /> FILTER COLLECTIONS
              </h2>
              <button
                onClick={() => setFilterActive(false)}
                style={{ background: 'rgba(212, 175, 55, 0.1)', border: '1px solid var(--border-gold)', color: 'var(--gold-light)', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                title="Close Filters"
              >
                <X size={15} />
              </button>
            </div>

            {/* Price Accordion */}
            <div className="filter-accordion open">
              <div className="accordion-header">
                <span>PRICE RANGE</span>
                <ChevronUp size={16} />
              </div>
              <div className="accordion-body">
                <div className="price-slider-wrap">
                  <div className="price-val-row">
                    <span>Under: <strong style={{ color: 'var(--gold-light)', fontSize: '1.05rem' }}>₹{currentMaxPrice.toLocaleString('en-IN')}</strong></span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Max: ₹10,000</span>
                  </div>
                  <div className="range-slider-container">
                    <input type="range" min="3000" max="10000" step="500" value={currentMaxPrice} onChange={e => setCurrentMaxPrice(Number(e.target.value))} className="range-input-active" />
                  </div>
                </div>
              </div>
            </div>

            {/* Category Accordion */}
            <div className="filter-accordion open">
              <div className="accordion-header">
                <span>FABRIC & CATEGORY</span>
                <ChevronUp size={16} />
              </div>
              <div className="accordion-body">
                <ul className="category-checkbox-list">
                  {categoriesList.map(cat => (
                    <li key={cat} className={`filter-checkbox-item ${currentCategory === cat ? 'active' : ''}`} onClick={() => setCurrentCategory(cat)}>
                      <span className={`custom-checkbox ${currentCategory === cat ? 'checked' : ''}`}></span>
                      <span className="checkbox-label" style={{ letterSpacing: '0.05em' }}>
                        {cat === 'ALL' ? 'ALL COLLECTIONS' : cat.toUpperCase()}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product Gallery Grid */}
          <div className="products-gallery-col">
            <div className="product-grid">
              {filteredProducts.map(product => {
                const coverImage = product.images[0]?.url || '/images/cotton_1/model_full.jpg';

                return (
                  <div key={product.id} className="product-card">
                    <Link href={`/product/${product.id}`} className="card-img-wrap" style={{ display: 'block', color: 'transparent', textDecoration: 'none' }}>
                      <span className="category-badge">{product.category}</span>
                      <img
                        src={coverImage}
                        alt=""
                        loading="lazy"
                        style={{ color: 'transparent' }}
                      />
                    </Link>
                    <div className="card-body">
                      <h3 className="product-title">
                        <Link href={`/product/${product.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                          {product.name}
                        </Link>
                      </h3>
                      <div className="product-price-wrap">
                        <span className="current-price">₹{product.price.toLocaleString('en-IN')}</span>
                        {product.originalPrice && (
                          <span className="original-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                        )}
                      </div>
                      <div className="card-actions" style={{ justifyContent: 'center' }}>
                        <Link href={`/product/${product.id}`} className="add-cart-btn" style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}>
                          <Eye size={16} /> View Saree Showcase
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Libas-Inspired Slide-Over Cart Drawer */}
      <div className={`cart-sidebar-backdrop ${cartOpen ? 'active' : ''}`} onClick={() => setCartOpen(false)}>
        <div className={`cart-sidebar-panel ${cartOpen ? 'active' : ''}`} onClick={e => e.stopPropagation()} style={{ width: '420px', maxWidth: '90vw', background: '#111111', borderLeft: '1px solid var(--border-gold)', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '-15px 0 50px rgba(0,0,0,0.95)' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-gold)', paddingBottom: '16px', marginBottom: '20px' }}>
              <h3 style={{ color: 'var(--gold-light)', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.25rem', fontFamily: 'var(--font-serif)' }}>
                <ShoppingBag size={22} /> Cart ({cartCount})
              </h3>
              <button onClick={() => setCartOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--gold-light)', cursor: 'pointer', fontSize: '1.3rem' }}>
                ✕
              </button>
            </div>

            <div style={{ maxHeight: '60vh', overflowY: 'auto', paddingRight: '4px' }}>
              {cartItems.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
                  <ShoppingBag size={44} style={{ color: 'var(--gold-light)', opacity: 0.4, marginBottom: '12px' }} />
                  <p style={{ fontSize: '0.95rem' }}>Your shopping cart is currently empty.</p>
                </div>
              ) : (
                cartItems.map((item, idx) => {
                  const prod = item.product || item;
                  const itemTitle = prod.title || prod.name || 'Bespoke Handloom Saree';
                  const itemPrice = prod.price || 0;
                  const itemOrigPrice = prod.original_price || prod.originalPrice;
                  const itemImg = prod.image_url || prod.gallery_urls?.[0] || prod.images?.[0]?.url || '/images/cotton_1/model_full.jpg';
                  const qty = item.quantity || 1;

                  return (
                    <div key={idx} style={{ display: 'flex', gap: '14px', marginBottom: '18px', background: 'var(--bg-card)', padding: '14px', borderRadius: '12px', border: '1px solid var(--border-subtle)', alignItems: 'center', position: 'relative' }}>
                      <img src={itemImg} alt={itemTitle} style={{ width: '75px', height: '95px', objectFit: 'cover', borderRadius: '8px', border: '1px solid var(--border-gold)' }} />
                      
                      <div style={{ flex: 1 }}>
                        <h4 style={{ color: 'var(--gold-light)', fontSize: '0.95rem', marginBottom: '6px', lineHeight: 1.35, fontWeight: 600 }}>{itemTitle}</h4>
                        
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '6px' }}>
                          {itemOrigPrice && itemOrigPrice > itemPrice && (
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                              ₹{itemOrigPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                          <span style={{ color: 'var(--gold-light)', fontWeight: 700, fontSize: '0.95rem' }}>
                            ₹{itemPrice.toLocaleString('en-IN')}
                          </span>
                        </div>

                        {item.selectedSize && item.selectedSize !== 'Free Size / Unstitched' && (
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>Size: {item.selectedSize}</span>
                        )}

                        {/* Quantity Controls - 1 + */}
                        <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid var(--border-gold)', borderRadius: '20px', background: 'rgba(0,0,0,0.5)', overflow: 'hidden' }}>
                          <button
                            onClick={() => {
                              const updated = [...cartItems];
                              if (qty > 1) {
                                updated[idx].quantity = qty - 1;
                              } else {
                                updated.splice(idx, 1);
                              }
                              updateCartState(updated);
                            }}
                            style={{ background: 'none', border: 'none', color: 'var(--gold-light)', padding: '4px 10px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 700 }}
                          >
                            -
                          </button>
                          <span style={{ padding: '0 8px', fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>{qty}</span>
                          <button
                            onClick={() => {
                              const updated = [...cartItems];
                              updated[idx].quantity = qty + 1;
                              updateCartState(updated);
                            }}
                            style={{ background: 'none', border: 'none', color: 'var(--gold-light)', padding: '4px 10px', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 700 }}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Trash Bin Remove */}
                      <button
                        onClick={() => {
                          const updated = cartItems.filter((_, i) => i !== idx);
                          updateCartState(updated);
                        }}
                        style={{ background: 'none', border: 'none', color: '#ff6b6b', cursor: 'pointer', padding: '8px', fontSize: '1.1rem' }}
                        title="Remove Item"
                      >
                        🗑️
                      </button>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {cartItems.length > 0 && (
            <div style={{ borderTop: '1px solid var(--border-gold)', paddingTop: '20px', marginTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                <span>SUBTOTAL</span>
                <strong style={{ color: 'var(--gold-light)', fontSize: '1.2rem' }}>
                  ₹{cartItems.reduce((sum, item) => sum + ((item.product?.price || item.price || 0) * (item.quantity || 1)), 0).toLocaleString('en-IN')}
                </strong>
              </div>

              <button
                onClick={() => {
                  confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
                  showToast('✨ Order Placed Successfully!', 'Thank you for choosing House of Nayu! Your bespoke saree order has been placed.', 'success');
                  updateCartState([]);
                  setCartOpen(false);
                }}
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '1.05rem', fontWeight: 700, borderRadius: '30px', marginTop: '14px', letterSpacing: '0.05em' }}
              >
                PLACE ORDER →
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Customer Auth Modal */}
      <CustomerAuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={(u) => setCustomerUser(u)}
        showToast={showToast}
      />

      {/* Luxury Toast Notification */}
      <LuxuryToast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
