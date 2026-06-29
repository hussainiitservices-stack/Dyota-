import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { seoKeywords } from "./lib/content";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Dyota Engineered Solutions | Power Quality, Harmonics & Electrical Engineering UAE",
    template: "%s | Dyota Engineered Solutions",
  },
  description:
    "Harmonics and power quality audits, active harmonic filters, capacitor banks, Delta T HVAC control, ETAP simulation, thermography on LV switchgear, and electrical engineering consultancy in Dubai, UAE.",
  keywords: [...seoKeywords],
  openGraph: {
    title: "Dyota Engineered Solutions — Power Quality & Electrical Engineering UAE",
    description:
      "Harmonics and power quality audits, capacitor banks, active harmonic filters, Delta T HVAC control, and ETAP simulation services in the UAE.",
    url: "https://www.dyotaes.com",
    siteName: "Dyota Engineered Solutions",
    locale: "en_AE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
