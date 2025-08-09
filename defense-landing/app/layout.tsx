import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Aegis Defense | Modern Savunma Teknolojileri",
  description:
    "Aegis Defense: Komuta-kontrol, ISR, siber güvenlik ve elektronik harp çözümleri ile savunma sanayinin geleceğini şekillendirir.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Aegis Defense | Modern Savunma Teknolojileri",
    description:
      "Komuta-kontrol, ISR, siber güvenlik ve elektronik harp çözümleri ile savunma sanayinin geleceğini şekillendirir.",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aegis Defense | Modern Savunma Teknolojileri",
    description:
      "Komuta-kontrol, ISR, siber güvenlik ve elektronik harp çözümleri ile savunma sanayinin geleceğini şekillendirir.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
