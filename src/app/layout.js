import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Intro from "@/components/1-intro/Intro";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cherry's portfolio",
  description: "meomeomeeomeo chipichapa",
  metadataBase: new URL('https://cherry.id.vn'),
  openGraph: {
    title: "Diep's Portfolio",
    description: "Web Developer & Designer Portfolio",
    type: 'website',
    images: [
      {
        url: '/skills/4.jpeg',
        width: 1200,
        height: 630,
        alt: "Diep's Portfolio",
      },
    ],
    siteName: "Diep's Portfolio",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Diep's Portfolio",
    description: "Web Developer & Designer Portfolio",
    images: ['/skills/4.jpeg'],
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
