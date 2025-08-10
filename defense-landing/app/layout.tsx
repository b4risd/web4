import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Savunma Sanayi Şirketleri - Türkiye & Global | SAVSA.TR",
  description:
    "SAVSA.TR: Türkiye'nin ve dünyanın önde gelen savunma sanayi şirketlerini keşfedin. Teknoloji, inovasyon ve milli güvenlik odaklı içerikler.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Savunma Sanayi Şirketleri - Türkiye & Global | SAVSA.TR",
    description:
      "Türkiye ve global savunma sanayi şirketleri, programlar ve raporlar. SAVSA.TR ile güncel bilgileri keşfedin.",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Savunma Sanayi Şirketleri - Türkiye & Global | SAVSA.TR",
    description:
      "Savunma sanayi şirketleri ve ekosistemi hakkında güncel bilgiler için SAVSA.TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} antialiased page-bg`}>
        {children}
      </body>
    </html>
  );
}
