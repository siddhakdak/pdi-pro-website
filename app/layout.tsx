import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://carpdiproudaipur.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'PDI PRO Udaipur | New Car Pre-Delivery Inspection Services',
    template: '%s | PDI PRO',
  },
  description:
    'Independent new car PDI in Udaipur, Nathdwara and Chittorgarh. Professional pre-delivery inspection, paint thickness checks, OBD scanning, test drive and a detailed vehicle inspection report before delivery.',
  keywords: [
    'car PDI Udaipur', 'new car inspection Udaipur', 'pre delivery inspection Udaipur',
    'PDI service near me', 'car PDI Nathdwara', 'car PDI Chittorgarh',
    'new car inspection Rajasthan', 'independent car inspection', 'paint thickness test car',
    'car delivery inspection', 'vehicle PDI report', 'used car inspection Udaipur',
    'OBD scan before car delivery', 'car scratch inspection', 'PDI PRO'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'PDI PRO | Get Your New Car Inspected Before Delivery',
    description: 'Independent, detailed new-car pre-delivery inspection across Udaipur and nearby Rajasthan cities.',
    url: siteUrl,
    siteName: 'PDI PRO',
    locale: 'en_IN',
    type: 'website',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AutomotiveBusiness',
    name: 'PDI PRO',
    url: siteUrl,
    image: `${siteUrl}/pdi-pro-logo.png`,
    telephone: '+91-8387967670',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Meera Nagar, Old RTO Road',
      addressLocality: 'Udaipur',
      addressRegion: 'Rajasthan',
      postalCode: '313001',
      addressCountry: 'IN',
    },
    areaServed: ['Udaipur', 'Nathdwara', 'Chittorgarh', 'Rajsamand', 'Debari', 'Mavli', 'Fatehnagar', 'Dungla', 'Kapasan', 'Gogunda', 'Salumbar'],
    priceRange: '₹₹',
    description: 'Independent pre-delivery car inspection and vehicle condition reporting before new-car delivery.',
    serviceType: ['New Car Pre-Delivery Inspection', 'Paint Thickness Inspection', 'OBD Diagnostic Scan', 'Road Test', 'Used Car Inspection'],
  };
  return (
    <html lang="en-IN">
     <head>
  <meta
    name="google-site-verification"
    content="WkKLCdqPyqtmQftt7op5TrwintNtv7OuvoSWEcCGl3M"
  />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
</head>
      <body>{children}</body>
    </html>
  );
}