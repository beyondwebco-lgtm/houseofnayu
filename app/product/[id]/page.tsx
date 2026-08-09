'use client';

import { use, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, ArrowLeft, Check, User, LogOut } from 'lucide-react';
import confetti from 'canvas-confetti';
import { supabase } from '@/src/supabase';
import CustomerAuthModal from '@/app/components/CustomerAuthModal';
import { loadCartForUser, saveCartForUser, syncCartOnLogin } from '@/src/cartStorage';

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;

  const [product, setProduct] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  
  // Customer Auth State
  const [customerUser, setCustomerUser] = useState<any>(null);
  const [authModalOpen, setAuthModalOpen] = useState<boolean>(false);

  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const updateCartState = (newCart: any[], uId = customerUser?.id) => {
    setCartItems(newCart);
    setCartCount(newCart.reduce((a: number, b: any) => a + (b.quantity || 1), 0));
    saveCartForUser(newCart, uId);
  };

  useEffect(() => {
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
  const [selectedSize, setSelectedSize] = useState<string>('S');
  const [loading, setLoading] = useState<boolean>(true);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  useEffect(() => {
    async function fetchProduct() {
      if (!productId) return;
      setLoading(true);
      const { data, error } = await supabase.from('products').select('*').eq('id', productId).single();
      
      if (!error && data) {
        setProduct(data);
        const cover = data.gallery_urls && data.gallery_urls.length > 0 ? data.gallery_urls[0] : data.image_url;
        setSelectedImage(cover);
      }
      setLoading(false);
    }
    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    // Golden Luxury Ticket Confetti Rain across whole screen
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#D4AF37', '#FFD700', '#F3E5AB', '#DAA520', '#FFFFFF']
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#D4AF37', '#FFD700', '#F3E5AB', '#DAA520', '#FFFFFF']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    const items = [...cartItems];
    const existingIdx = items.findIndex((i: any) => (i.product?.id || i.id) === product.id && i.selectedSize === selectedSize);

    let updatedCart = [];
    if (existingIdx > -1) {
      items[existingIdx].quantity = (items[existingIdx].quantity || 1) + 1;
      updatedCart = [...items];
    } else {
      updatedCart = [...items, { product, selectedSize, quantity: 1 }];
    }

    updateCartState(updatedCart);
    setAddedToCart(true);
    setCartOpen(true);
    setTimeout(() => setAddedToCart(false), 3500);
  };

  if (loading) {
    return <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-light)' }}>Loading Luxury Details...</div>;
  }

  if (!product) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', padding: '100px 20px', textAlign: 'center', color: 'var(--gold-light)' }}>
        <h2>Product Not Found</h2>
        <p style={{ margin: '20px 0' }}>The requested saree could not be located in our inventory.</p>
        <Link href="/" className="btn-gold" style={{ display: 'inline-flex', gap: '8px', textDecoration: 'none' }}>
          <ArrowLeft size={18} /> Return to Storefront
        </Link>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-main)', paddingBottom: '80px' }}>
      <nav className="navbar" style={{ height: '100px', padding: '0 4%', background: 'rgba(10, 10, 10, 0.95)', borderBottom: 'none' }}>
        <div className="brand-left" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Image src="/images/logo_icon_sharp.png" alt="House of Nayu Emblem" width={60} height={60} className="logo-icon-left" />
          <Link href="/" className="back-link" style={{ color: 'var(--gold-light)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', padding: '8px 16px', borderRadius: '20px', background: 'rgba(212, 175, 55, 0.08)', border: '1px solid var(--border-gold)' }}>
            <ArrowLeft size={18} /> BACK TO STORE
          </Link>
        </div>

        <div className="brand-center">
          <Image src="/images/brand_title_sharp.png" alt="House of Nayu Crest" width={450} height={80} priority style={{ height: '80px', width: '450px', objectFit: 'contain', flexShrink: 0 }} />
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

      <div style={{ maxWidth: '1280px', margin: '120px auto 0 auto', padding: '0 4%' }}>
        <div className="product-detail-grid">
          <div>
            <div className="product-main-img-box">
              <img
                src={selectedImage || product.gallery_urls?.[0] || product.image_url}
                alt={product.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>

            {product.gallery_urls && product.gallery_urls.length > 1 && (
              <div style={{ display: 'flex', gap: '14px', overflowX: 'auto', paddingBottom: '10px' }}>
                {product.gallery_urls.map((img: string, idx: number) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    onClick={() => setSelectedImage(img)}
                    style={{
                      width: '80px',
                      height: '105px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      border: (selectedImage || product.gallery_urls[0]) === img ? '2px solid var(--gold-primary)' : '1px solid var(--border-subtle)',
                      opacity: (selectedImage || product.gallery_urls[0]) === img ? 1 : 0.6,
                      transition: 'all 0.2s ease'
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <div>
            <span className="category-badge" style={{ position: 'static', fontSize: '0.8rem', letterSpacing: '0.15em', padding: '6px 14px', display: 'inline-block', marginBottom: '12px' }}>
              {product.category_name}
            </span>

            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', color: 'var(--gold-light)', margin: '12px 0 20px 0', lineHeight: 1.25 }}>
              {product.title}
            </h1>

            <div style={{ display: 'flex', alignItems: 'baseline', gap: '16px', margin: '20px 0' }}>
              <span style={{ fontSize: '2.2rem', color: 'var(--gold-light)', fontWeight: 700, fontFamily: 'var(--font-sans)' }}>
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.original_price && product.original_price > product.price && (
                <span style={{ fontSize: '1.3rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                  ₹{product.original_price.toLocaleString('en-IN')}
                </span>
              )}
            </div>

            {product.color_name && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', margin: '20px 0' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', letterSpacing: '0.05em' }}>COLOR PALETTE:</span>
                <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: product.color_hex || '#D4AF37', display: 'inline-block', border: '1px solid var(--border-gold)' }}></span>
                <strong style={{ color: 'var(--gold-light)', fontSize: '0.9rem' }}>{product.color_name}</strong>
              </div>
            )}

            <div style={{ background: 'rgba(212, 175, 55, 0.04)', border: '1px solid var(--border-gold)', borderRadius: '12px', padding: '20px', margin: '24px 0' }}>
              <strong style={{ color: 'var(--gold-light)', fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: '14px' }}>
                ✨ CRAFT & SPECIFICATIONS
              </strong>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '0.9rem' }}>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>FABRIC MATERIAL</span>
                  <strong style={{ color: 'var(--text-main)' }}>{product.fabric || 'Pure Handloom'}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>WEAVING CRAFT</span>
                  <strong style={{ color: 'var(--text-main)' }}>{product.craft || 'Traditional Weave'}</strong>
                </div>
              </div>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, margin: '24px 0' }}>
              {product.description || 'Exquisitely handcrafted by India’s finest master weavers using traditional techniques passed down through generations.'}
            </p>

            {product.available_sizes && product.available_sizes.length > 0 && !product.available_sizes.includes('Free Size / Unstitched') && (
              <div style={{ margin: '28px 0' }}>
                <strong style={{ color: 'var(--gold-light)', fontSize: '0.85rem', letterSpacing: '0.08em', display: 'block', marginBottom: '12px' }}>
                  SELECT SIZE / STITCHING PREFERENCE:
                </strong>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {product.available_sizes.map((sz: string) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      style={{
                        padding: '10px 20px',
                        borderRadius: '24px',
                        border: selectedSize === sz ? '1px solid var(--gold-primary)' : '1px solid var(--border-subtle)',
                        background: selectedSize === sz ? 'var(--gold-gradient)' : 'var(--bg-card)',
                        color: selectedSize === sz ? '#000' : 'var(--text-main)',
                        fontWeight: selectedSize === sz ? 700 : 500,
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={handleAddToCart}
              style={{
                width: '100%',
                padding: '18px 24px',
                fontSize: '1.15rem',
                fontWeight: 700,
                marginTop: '28px',
                background: 'linear-gradient(135deg, #D4AF37 0%, #FFD700 50%, #B8860B 100%)',
                color: '#000',
                border: 'none',
                borderRadius: '30px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                boxShadow: '0 10px 30px rgba(212, 175, 55, 0.4), 0 0 20px rgba(255, 215, 0, 0.3)',
                transition: 'all 0.3s ease',
                letterSpacing: '0.05em',
                transform: addedToCart ? 'scale(1.02)' : 'scale(1)',
              }}
            >
              {addedToCart ? <Check size={22} /> : <ShoppingBag size={22} />}
              {addedToCart ? `✨ Added To Royal Bag!` : `Add To Royal Bag — ₹${product.price.toLocaleString('en-IN')}`}
            </button>
          </div>
        </div>
      </div>

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
                  alert('✨ Thank you for choosing House of Nayu! Your bespoke order has been placed.');
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
      />
    </div>
  );
}
