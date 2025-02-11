import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Wilfred Manyara",
  description: "Minimal Single Page Portfolio",
  openGraph: {
    title: "Wilfred Manyara - Portfolio",
    description: "A minimal single-page portfolio showcasing my work.",
    url: "https://www.wilfredmanyara.com",
    siteName: "Wilfred Manyara",
    images: [
      {
        url: "/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wilfred Manyara - Portfolio",
    description: "Minimal Single Page Portfolio",
    images: ["/hero-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-stone-200 text-stone-900" ${archivo.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
