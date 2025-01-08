import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: "Hadiya Family Childcare | Licensed Daycare in Kent, WA",
    template: "%s | Hadiya Family Childcare"
  },
  description: "Welcome to Hadiya Family Childcare, a trusted licensed daycare center in Kent, WA. We provide quality childcare, early education, and cultural activities in a nurturing environment.",
  keywords: [
    "childcare Kent WA",
    "daycare Kent",
    "licensed childcare",
    "family daycare",
    "early education Kent",
    "child development",
    "cultural learning",
    "Hadiya Family Childcare",
    "preschool Kent",
    "childcare programs",
    "daycare enrollment Kent",
    "cultural childcare"
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? siteConfig.url),
  authors: [
    {
      name: "Hadiya Family Childcare",
      url: "https://hadiyachildcare.com",
    }
  ],
  creator: "Hadiya Family Childcare",
  publisher: "Hadiya Family Childcare",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Hadiya Family Childcare | Licensed Daycare in Kent, WA",
    description: "Experience quality childcare at Hadiya Family Childcare in Kent, WA. Our licensed facility offers early childhood education, cultural activities, and a nurturing environment for children.",
    url: "https://hadiyachildcare.com",
    siteName: "Hadiya Family Childcare",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://hadiyachildcare.com/og-image.jpg",
        width: 500,
        height: 500,
        alt: "Hadiya Family Childcare | Licensed Daycare in Kent, WA",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hadiya Family Childcare - Kent, WA Daycare Center",
    description: "Join our family at Hadiya Family Childcare in Kent, WA. Licensed childcare services with focus on early education, cultural enrichment, and creating a nurturing space for every child.",
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
