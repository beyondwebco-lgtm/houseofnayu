'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RefreshCw, PlusCircle, Package, Trash2, Save } from 'lucide-react';
import { supabase } from '@/src/supabase';
import { PRODUCTS_DATA } from '@/src/data';

export default function AdminPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [form, setForm] = useState({
    title: '',
    category: 'Cotton Sarees',
    price: '',
    origPrice: '',
    fabric: '',
    craft: '',
    imageUrl: '',
    description: '',
  });

  const loadInventory = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false });
    if (error || !data || data.length === 0) {
      setProducts(PRODUCTS_DATA.map(p => ({
        id: p.id,
        title: p.name,
        category: p.category,
        price: p.price,
        fabric: p.fabric,
        is_published: true,
        image_url: p.images[0]?.url || '/images/logo_icon_sharp.png'
      })));
    } else {
      setProducts(data.map((p: any) => ({
        id: p.id,
        title: p.title,
        category: p.category_id || 'Cotton Sarees',
        price: p.price,
        fabric: p.fabric || 'Pure Handloom',
        is_published: p.is_published,
        image_url: p.image_url || '/images/logo_icon_sharp.png'
      })));
    }
    setLoading(false);
  };

  useEffect(() => {
    loadInventory();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = {
      title: form.title,
      slug: form.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      price: parseFloat(form.price),
      original_price: parseFloat(form.origPrice) || parseFloat(form.price),
      fabric: form.fabric,
      craft: form.craft,
      description: form.description,
      available_sizes: ['XS', 'S', 'M', 'L', 'XL'],
      is_published: true,
    };

    const { error } = await supabase.from('products').insert([newProduct]);
    if (error) {
      alert(`Supabase Notification: ${error.message}`);
    } else {
      alert(`Success! "${form.title}" published live to Supabase!`);
    }

    setForm({ title: '', category: 'Cotton Sarees', price: '', origPrice: '', fabric: '', craft: '', imageUrl: '', description: '' });
    loadInventory();
  };

  return (
    <div className="next-admin-root" style={{ background: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-main)' }}>
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
            ● SUPABASE LIVE (NEXT.JS)
          </span>
        </div>
      </nav>

      {/* Admin Content */}
      <div style={{ padding: '110px 4% 60px 4%', maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid var(--border-gold)' }}>
          <div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--gold-light)' }}>Next.js Admin Control Center</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>Manage Saree collections, prices, fabric specs, and Cloudflare R2 media URLs.</p>
          </div>
          <button className="btn-gold" onClick={loadInventory} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <RefreshCw size={16} /> Sync Supabase DB
          </button>
        </div>

        {/* Add Saree Form */}
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '24px', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '1.2rem', color: 'var(--gold-light)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <PlusCircle size={20} /> Add New Bespoke Saree
          </h2>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Saree Title *</label>
                <input type="text" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '6px' }} />
              </div>
              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Category *</label>
                <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '6px' }}>
                  <option value="Cotton Sarees">Cotton Sarees</option>
                  <option value="Silk Sarees">Silk Sarees</option>
                  <option value="Chiffon Sarees">Chiffon Sarees</option>
                  <option value="Kota Sarees">Kota Sarees</option>
                  <option value="Sico Sarees">Sico Sarees</option>
                </select>
              </div>
              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Sale Price (₹) *</label>
                <input type="number" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} required style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '6px' }} />
              </div>
              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Original MRP (₹)</label>
                <input type="number" value={form.origPrice} onChange={e => setForm({ ...form, origPrice: e.target.value })} style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '6px' }} />
              </div>
              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Fabric *</label>
                <input type="text" value={form.fabric} onChange={e => setForm({ ...form, fabric: e.target.value })} required style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '6px' }} />
              </div>
              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Craft *</label>
                <input type="text" value={form.craft} onChange={e => setForm({ ...form, craft: e.target.value })} required style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '6px' }} />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Cloudflare R2 Image URL *</label>
                <input type="text" value={form.imageUrl} onChange={e => setForm({ ...form, imageUrl: e.target.value })} required style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '6px' }} />
              </div>
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Description</label>
                <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} rows={3} style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: 'var(--text-main)', padding: '10px', borderRadius: '6px' }} />
              </div>
            </div>
            <div style={{ marginTop: '20px', textAlign: 'right' }}>
              <button type="submit" className="btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Save size={16} /> Publish Saree to Supabase
              </button>
            </div>
          </form>
        </div>

        {/* Products Table */}
        <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '12px', padding: '24px' }}>
          <h2 style={{ fontSize: '1.2rem', color: 'var(--gold-light)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Package size={20} /> Active Catalog Products ({products.length})
          </h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'rgba(212, 175, 55, 0.05)', color: 'var(--gold-light)' }}>
                <th style={{ padding: '12px' }}>Image</th>
                <th style={{ padding: '12px' }}>Title</th>
                <th style={{ padding: '12px' }}>Category</th>
                <th style={{ padding: '12px' }}>Price</th>
                <th style={{ padding: '12px' }}>Fabric</th>
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
                      <img src={p.image_url} alt={p.title} style={{ width: '40px', height: '50px', objectFit: 'cover', borderRadius: '4px', border: '1px solid var(--border-gold)' }} />
                    </td>
                    <td style={{ padding: '12px' }}><strong>{p.title}</strong></td>
                    <td style={{ padding: '12px' }}><span className="category-badge" style={{ fontSize: '0.7rem' }}>{p.category}</span></td>
                    <td style={{ padding: '12px', color: 'var(--gold-light)', fontWeight: 600 }}>₹{p.price.toLocaleString('en-IN')}</td>
                    <td style={{ padding: '12px', color: 'var(--text-muted)' }}>{p.fabric}</td>
                    <td style={{ padding: '12px' }}>
                      <button style={{ background: 'none', border: 'none', color: '#e74c3c', cursor: 'pointer' }}><Trash2 size={16} /></button>
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
