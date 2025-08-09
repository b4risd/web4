import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FinTech - The Future of Finance",
  description: "Experience seamless banking, smart investments, and secure transactions all in one revolutionary platform designed for the modern world.",
  keywords: ["fintech", "banking", "finance", "investment", "digital wallet", "cryptocurrency", "financial services"],
  authors: [{ name: "FinTech Team" }],
  openGraph: {
    title: "FinTech - The Future of Finance",
    description: "Experience seamless banking, smart investments, and secure transactions all in one revolutionary platform designed for the modern world.",
    url: "https://fintech.example.com",
    siteName: "FinTech",
    images: [
      {
        url: "https://fintech.example.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FinTech Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FinTech - The Future of Finance",
    description: "Experience seamless banking, smart investments, and secure transactions all in one revolutionary platform designed for the modern world.",
    images: ["https://fintech.example.com/twitter-image.jpg"],
  },
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
