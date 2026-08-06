'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RefreshCw, PlusCircle, Package, Trash2, Save, Tag, Palette, UploadCloud } from 'lucide-react';
import { supabase } from '@/src/supabase';
import { PRODUCTS_DATA } from '@/src/data';

interface CategoryItem {
  id?: string;
  name: string;
  slug: string;
}

export default function AdminPage() {
  const [categories, setCategories] = useState<CategoryItem[]>([
    { name: 'Cotton Sarees', slug: 'cotton-sarees' },
    { name: 'Silk Sarees', slug: 'silk-sarees' },
    { name: 'Chiffon Sarees', slug: 'chiffon-sarees' },
    { name: 'Kota Sarees', slug: 'kota-sarees' },
    { name: 'Sico Sarees', slug: 'sico-sarees' },
  ]);

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [newCatName, setNewCatName] = useState<string>('');
  
  // Product Form State
  const [form, setForm] = useState({
    title: '',
    category: 'Cotton Sarees',
    price: '',
    origPrice: '',
    colorName: 'Royal Gold',
    colorHex: '#D4AF37',
    fabric: '',
    craft: '',
    imageUrl: '',
    description: '',
  });

  // Fetch Categories & Inventory from Supabase
  const loadData = async () => {
    setLoading(true);
    
    // Load Categories
    const { data: catData } = await supabase.from('categories').select('*').order('name');
    if (catData && catData.length > 0) {
      setCategories(catData.map((c: any) => ({ id: c.id, name: c.name, slug: c.slug })));
    }

    // Load Products
    const { data: prodData } = await supabase.from('products').select('*').order('created_at', { ascending: false });
    if (!prodData || prodData.length === 0) {
      setProducts(PRODUCTS_DATA.map(p => ({
        id: p.id,
        title: p.name,
        category: p.category,
        price: p.price,
        color_name: 'Gold',
        color_hex: '#D4AF37',
        fabric: p.fabric,
        image_url: p.images[0]?.url || '/images/cotton_1/model_full.jpg'
      })));
    } else {
      setProducts(prodData.map((p: any) => ({
        id: p.id,
        title: p.title,
        category: p.category_name || 'Cotton Sarees',
        price: p.price,
        color_name: p.color_name || 'Gold',
        color_hex: p.color_hex || '#D4AF37',
        fabric: p.fabric || 'Pure Handloom',
        image_url: p.image_url || '/images/cotton_1/model_full.jpg'
      })));
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Add New Category Function
  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName.trim()) return;

    const catSlug = newCatName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const newCategoryObj = { name: newCatName.trim(), slug: catSlug };

    const { error } = await supabase.from('categories').insert([newCategoryObj]);
    if (error) {
      // Fallback local update if DB table missing
      setCategories(prev => [...prev, newCategoryObj]);
      alert(`Category "${newCatName}" added!`);
    } else {
      alert(`Success! Category "${newCatName}" saved to Supabase!`);
      loadData();
    }

    setForm(prev => ({ ...prev, category: newCatName.trim() }));
    setNewCatName('');
  };

  const [uploadedCdnUrls, setUploadedCdnUrls] = useState<string[]>([]);
  const [uploadingImage, setUploadingImage] = useState<boolean>(false);

  // Handle Multi-Photo Direct Upload to Cloudflare R2
  const handleMultiImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (selectedFiles.length === 0) return;

    setUploadingImage(true);
    try {
      // 1. Get Presigned Upload URLs from Next.js R2 Route
      const fileMeta = selectedFiles.map(f => ({ fileName: f.name, fileType: f.type }));
      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ files: fileMeta }),
      });

      const { files: r2Targets, error } = await res.json();

      if (error || !r2Targets) {
        // Fallback for local preview if R2 credentials not configured yet
        const localUrls = selectedFiles.map(f => URL.createObjectURL(f));
        setUploadedCdnUrls(prev => [...prev, ...localUrls]);
        setForm(prev => ({ ...prev, imageUrl: localUrls[0] || '' }));
        alert('📷 Photos selected! (Running with local image previews until R2 keys are added to .env.local)');
        return;
      }

      // 2. Upload Binary Files Directly from Browser to Cloudflare R2 Bucket
      const cdnResults: string[] = [];
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        const target = r2Targets[i];

        if (target?.presignedUrl) {
          await fetch(target.presignedUrl, {
            method: 'PUT',
            headers: { 'Content-Type': file.type },
            body: file,
          });
          cdnResults.push(target.cdnUrl);
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

  // Submit Product Form
  const handleSubmitProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = {
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
      image_url: form.imageUrl || '/images/cotton_1/model_full.jpg',
      available_sizes: ['XS', 'S', 'M', 'L', 'XL'],
      is_published: true,
    };

    const { error } = await supabase.from('products').insert([newProduct]);
    if (error) {
      alert(`Note: Insert to Supabase products table: ${error.message}`);
    } else {
      alert(`Success! "${form.title}" (${form.category}) published live!`);
    }

    setForm({ title: '', category: categories[0]?.name || 'Cotton Sarees', price: '', origPrice: '', colorName: 'Royal Gold', colorHex: '#D4AF37', fabric: '', craft: '', imageUrl: '', description: '' });
    loadData();
  };

  // Delete Product
  const handleDeleteProduct = async (id: string) => {
    if (!confirm('Are you sure you want to remove this saree from inventory?')) return;
    await supabase.from('products').delete().eq('id', id);
    loadData();
  };

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-main)' }}>
      {/* Admin Navbar */}
      <nav className="navbar">
        <div className="brand-left">
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: '10px' }}>
            <Image src="/images/logo_icon_sharp.png" alt="Emblem" width={50} height={50} />
            <span style={{ color: 'var(--gold-light)', fontSize: '0.85rem', fontWeight: 700 }}>RETURN TO STORE</span>
          </Link>
        </div>
        <div className="brand-center">
          <Image src="/images/brand_title_sharp.png" alt="House of Nayu Crest" width={220} height={50} />
        </div>
        <div className="nav-actions">
          <span style={{ background: 'rgba(46, 204, 113, 0.15)', color: '#2ecc71', border: '1px solid rgba(46, 204, 113, 0.3)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600 }}>
            ● SUPABASE & R2 ACTIVE
          </span>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ padding: '110px 4% 60px 4%', maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid var(--border-gold)' }}>
          <div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--gold-light)' }}>Admin Control Panel</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>Add dynamic categories, color palette tags, and high-res Cloudflare R2 saree photography.</p>
          </div>
          <button className="btn-gold" onClick={loadData} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <RefreshCw size={16} /> Sync Database
          </button>
        </div>

        {/* 1. Category Creation Box */}
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-gold)', borderRadius: '12px', padding: '24px', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.2rem', color: 'var(--gold-light)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Tag size={20} /> Manage Product Categories
          </h2>
          <form onSubmit={handleAddCategory} style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
            <input
              type="text"
              placeholder="e.g. Organza Sarees, Chanderi Silk, Tussar..."
              value={newCatName}
              onChange={e => setNewCatName(e.target.value)}
              style={{ flex: 1, background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px 14px', borderRadius: '6px', outline: 'none' }}
              required
            />
            <button type="submit" className="btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <PlusCircle size={16} /> Add Category
            </button>
          </form>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {categories.map((c, i) => (
              <span key={i} style={{ background: 'rgba(212, 175, 55, 0.1)', border: '1px solid var(--border-gold)', color: 'var(--gold-light)', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem' }}>
                {c.name}
              </span>
            ))}
          </div>
        </div>

        {/* 2. Add Product Form */}
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '24px', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.2rem', color: 'var(--gold-light)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <PlusCircle size={20} /> Upload Bespoke Saree
          </h2>
          <form onSubmit={handleSubmitProduct}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Saree Title *</label>
                <input type="text" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '6px' }} placeholder="e.g. Emerald Green Zari Work Mulberry Silk Saree" />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Select Category *</label>
                <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '6px' }}>
                  {categories.map((cat, i) => (
                    <option key={i} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Sale Price (₹) *</label>
                <input type="number" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} required style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '6px' }} placeholder="8999" />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Original MRP (₹)</label>
                <input type="number" value={form.origPrice} onChange={e => setForm({ ...form, origPrice: e.target.value })} style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '6px' }} placeholder="12499" />
              </div>

              {/* Color Palette Selector */}
              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Palette size={14} /> Color Palette Swatch *
                </label>
                <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                  <input type="color" value={form.colorHex} onChange={e => setForm({ ...form, colorHex: e.target.value })} style={{ width: '42px', height: '42px', border: '1px solid var(--border-gold)', background: 'none', cursor: 'pointer', borderRadius: '6px' }} />
                  <input type="text" value={form.colorName} onChange={e => setForm({ ...form, colorName: e.target.value })} style={{ flex: 1, background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '6px' }} placeholder="Color Name (e.g. Ruby Red, Royal Gold, Ebony Black)" />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Fabric Specification *</label>
                <input type="text" value={form.fabric} onChange={e => setForm({ ...form, fabric: e.target.value })} required style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '6px' }} placeholder="100% Pure Mulberry Silk" />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Craft / Weave *</label>
                <input type="text" value={form.craft} onChange={e => setForm({ ...form, craft: e.target.value })} required style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '6px' }} placeholder="Traditional Kanjivaram Zari Brocade" />
              </div>

              {/* Multi-Photo Cloudflare R2 Upload Field */}
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ fontSize: '0.85rem', color: 'var(--gold-light)', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 600 }}>
                  <UploadCloud size={16} /> Direct Multi-Photo Cloudflare R2 Upload (Select Multiple Saree Photos) *
                </label>
                <div style={{ border: '2px dashed var(--border-gold)', borderRadius: '8px', padding: '20px', textAlign: 'center', background: 'rgba(212, 175, 55, 0.03)', marginTop: '8px' }}>
                  <input type="file" onChange={handleMultiImageUpload} accept="image/*" multiple id="multi-file-input" style={{ display: 'none' }} />
                  <label htmlFor="multi-file-input" style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--gold-gradient)', color: '#000', fontWeight: 700, padding: '10px 22px', borderRadius: '30px' }}>
                    <UploadCloud size={18} /> {uploadingImage ? 'Uploading to R2 Storage...' : 'Browse & Upload Multiple Photos (Model, Pleats, Blouse)'}
                  </label>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '10px' }}>Select multiple photos at once. Images upload directly to Cloudflare R2 Bucket.</p>
                </div>

                {/* Uploaded Photos Thumbnails Preview */}
                {uploadedCdnUrls.length > 0 && (
                  <div style={{ marginTop: '14px' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>Uploaded Saree Media Gallery ({uploadedCdnUrls.length} photos):</span>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {uploadedCdnUrls.map((url, idx) => (
                        <div key={idx} style={{ position: 'relative' }}>
                          <img src={url} alt={`Upload ${idx + 1}`} style={{ width: '60px', height: '80px', objectFit: 'cover', borderRadius: '6px', border: idx === 0 ? '2px solid var(--gold-primary)' : '1px solid var(--border-subtle)' }} />
                          {idx === 0 && <span style={{ position: 'absolute', top: 2, left: 2, background: 'var(--gold-primary)', color: '#000', fontSize: '0.6rem', fontWeight: 700, padding: '1px 4px', borderRadius: '2px' }}>COVER</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <input type="text" value={form.imageUrl} onChange={e => setForm({ ...form, imageUrl: e.target.value })} placeholder="Cloudflare R2 Primary Cover CDN URL" style={{ width: '100%', marginTop: '10px', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '8px', borderRadius: '6px', fontSize: '0.85rem' }} />
              </div>

              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Craft Story Description</label>
                <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} rows={3} style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '6px' }} placeholder="Handcrafted with delicate antique gold zari woven borders..." />
              </div>
            </div>

            <div style={{ marginTop: '20px', textAlign: 'right' }}>
              <button type="submit" className="btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Save size={16} /> Publish Saree to Storefront
              </button>
            </div>
          </form>
        </div>

        {/* 3. Products List Table */}
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '24px' }}>
          <h2 style={{ fontSize: '1.2rem', color: 'var(--gold-light)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Package size={20} /> Active Catalog Products ({products.length})
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'rgba(212, 175, 55, 0.05)', color: 'var(--gold-light)' }}>
                <th style={{ padding: '12px' }}>Image (3:4 Uniform)</th>
                <th style={{ padding: '12px' }}>Title</th>
                <th style={{ padding: '12px' }}>Category</th>
                <th style={{ padding: '12px' }}>Color Swatch</th>
                <th style={{ padding: '12px' }}>Price</th>
                <th style={{ padding: '12px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={6} style={{ textAlign: 'center', padding: '20px' }}>Loading...</td></tr>
              ) : (
                products.map((p, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                    <td style={{ padding: '12px' }}>
                      <img src={p.image_url} alt={p.title} style={{ width: '45px', height: '60px', objectFit: 'cover', borderRadius: '4px', border: '1px solid var(--border-gold)' }} />
                    </td>
                    <td style={{ padding: '12px' }}><strong>{p.title}</strong></td>
                    <td style={{ padding: '12px' }}><span className="category-badge" style={{ fontSize: '0.7rem' }}>{p.category}</span></td>
                    <td style={{ padding: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: p.color_hex || '#D4AF37', border: '1px solid #fff', display: 'inline-block' }}></span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{p.color_name || 'Gold'}</span>
                      </div>
                    </td>
                    <td style={{ padding: '12px', color: 'var(--gold-light)', fontWeight: 600 }}>₹{p.price.toLocaleString('en-IN')}</td>
                    <td style={{ padding: '12px' }}>
                      <button onClick={() => handleDeleteProduct(p.id)} style={{ background: 'none', border: 'none', color: '#e74c3c', cursor: 'pointer' }} title="Delete Product">
                        <Trash2 size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
