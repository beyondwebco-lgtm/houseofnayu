'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Lock, Mail, User, Sparkles } from 'lucide-react';
import { supabase } from '@/src/supabase';

interface CustomerAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: any) => void;
  showToast?: (title: string, desc?: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
}

export default function CustomerAuthModal({ isOpen, onClose, onLoginSuccess, showToast }: CustomerAuthModalProps) {
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);
    if (error) {
      setErrorMsg(error.message);
    } else if (data?.user) {
      onLoginSuccess(data.user);
      onClose();
      const userName = data.user.user_metadata?.full_name || data.user.email;
      if (showToast) {
        showToast(`✨ Welcome Back, ${userName}!`, 'Access your saved bag, bespoke orders & royal privileges.', 'success');
      }
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    // Dynamic redirect URL for email confirmation (Redirects back to live Vercel site or current origin)
    const redirectUrl = typeof window !== 'undefined' ? `${window.location.origin}` : 'https://houseofnayu.vercel.app';

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          full_name: fullName,
          role: 'customer',
        },
      },
    });

    setLoading(false);

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    if (data?.session) {
      // Direct login (Auto-confirm enabled in Supabase)
      onLoginSuccess(data.user);
      onClose();
      if (showToast) {
        showToast(`🎉 Royal Account Created!`, `Welcome to House of Nayu, ${fullName || email}!`, 'success');
      }
    } else {
      // Email confirmation required in Supabase
      if (showToast) {
        showToast(`📩 Verification Email Sent!`, `Verification link sent to ${email}. Please confirm to complete login.`, 'info');
      }
      setActiveTab('signin');
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100001,
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          width: '440px',
          maxWidth: '95vw',
          background: '#121212',
          border: '1px solid var(--border-gold)',
          borderRadius: '20px',
          padding: '32px 28px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.95)',
          position: 'relative',
          color: 'var(--text-main)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'var(--gold-light)',
            cursor: 'pointer',
            fontSize: '1.2rem',
          }}
        >
          <X size={22} />
        </button>

        {/* Brand Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Image
            src="/images/logo_icon_sharp.png"
            alt="House of Nayu Emblem"
            width={45}
            height={45}
            style={{ filter: 'drop-shadow(0 4px 12px rgba(212, 175, 55, 0.45))', marginBottom: '4px' }}
          />
          <Image
            src="/images/brand_title_sharp.png"
            alt="House of Nayu Crest"
            width={320}
            height={60}
            priority
            style={{
              height: '60px',
              width: '320px',
              maxWidth: '100%',
              objectFit: 'contain',
              filter: 'drop-shadow(0 2px 14px rgba(212, 175, 55, 0.5)) brightness(1.2)',
              marginBottom: '10px',
            }}
          />
          <span className="gold-badge-tag" style={{ display: 'inline-flex', gap: '6px', alignItems: 'center', marginBottom: '8px', fontSize: '0.75rem' }}>
            <Sparkles size={13} /> ROYAL CLUB ACCESS
          </span>
          <h2 style={{ fontFamily: 'var(--font-serif)', color: 'var(--gold-light)', fontSize: '1.7rem', margin: '2px 0' }}>
            {activeTab === 'signin' ? 'Sign In to Account' : 'Join House of Nayu'}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            {activeTab === 'signin' ? 'Access your saved bag, orders & bespoke recommendations.' : 'Create your royal membership for exclusive handloom releases.'}
          </p>
        </div>

        {/* Auth Tabs */}
        <div style={{ display: 'flex', background: 'rgba(0,0,0,0.6)', padding: '4px', borderRadius: '30px', border: '1px solid var(--border-subtle)', marginBottom: '24px' }}>
          <button
            onClick={() => { setActiveTab('signin'); setErrorMsg(''); }}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '26px',
              border: 'none',
              background: activeTab === 'signin' ? 'var(--gold-gradient)' : 'transparent',
              color: activeTab === 'signin' ? '#000' : 'var(--text-muted)',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            Sign In
          </button>
          <button
            onClick={() => { setActiveTab('signup'); setErrorMsg(''); }}
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '26px',
              border: 'none',
              background: activeTab === 'signup' ? 'var(--gold-gradient)' : 'transparent',
              color: activeTab === 'signup' ? '#000' : 'var(--text-muted)',
              fontWeight: 700,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            Create Account
          </button>
        </div>

        {/* Error Alert */}
        {errorMsg && (
          <div style={{ background: 'rgba(231, 76, 60, 0.15)', border: '1px solid #e74c3c', color: '#ff6b6b', padding: '10px 14px', borderRadius: '10px', fontSize: '0.85rem', marginBottom: '18px', textAlign: 'center' }}>
            {errorMsg}
          </div>
        )}

        {/* Sign In Form */}
        {activeTab === 'signin' ? (
          <form onSubmit={handleSignIn} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Email Address</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="customer@houseofnayu.com"
                  style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: '#fff', padding: '12px 14px 12px 40px', borderRadius: '10px', fontSize: '0.9rem', outline: 'none' }}
                />
                <Mail size={18} style={{ position: 'absolute', left: '14px', top: '13px', color: 'var(--gold-light)' }} />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: '#fff', padding: '12px 14px 12px 40px', borderRadius: '10px', fontSize: '0.9rem', outline: 'none' }}
                />
                <Lock size={18} style={{ position: 'absolute', left: '14px', top: '13px', color: 'var(--gold-light)' }} />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-gold"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '14px',
                borderRadius: '30px',
                fontSize: '0.95rem',
                fontWeight: 700,
                marginTop: '10px',
                boxShadow: '0 6px 20px rgba(212, 175, 55, 0.35)',
              }}
            >
              {loading ? 'Authenticating with Supabase...' : 'SIGN IN →'}
            </button>
          </form>
        ) : (
          /* Create Account Form */
          <form onSubmit={handleSignUp} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Full Name</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  placeholder="Royal Customer Name"
                  style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: '#fff', padding: '12px 14px 12px 40px', borderRadius: '10px', fontSize: '0.9rem', outline: 'none' }}
                />
                <User size={18} style={{ position: 'absolute', left: '14px', top: '13px', color: 'var(--gold-light)' }} />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Email Address</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="yourname@domain.com"
                  style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: '#fff', padding: '12px 14px 12px 40px', borderRadius: '10px', fontSize: '0.9rem', outline: 'none' }}
                />
                <Mail size={18} style={{ position: 'absolute', left: '14px', top: '13px', color: 'var(--gold-light)' }} />
              </div>
            </div>

            <div>
              <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>Create Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Min 6 characters"
                  style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-gold)', color: '#fff', padding: '12px 14px 12px 40px', borderRadius: '10px', fontSize: '0.9rem', outline: 'none' }}
                />
                <Lock size={18} style={{ position: 'absolute', left: '14px', top: '13px', color: 'var(--gold-light)' }} />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-gold"
              style={{
                width: '100%',
                justifyContent: 'center',
                padding: '14px',
                borderRadius: '30px',
                fontSize: '0.95rem',
                fontWeight: 700,
                marginTop: '10px',
                boxShadow: '0 6px 20px rgba(212, 175, 55, 0.35)',
              }}
            >
              {loading ? 'Creating Supabase Account...' : 'JOIN ROYAL CLUB →'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
