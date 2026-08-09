'use client';

import { useEffect } from 'react';
import { Sparkles, AlertCircle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  title: string;
  description?: string;
}

interface LuxuryToastProps {
  toast: ToastMessage | null;
  onClose: () => void;
}

export default function LuxuryToast({ toast, onClose }: LuxuryToastProps) {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);

    return () => clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 200000,
        minWidth: '320px',
        maxWidth: '90vw',
        background: '#121217',
        border: '1px solid var(--border-gold)',
        borderRadius: '16px',
        padding: '16px 20px',
        boxShadow: '0 15px 45px rgba(0, 0, 0, 0.9), 0 0 20px rgba(212, 175, 55, 0.25)',
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        color: 'var(--text-main)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        animation: 'toastSlideDown 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }}
    >
      {/* Toast Icon */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(212, 175, 55, 0.12)', border: '1px solid var(--border-gold)', borderRadius: '50%', padding: '10px', color: 'var(--gold-light)', flexShrink: 0 }}>
        {toast.type === 'success' && <Sparkles size={20} />}
        {toast.type === 'info' && <Info size={20} />}
        {toast.type === 'warning' && <AlertCircle size={20} />}
        {toast.type === 'error' && <AlertCircle size={20} style={{ color: '#ff6b6b' }} />}
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <h4 style={{ fontFamily: 'var(--font-serif)', color: 'var(--gold-light)', fontSize: '0.95rem', margin: 0, letterSpacing: '0.04em' }}>
          {toast.title}
        </h4>
        {toast.description && (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', margin: '3px 0 0 0', lineHeight: 1.4 }}>
            {toast.description}
          </p>
        )}
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--text-muted)',
          cursor: 'pointer',
          padding: '4px',
          display: 'flex',
          alignItems: 'center',
          transition: 'color 0.2s ease',
        }}
      >
        <X size={16} />
      </button>

      <style jsx global>{`
        @keyframes toastSlideDown {
          from {
            opacity: 0;
            transform: translate(-50%, -30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
