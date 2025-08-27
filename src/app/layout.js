import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import TopHeader from "@/Components/TopHeader";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import WhatsappIcon from "@/Components/whatsappIcon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eazy Tax | Best CA Services in Delhi",
  description: "Get expert Chartered Accountant services in Delhi: Company Registration, GST Registration & Return Filing, Bookkeeping, MSME, Startup India, Society & Trust Registration. Fast, reliable, and affordable legal & tax solutions for your business.",
  keywords: [
    "CA in Delhi",
    "Chartered Accountant",
    "Company Registration",
    "GST Registration",
    "GST Return Filing",
    "Bookkeeping",
    "MSME Registration",
    "Startup India Registration",
    "Society Registration",
    "Trust Registration",
    "Import Export Code",
    "Tax Consultant",
    "Business Compliance"
  ],
  verification: {
    google: "LBQOEuI9wHmDQrwkzO0E6VvR48UwqmCmkrbGUTa9fPE", // ← Yeh line important hai
  },  
  openGraph: {
    title: "Best CA Services in Delhi | Company Registration, GST, Bookkeeping & More",
    description: "Expert CA services in Delhi for startups, SMEs, and businesses. Fast company registration, GST, bookkeeping, and more.",
    url: "https://yourdomain.com/",
    siteName: "Eazy Tax Delhi",
    images: [
      {
        url: "/banner1.jpg",
        width: 1200,
        height: 630,
        alt: "Best CA Services in Delhi"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Best CA Services in Delhi | Company Registration, GST, Bookkeeping & More",
    description: "Expert CA services in Delhi for startups, SMEs, and businesses. Fast company registration, GST, bookkeeping, and more.",
    site: "@eazytaxdelhi",
    images: [
      "/banner1.jpg"
    ]
  },
  alternates: {
    canonical: "https://eazy-tax.in/"
  },
  metadataBase: new URL("https://eazy-tax.in/"),
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopHeader />
        <Navbar />
        {children}
        <Footer/>
        <WhatsappIcon />
      </body>
    </html>
  );
}
