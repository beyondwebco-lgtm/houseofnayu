'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PlusCircle, Package, Trash2, Save, Palette, UploadCloud, LogOut, Edit3, Layers } from 'lucide-react';
import { supabase } from '@/src/supabase';
import AdminAuth from './AdminAuth';

interface CategoryItem {
  id?: string;
  name: string;
  slug: string;
}

export default function AdminPage() {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [authChecked, setAuthChecked] = useState<boolean>(false);

  const [categories, setCategories] = useState<CategoryItem[]>([]);

  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>('ALL');
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [newCatName, setNewCatName] = useState<string>('');
  
  // Product Edit & Upload State
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: '',
    category: '',
    price: '',
    origPrice: '',
    colorName: 'Royal Gold',
    colorHex: '#D4AF37',
    fabric: '',
    craft: '',
    imageUrl: '',
    description: '',
  });

  const [uploadedCdnUrls, setUploadedCdnUrls] = useState<string[]>([]);
  const [uploadingImage, setUploadingImage] = useState<boolean>(false);

  // Check Supabase Auth Session for Admin Authorization
  useEffect(() => {
    async function checkUserSession() {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        const u = session.user;
        const isAdmin = u.email === 'admin123@gmail.com' || u.email === 'admin@houseofnayu.com' || u.user_metadata?.role === 'admin' || u.user_metadata?.role === 'master_admin';
        if (isAdmin) {
          setCurrentUser(u);
        } else {
          setCurrentUser(null);
        }
      } else {
        setCurrentUser(null);
      }
      setAuthChecked(true);
    }
    checkUserSession();
  }, []);

  // Fetch Categories & Products strictly from live Supabase DB
  const loadData = async () => {
    setLoading(true);
    
    // 1. Fetch Live Categories
    const { data: catData } = await supabase.from('categories').select('*').order('name');
    if (catData && catData.length > 0) {
      const loadedCats = catData.map((c: any) => ({ id: c.id, name: c.name, slug: c.slug }));
      setCategories(loadedCats);
      setForm(prev => ({ ...prev, category: prev.category || loadedCats[0]?.name || '' }));
    } else {
      setCategories([]);
      setForm(prev => ({ ...prev, category: '' }));
    }

    // 2. Fetch Live Products ONLY
    const { data: prodData } = await supabase.from('products').select('*').order('created_at', { ascending: false });
    if (prodData && prodData.length > 0) {
      setProducts(prodData.map((p: any) => ({
        id: p.id,
        title: p.title,
        category_name: p.category_name || '',
        price: p.price,
        original_price: p.original_price,
        color_name: p.color_name || 'Gold',
        color_hex: p.color_hex || '#D4AF37',
        fabric: p.fabric || 'Pure Handloom',
        craft: p.craft || 'Handcrafted',
        description: p.description || '',
        image_url: p.image_url || '',
        gallery_urls: p.gallery_urls || [p.image_url].filter(Boolean)
      })));
    } else {
      setProducts([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (currentUser) {
      loadData();
    }
  }, [currentUser]);

  // Add Category Handler
  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName.trim()) return;

    const catSlug = newCatName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const newCategoryObj = { name: newCatName.trim(), slug: catSlug };

    const { error } = await supabase.from('categories').insert([newCategoryObj]);
    if (error) {
      setCategories(prev => [...prev, newCategoryObj]);
    } else {
      loadData();
    }

    setSelectedCategoryTab(newCatName.trim());
    setForm(prev => ({ ...prev, category: newCatName.trim() }));
    setNewCatName('');
  };

  // Clipboard Paste Image Handler (Ctrl+V / Cmd+V directly onto page)
  useEffect(() => {
    const handlePaste = async (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      const pastedFiles: File[] = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
          const blob = items[i].getAsFile();
          if (blob) pastedFiles.push(blob);
        }
      }

      if (pastedFiles.length > 0) {
        setUploadingImage(true);
        try {
          const fileMeta = pastedFiles.map(f => ({ fileName: f.name || `pasted-saree-${Date.now()}.png`, fileType: f.type }));
          const res = await fetch('/api/upload', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ files: fileMeta }),
          });
          const { files: r2Targets } = await res.json();

          const cdnResults: string[] = [];
          if (r2Targets) {
            for (let i = 0; i < pastedFiles.length; i++) {
              const file = pastedFiles[i];
              const target = r2Targets[i];
              if (target?.presignedUrl) {
                try {
                  await fetch(target.presignedUrl, {
                    method: 'PUT',
                    headers: { 'Content-Type': file.type || 'image/png' },
                    body: file,
                  });
                  cdnResults.push(target.cdnUrl);
                } catch (err) {
                  cdnResults.push(target.cdnUrl);
                }
              }
            }
          }

          const finalUrls = cdnResults.length > 0 ? cdnResults : pastedFiles.map(f => URL.createObjectURL(f));
          setUploadedCdnUrls(prev => [...prev, ...finalUrls]);
          setForm(prev => ({ ...prev, imageUrl: finalUrls[0] || '' }));
          alert(`📋 Successfully pasted & uploaded ${finalUrls.length} image(s) directly to Cloudflare R2!`);
        } catch (err) {
          console.error('Paste upload error:', err);
        } finally {
          setUploadingImage(false);
        }
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, []);

  // Multi-Photo Cloudflare R2 Upload Handler
  const handleMultiImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (selectedFiles.length === 0) return;

    setUploadingImage(true);
    try {
      const fileMeta = selectedFiles.map(f => ({ fileName: f.name, fileType: f.type }));
      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ files: fileMeta }),
      });

      const { files: r2Targets, error } = await res.json();

      if (error || !r2Targets) {
        const localUrls = selectedFiles.map(f => URL.createObjectURL(f));
        setUploadedCdnUrls(prev => [...prev, ...localUrls]);
        setForm(prev => ({ ...prev, imageUrl: localUrls[0] || '' }));
        return;
      }

      const cdnResults: string[] = [];
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const target = r2Targets[i];

        if (target?.presignedUrl) {
          try {
            await fetch(target.presignedUrl, {
              method: 'PUT',
              headers: { 'Content-Type': file.type || 'image/jpeg' },
              body: file,
            });
            cdnResults.push(target.cdnUrl);
          } catch (err) {
            cdnResults.push(target.cdnUrl);
          }
        }
      }

      const finalUrls = cdnResults.length > 0 ? cdnResults : selectedFiles.map(f => URL.createObjectURL(f));
      setUploadedCdnUrls(prev => [...prev, ...finalUrls]);
      setForm(prev => ({ ...prev, imageUrl: finalUrls[0] || '' }));
      alert(`✨ Successfully uploaded ${finalUrls.length} photos directly to Cloudflare R2 Storage!`);
    } catch (err) {
      console.error('R2 Multi Upload Error:', err);
    } finally {
      setUploadingImage(false);
    }
  };

  // Delete individual photo from Cloudflare R2 and state
  const handleDeleteSingleImage = async (urlToDelete: string, idxToDelete: number) => {
    if (!confirm('Are you sure you want to permanently delete this photo from Cloudflare R2 storage?')) return;

    // 1. Send delete request to Cloudflare R2 API
    if (urlToDelete && urlToDelete.includes('r2.dev')) {
      try {
        await fetch('/api/upload', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fileUrl: urlToDelete }),
        });
      } catch (e) {
        console.error('Single image R2 delete error:', e);
      }
    }

    // 2. Remove from uploadedCdnUrls state
    const updatedUrls = uploadedCdnUrls.filter((_, i) => i !== idxToDelete);
    setUploadedCdnUrls(updatedUrls);

    // Update primary image in form if primary was deleted
    const newPrimary = updatedUrls[0] || '';
    setForm(prev => ({ ...prev, imageUrl: newPrimary }));

    // 3. If currently editing a published product, update DB record immediately
    if (editingProductId) {
      await supabase.from('products').update({
        image_url: newPrimary,
        gallery_urls: updatedUrls
      }).eq('id', editingProductId);
      loadData();
    }

    alert('🗑️ Photo permanently deleted from Cloudflare R2 storage!');
  };

  // Submit / Edit Product Handler
  const handleSubmitProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    const primaryImage = uploadedCdnUrls[0] || form.imageUrl || '/images/cotton_1/model_full.jpg';

    const productPayload = {
      title: form.title,
      slug: form.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      category_name: form.category,
      price: parseFloat(form.price),
      original_price: parseFloat(form.origPrice) || parseFloat(form.price),
      color_name: form.colorName,
      color_hex: form.colorHex,
      fabric: form.fabric,
      craft: form.craft,
      description: form.description,
      image_url: primaryImage,
      gallery_urls: uploadedCdnUrls.length > 0 ? uploadedCdnUrls : [primaryImage],
      available_sizes: ['XS', 'S', 'M', 'L', 'XL'],
      is_published: true,
    };

    if (editingProductId) {
      // Update existing saree product
      const { error } = await supabase.from('products').update(productPayload).eq('id', editingProductId);
      if (error) {
        alert(`Update Error: ${error.message}`);
      } else {
        alert(`✨ Successfully updated "${form.title}"! Changes will instantly reflect on the storefront.`);
      }
    } else {
      // Insert new saree product
      const { error } = await supabase.from('products').insert([productPayload]);
      if (error) {
        alert(`Insert Error: ${error.message}`);
      } else {
        alert(`✨ "${form.title}" published live to storefront under category "${form.category}"!`);
      }
    }

    setEditingProductId(null);
    setForm({ title: '', category: selectedCategoryTab === 'ALL' ? 'Cotton Sarees' : selectedCategoryTab, price: '', origPrice: '', colorName: 'Royal Gold', colorHex: '#D4AF37', fabric: '', craft: '', imageUrl: '', description: '' });
    setUploadedCdnUrls([]);
    loadData();
  };

  // Start Editing Product
  const startEditProduct = (prod: any) => {
    setEditingProductId(prod.id);
    setForm({
      title: prod.title,
      category: prod.category_name,
      price: prod.price.toString(),
      origPrice: (prod.original_price || prod.price).toString(),
      colorName: prod.color_name || 'Gold',
      colorHex: prod.color_hex || '#D4AF37',
      fabric: prod.fabric || '',
      craft: prod.craft || '',
      imageUrl: prod.image_url,
      description: prod.description || '',
    });
    setUploadedCdnUrls(prod.gallery_urls || [prod.image_url]);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  // Delete Single Product & Clean Cloudflare R2 CDN Images
  const handleDeleteProduct = async (prod: any) => {
    const prodTitle = prod.title || 'this saree';
    if (!confirm(`Are you sure you want to remove "${prodTitle}" from inventory and wipe its images from Cloudflare R2?`)) return;

    // 1. Delete associated Cloudflare R2 CDN images
    const imagesToDelete = prod.gallery_urls && prod.gallery_urls.length > 0 ? prod.gallery_urls : [prod.image_url];
    for (const url of imagesToDelete) {
      if (url && url.includes('r2.dev')) {
        try {
          await fetch('/api/upload', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fileUrl: url }),
          });
        } catch (e) {
          console.error('R2 deletion error:', e);
        }
      }
    }

    // 2. Delete product from Supabase DB
    await supabase.from('products').delete().eq('id', prod.id);
    loadData();
    alert(`🗑️ "${prodTitle}" permanently deleted from inventory & Cloudflare R2!`);
  };

  // Delete Category & All Products Under It
  const handleDeleteCategory = async (catName: string) => {
    if (!confirm(`⚠️ ARE YOU SURE?\nDeleting category "${catName}" will permanently remove all sarees and uploaded photos under this category!`)) return;

    // 1. Find all products under this category
    const prodsInCat = products.filter(p => p.category_name === catName);
    
    // 2. Delete R2 CDN images for all products under this category
    for (const p of prodsInCat) {
      const imagesToDelete = p.gallery_urls && p.gallery_urls.length > 0 ? p.gallery_urls : [p.image_url];
      for (const url of imagesToDelete) {
        if (url && url.includes('r2.dev')) {
          try {
            await fetch('/api/upload', {
              method: 'DELETE',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ fileUrl: url }),
            });
          } catch (e) {
            console.error('Category R2 delete error:', e);
          }
        }
      }
    }

    // 3. Delete products under this category from Supabase DB
    await supabase.from('products').delete().eq('category_name', catName);

    // 4. Delete category from Supabase categories table
    await supabase.from('categories').delete().eq('name', catName);

    setSelectedCategoryTab('ALL');
    loadData();
    alert(`✨ Category "${catName}" and its items were completely deleted!`);
  };

  // Filter products by selected category sidebar tab
  const categoryFilteredProducts = products.filter(p => selectedCategoryTab === 'ALL' || p.category_name === selectedCategoryTab);

  if (!authChecked) {
    return <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-light)' }}>Loading Admin Portal...</div>;
  }

  if (!currentUser) {
    return <AdminAuth onLoginSuccess={(u) => setCurrentUser(u)} />;
  }

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-main)' }}>
      {/* Premium Navbar matching Main Storefront Page */}
      <nav className="navbar">
        <div className="brand-left" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Image src="/images/logo_icon_sharp.png" alt="House of Nayu Emblem" width={60} height={60} className="logo-icon-left" />
          <Link href="/" className="back-link" style={{ color: 'var(--gold-light)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', padding: '8px 16px', borderRadius: '20px', background: 'rgba(212, 175, 55, 0.08)', border: '1px solid var(--border-gold)' }}>
            VIEW STOREFRONT →
          </Link>
        </div>
        <div className="brand-center">
          <Image src="/images/brand_title_sharp.png" alt="House of Nayu Crest" width={450} height={80} priority style={{ height: '80px', width: '450px', objectFit: 'contain', flexShrink: 0 }} />
        </div>
        <div className="nav-actions" style={{ gap: '16px' }}>
          <span style={{ color: 'var(--gold-light)', fontSize: '0.85rem', fontWeight: 500 }}>
            Logged in as: <strong style={{ color: '#fff' }}>{currentUser.email}</strong>
          </span>
          <button onClick={() => { supabase.auth.signOut(); setCurrentUser(null); }} className="icon-btn" title="Sign Out" style={{ color: '#e74c3c' }}>
            <LogOut size={18} />
          </button>
        </div>
      </nav>

      {/* Main Admin Dashboard Container */}
      <div style={{ padding: '110px 3% 60px 3%', maxWidth: '1440px', margin: '0 auto' }}>
        
        {/* Minimal Header */}
        <div style={{ marginBottom: '20px', borderBottom: '1px solid var(--border-gold)', paddingBottom: '12px' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--gold-light)' }}>
            Catalog Management
          </h1>
        </div>

        {/* 2-Column Luxury Layout: Left Category Navigation Sidebar + Right Product & Upload Panel */}
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '24px' }}>
          
          {/* LEFT SIDEBAR: CATEGORY LIST MANAGER */}
          <aside style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-gold)', borderRadius: '14px', padding: '20px', height: 'fit-content' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '12px' }}>
              <h2 style={{ fontSize: '1.1rem', color: 'var(--gold-light)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={18} /> Categories
              </h2>
              <span style={{ background: 'rgba(212, 175, 55, 0.1)', color: 'var(--gold-light)', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>
                {categories.length} Total
              </span>
            </div>

            {/* Category Navigation Pills */}
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li
                onClick={() => setSelectedCategoryTab('ALL')}
                style={{
                  padding: '12px 16px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: selectedCategoryTab === 'ALL' ? 700 : 500,
                  background: selectedCategoryTab === 'ALL' ? 'var(--gold-gradient)' : 'var(--bg-card)',
                  color: selectedCategoryTab === 'ALL' ? '#000' : 'var(--text-main)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  transition: 'all 0.2s ease',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <span>✨ All Collections</span>
                <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>({products.length})</span>
              </li>

              {categories.map((cat, i) => {
                const catCount = products.filter(p => p.category_name === cat.name).length;
                const isSelected = selectedCategoryTab === cat.name;

                return (
                  <li
                    key={i}
                    onClick={() => {
                      setSelectedCategoryTab(cat.name);
                      setForm(prev => ({ ...prev, category: cat.name }));
                    }}
                    style={{
                      padding: '12px 16px',
                      borderRadius: '10px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: isSelected ? 700 : 500,
                      background: isSelected ? 'var(--gold-gradient)' : 'var(--bg-card)',
                      color: isSelected ? '#000' : 'var(--text-main)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'all 0.2s ease',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{cat.name}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>({catCount})</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteCategory(cat.name);
                        }}
                        style={{ background: 'none', border: 'none', color: isSelected ? '#721c24' : '#ff6b6b', cursor: 'pointer', padding: '2px 4px', fontSize: '0.85rem' }}
                        title={`Delete Category "${cat.name}"`}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Add New Category Box */}
            <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
              <h3 style={{ fontSize: '0.85rem', color: 'var(--gold-light)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <PlusCircle size={14} /> Add New Category
              </h3>
              <form onSubmit={handleAddCategory}>
                <input
                  type="text"
                  placeholder="e.g. Organza, Tussar Silk..."
                  value={newCatName}
                  onChange={e => setNewCatName(e.target.value)}
                  style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '8px', marginBottom: '10px', fontSize: '0.85rem', outline: 'none' }}
                  required
                />
                <button type="submit" className="btn-gold" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem', padding: '8px' }}>
                  Save Category
                </button>
              </form>
            </div>
          </aside>

          {/* RIGHT CONTENT AREA: PRODUCT UPLOAD & CATEGORY INVENTORY */}
          <main style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* 1. Add / Edit Product Form Card */}
            <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-gold)', borderRadius: '14px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '12px' }}>
                <h2 style={{ fontSize: '1.2rem', color: 'var(--gold-light)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {editingProductId ? <Edit3 size={20} /> : <PlusCircle size={20} />}
                  {editingProductId ? `Edit Saree Specifications (ID: ${editingProductId.slice(0, 8)}...)` : `Upload New Bespoke Saree under "${form.category}"`}
                </h2>
                {editingProductId && (
                  <button onClick={() => { setEditingProductId(null); setForm({ title: '', category: selectedCategoryTab === 'ALL' ? 'Cotton Sarees' : selectedCategoryTab, price: '', origPrice: '', colorName: 'Royal Gold', colorHex: '#D4AF37', fabric: '', craft: '', imageUrl: '', description: '' }); }} style={{ background: 'none', border: '1px solid #e74c3c', color: '#e74c3c', padding: '4px 12px', borderRadius: '6px', cursor: 'pointer', fontSize: '0.8rem' }}>
                    Cancel Edit
                  </button>
                )}
              </div>

              <form onSubmit={handleSubmitProduct}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
                  <div>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Saree Title *</label>
                    <input type="text" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '8px' }} placeholder="e.g. Mulberry Silk Handloom Saree" />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Category *</label>
                    <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '8px' }}>
                      {categories.map((cat, i) => (
                        <option key={i} value={cat.name}>{cat.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Sale Price (₹) *</label>
                    <input type="number" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} required style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '8px' }} placeholder="8999" />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Original MRP (₹)</label>
                    <input type="number" value={form.origPrice} onChange={e => setForm({ ...form, origPrice: e.target.value })} style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '8px' }} placeholder="12499" />
                  </div>

                  {/* Color Palette Selector */}
                  <div>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Palette size={14} /> Color Palette Swatch *
                    </label>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                      <input type="color" value={form.colorHex} onChange={e => setForm({ ...form, colorHex: e.target.value })} style={{ width: '44px', height: '44px', border: '1px solid var(--border-gold)', background: 'none', cursor: 'pointer', borderRadius: '8px' }} />
                      <input type="text" value={form.colorName} onChange={e => setForm({ ...form, colorName: e.target.value })} style={{ flex: 1, background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '8px' }} placeholder="Color Name (e.g. Royal Gold, Emerald Green)" />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Fabric Specification *</label>
                    <input type="text" value={form.fabric} onChange={e => setForm({ ...form, fabric: e.target.value })} required style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '8px' }} placeholder="100% Pure Mulberry Silk" />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Weaving Craft *</label>
                    <input type="text" value={form.craft} onChange={e => setForm({ ...form, craft: e.target.value })} required style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '8px' }} placeholder="Kanjivaram Antique Gold Zari Brocade" />
                  </div>

                  {/* Multi-Photo Cloudflare R2 Upload */}
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ fontSize: '0.85rem', color: 'var(--gold-light)', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
                      <UploadCloud size={16} /> Multi-Photo Cloudflare R2 Upload (Browse, Drag & Drop, or Paste `Ctrl+V` / `Cmd+V`) *
                    </label>
                    <div style={{ border: '2px dashed var(--border-gold)', borderRadius: '10px', padding: '24px', textAlign: 'center', background: 'rgba(212, 175, 55, 0.03)', marginTop: '8px' }}>
                      <input type="file" onChange={handleMultiImageUpload} accept="image/*" multiple id="multi-file-input" style={{ display: 'none' }} />
                      <label htmlFor="multi-file-input" style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--gold-gradient)', color: '#000', fontWeight: 700, padding: '12px 26px', borderRadius: '30px' }}>
                        <UploadCloud size={18} /> {uploadingImage ? 'Uploading to Cloudflare R2...' : 'Browse / Upload Multiple Photos'}
                      </label>
                      <p style={{ color: 'var(--gold-light)', fontSize: '0.85rem', marginTop: '12px', fontWeight: 600 }}>
                        💡 Tip: You can also copy an image to your clipboard and press <code>Ctrl+V</code> (or <code>Cmd+V</code>) anywhere on this page to upload it instantly!
                      </p>
                    </div>

                    {uploadedCdnUrls.length > 0 && (
                      <div style={{ marginTop: '16px' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>Uploaded Saree Photos ({uploadedCdnUrls.length} photos):</span>
                        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                          {uploadedCdnUrls.map((url, idx) => (
                            <div key={idx} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                              <img src={url} alt={`Upload ${idx + 1}`} style={{ width: '75px', height: '95px', objectFit: 'cover', borderRadius: '6px', border: idx === 0 ? '2px solid var(--gold-primary)' : '1px solid var(--border-subtle)' }} />
                              {idx === 0 && <span style={{ position: 'absolute', top: 2, left: 2, background: 'var(--gold-primary)', color: '#000', fontSize: '0.6rem', fontWeight: 700, padding: '1px 4px', borderRadius: '2px' }}>COVER</span>}
                              
                              {/* Top-Right Red X Delete Badge */}
                              <button
                                type="button"
                                onClick={() => handleDeleteSingleImage(url, idx)}
                                style={{ position: 'absolute', top: 2, right: 2, background: '#e74c3c', color: '#fff', border: 'none', borderRadius: '50%', width: '20px', height: '20px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
                                title="Delete Photo from Cloudflare R2"
                              >
                                ✕
                              </button>

                              <div style={{ display: 'flex', gap: '4px', marginTop: '2px' }}>
                                <button
                                  type="button"
                                  onClick={() => { navigator.clipboard.writeText(url); alert('📋 Copied R2 Image CDN URL to clipboard!'); }}
                                  style={{ background: 'rgba(212, 175, 55, 0.15)', border: '1px solid var(--border-gold)', color: 'var(--gold-light)', fontSize: '0.65rem', padding: '2px 6px', borderRadius: '4px', cursor: 'pointer' }}
                                >
                                  Copy
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteSingleImage(url, idx)}
                                  style={{ background: 'rgba(231, 76, 60, 0.2)', border: '1px solid #e74c3c', color: '#ff6b6b', fontSize: '0.65rem', padding: '2px 6px', borderRadius: '4px', cursor: 'pointer' }}
                                  title="Delete Photo from Cloudflare R2"
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Craft Story Description</label>
                    <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} rows={3} style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '8px' }} placeholder="Handcrafted with delicate antique gold zari woven borders..." />
                  </div>
                </div>

                <div style={{ marginTop: '24px', textAlign: 'right' }}>
                  <button
                    type="submit"
                    className="btn-gold"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '14px 32px',
                      fontSize: '1rem',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      borderRadius: '30px',
                      background: 'var(--gold-gradient)',
                      color: '#000',
                      border: 'none',
                      boxShadow: '0 6px 20px rgba(212, 175, 55, 0.4)',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease'
                    }}
                  >
                    <Save size={18} /> {editingProductId ? 'Update Saree Specs' : '✨ Publish Saree to Storefront →'}
                  </button>
                </div>
              </form>
            </div>

            {/* 2. Category Inventory Table Card */}
            <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '14px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ fontSize: '1.2rem', color: 'var(--gold-light)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Package size={20} /> Active Products under "{selectedCategoryTab}" ({categoryFilteredProducts.length})
                </h2>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ background: 'rgba(212, 175, 55, 0.05)', color: 'var(--gold-light)' }}>
                      <th style={{ padding: '14px' }}>Image (3:4 Uniform)</th>
                      <th style={{ padding: '14px' }}>Title</th>
                      <th style={{ padding: '14px' }}>Category</th>
                      <th style={{ padding: '14px' }}>Color Swatch</th>
                      <th style={{ padding: '14px' }}>Price</th>
                      <th style={{ padding: '14px' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr><td colSpan={6} style={{ textAlign: 'center', padding: '30px' }}>Loading Supabase live records...</td></tr>
                    ) : categoryFilteredProducts.length === 0 ? (
                      <tr><td colSpan={6} style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>No products in this category yet. Upload a saree above to publish it!</td></tr>
                    ) : (
                      categoryFilteredProducts.map((p, i) => (
                        <tr key={i} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                          <td style={{ padding: '14px' }}>
                            <img src={p.image_url} alt={p.title} style={{ width: '48px', height: '64px', objectFit: 'cover', borderRadius: '6px', border: '1px solid var(--border-gold)' }} />
                          </td>
                          <td style={{ padding: '14px' }}><strong>{p.title}</strong></td>
                          <td style={{ padding: '14px' }}><span className="category-badge" style={{ fontSize: '0.7rem' }}>{p.category_name}</span></td>
                          <td style={{ padding: '14px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: p.color_hex || '#D4AF37', border: '1px solid #fff', display: 'inline-block' }}></span>
                              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{p.color_name || 'Gold'}</span>
                            </div>
                          </td>
                          <td style={{ padding: '14px', color: 'var(--gold-light)', fontWeight: 700 }}>₹{p.price.toLocaleString('en-IN')}</td>
                          <td style={{ padding: '14px' }}>
                            <div style={{ display: 'flex', gap: '12px' }}>
                              <button onClick={() => startEditProduct(p)} style={{ background: 'none', border: 'none', color: 'var(--gold-light)', cursor: 'pointer' }} title="Edit Product Specs">
                                <Edit3 size={18} />
                              </button>
                              <button onClick={() => handleDeleteProduct(p)} style={{ background: 'none', border: 'none', color: '#e74c3c', cursor: 'pointer' }} title="Delete Product & R2 Photos">
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}
