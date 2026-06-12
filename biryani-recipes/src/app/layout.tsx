import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const mono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://biryanirecipes.com"),
  title: {
    default: "Biryani Recipes — The World's Most Comprehensive Biryani Archive",
    template: "%s · Biryani Recipes",
  },
  description:
    "Recipes, history, and the global geography of biryani. From the Nizam's kacchi handi to Cape Malay breyani — sourced, tested, and obsessively documented.",
  openGraph: {
    type: "website",
    title: "Biryani Recipes",
    description:
      "The world's most comprehensive biryani archive — recipes, history, and the dishes' global migration routes.",
    url: "https://biryanirecipes.com",
    siteName: "Biryani Recipes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biryani Recipes",
    description:
      "The world's most comprehensive biryani archive — recipes, history, and the global geography of biryani.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-night text-ivory">
        <Cursor />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
