import type { Metadata } from 'next';
import '@/src/style.css';

export const metadata: Metadata = {
  title: 'HOUSE OF NAYU — Luxury Handloom Sarees',
  description: 'Born From Bonds — Where Era Meets Aura. Custom sarees woven by India’s finest master artisans.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
