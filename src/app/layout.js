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
  title: "Diep's personal website",
  description: "This is Diep's amazing info site",
  openGraph: {
    images: [
      {
        url: '/skills/4.jpeg', 
        width: 1200,  
        height: 630,
        alt: 'Description of the image',
      },
    ],
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
