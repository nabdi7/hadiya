import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: "Hadiya Home Childcare | In Kent, WA provides full and part-time care for Infants, Toddlers, and Preschool students.",
    template: "%s | Hadiya Home Childcare"
  },
  description: "Welcome to Hadiya Home Childcare, a trusted licensed daycare center in Kent, WA. We provide quality childcare, early education, and cultural activities in a nurturing environment.",
  keywords: [
    "childcare Kent WA",
    "daycare Kent",
    "licensed childcare",
    "family daycare",
    "early education Kent",
    "child development",
    "cultural learning",
    "Hadiya Home Childcare",
    "preschool Kent",
    "childcare programs",
    "daycare enrollment Kent",
    "cultural childcare"
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? siteConfig.url),
  authors: [
    {
      name: "Hadiya Home Childcare",
      url: "https://hadiyachildcare.com",
    }
  ],
  creator: "Hadiya Home Childcare",
  publisher: "Hadiya Home Childcare",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Hadiya Home Childcare | In Kent, WA provides full and part-time care for Infants, Toddlers, and Preschool students.",
    description: "Experience quality childcare at Hadiya Home Childcare in Kent, WA. Our licensed facility offers early childhood education, cultural activities, and a nurturing environment for children.",
    url: "https://hadiyachildcare.com",
    siteName: "Hadiya Home Childcare",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://hadiyachildcare.com/og-image.jpg",
        width: 500,
        height: 500,
        alt: "Hadiya Home Childcare | In Kent, WA provides full and part-time care for Infants, Toddlers, and Preschool students.",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hadiya Home Childcare - Kent, WA Daycare Center",
    description: "Join our family at Hadiya Home Childcare in Kent, WA. Licensed childcare services with focus on early education, cultural enrichment, and creating a nurturing space for every child.",
    images: ["https://najahfamilychildcare.com/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  manifest: `/site.webmanifest`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
