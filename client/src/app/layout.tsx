import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Fort Verandah — Boutique Residence & Bistro | Galle Fort, Sri Lanka',
    template: '%s | Fort Verandah',
  },
  description:
    'Experience timeless Sri Lankan heritage at Fort Verandah — a luxury boutique residence and bistro nestled in the heart of Galle Fort. Where colonial elegance meets refined modern living.',
  keywords: ['Fort Verandah', 'Galle Fort', 'boutique hotel', 'Sri Lanka', 'bistro', 'luxury residence', 'heritage hotel'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Fort Verandah',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
