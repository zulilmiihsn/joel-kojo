import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({ 
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joel Kojo - The GOAT | Character Showcase",
  description: "A tribute website showcasing Joel Kojo - The GOAT character. Fanmade by Zul Ilmi Ihsan. Experience the interactive character showcase with floating animations and modern design.",
  keywords: ["Joel Kojo", "The GOAT", "character showcase", "tribute", "interactive", "animation"],
  authors: [{ name: "Zul Ilmi Ihsan" }],
  creator: "Zul Ilmi Ihsan",
  openGraph: {
    title: "Joel Kojo - The GOAT",
    description: "A tribute website showcasing Joel Kojo - The GOAT character",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joel Kojo - The GOAT",
    description: "A tribute website showcasing Joel Kojo - The GOAT character",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={garamond.className}>{children}</body>
    </html>
  );
}
