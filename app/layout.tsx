import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RSV Schwalbe Ellmendingen",
  description: "Der Radsportverein in Baden - RSV Schwalbe Ellmendingen e. V.",
  openGraph: {
    title: "RSV Schwalbe Ellmendingen",
    description: "Der Radsportverein in Baden",
    url: "https://schwalbewebseite.pages.dev",
    siteName: "RSV Ellmendingen",
    images: [
      {
        url: "https://schwalbewebseite.pages.dev/images/Amateure1.webp",
        width: 1200,
        height: 630,
        alt: "RSV Ellmendingen Team",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RSV Schwalbe Ellmendingen",
    description: "Der Radsportverein in Baden",
    images: ["https://schwalbewebseite.pages.dev/images/Amateure1.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <div className="layout-wrapper">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
