import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
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
      <body className={`${inter.variable} antialiased page-bg`}>
        <div className="fixed top-3 right-3 z-50">
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
