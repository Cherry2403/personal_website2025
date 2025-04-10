import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Diep's Portfolio | Web Developer & Designer",
  description: "Professional portfolio showcasing web development and design projects by Diep (Cherry)",
  metadataBase: new URL('https://cherry.id.vn'),
  
  // OpenGraph metadata (for Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Diep's Portfolio | Web Developer & Designer",
    description: "Web development and design portfolio showcasing projects and skills",
    url: 'https://cherry.id.vn',
    type: 'website',
    images: [
      {
        url: '/skills/4.1.webp',
        width: 1200,
        height: 630,
        alt: "Diep's Portfolio - Web Developer & Designer",
        type: 'image/webp',
      },
    ],
    siteName: "Diep's Portfolio",
    locale: 'en_US',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: "Diep's Portfolio",
    description: "Web Developer & Designer Portfolio",
    images: [
      {
        url: '/skills/4.1.webp',
        width: 1200,
        height: 630,
        alt: "Diep's Portfolio",
      }
    ],
    creator: '@YourTwitterHandle', // Add your handle if applicable
  },
  
  // Favicon and icons
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  
  // Additional SEO tags
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
  
  // Canonical URL
  alternates: {
    canonical: 'https://cherry.id.vn',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        {children}
      </body>
    </html>
  );
}
