import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Image Generator",
  description: "Generate unique images using AI",
  keywords: "AI, image generation, artificial intelligence, Genova AI, digital art",
  metadataBase: new URL('https://genovaai.pages.dev'),
  openGraph: {
    title: 'Genova AI - Advanced AI Image Generation',
    description: 'Create stunning AI-generated images with Genova AI. Transform your ideas into beautiful artworks using cutting-edge artificial intelligence.',
    url: 'https://genovaai.pages.dev',
    siteName: 'Genova AI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genova AI - Advanced AI Image Generation',
    description: 'Create stunning AI-generated images with Genova AI. Transform your ideas into beautiful artworks using cutting-edge artificial intelligence.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <GoogleAnalytics />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-gray-900`}>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
