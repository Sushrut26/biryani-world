import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    "Authentic biryani recipes, history, and the global geography of biryani. Hyderabadi, Lucknowi, Kolkata, Sindhi, Thalassery, Mandi, Kabsa — 14 biryanis sourced and obsessively documented. Also spelled biriyani, briyani, biriani.",
  keywords: [
    // Primary terms
    "biryani recipe", "biryani recipes", "how to make biryani",
    "biriyani recipe", "biriyani recipes",
    "briyani recipe", "briyani recipes",
    "biriani recipe",
    // Misspellings the user called out
    "biryani recepi", "biriyani recepi", "briyani recepi",
    "biryani recipie", "biryani reciepe", "biryani recipy",
    // Variety-specific high-traffic terms
    "hyderabadi biryani recipe", "hyderabadi dum biryani",
    "lucknowi biryani recipe", "awadhi biryani",
    "kolkata biryani recipe", "kolkata mutton biryani",
    "sindhi biryani recipe",
    "thalassery biryani recipe", "thalassery biriyani",
    "ambur biryani recipe", "ambur briyani",
    "mandi recipe", "yemeni mandi",
    "kabsa recipe", "saudi kabsa",
    "bangladeshi kacchi biryani", "cape malay breyani",
    // General intent
    "best biryani recipe", "authentic biryani", "dum biryani recipe",
    "kacchi biryani", "pakki biryani", "biryani masala",
    "biryani history", "biryani spices", "basmati rice biryani",
  ],
  alternates: { canonical: "https://biryanirecipes.com" },
  openGraph: {
    type: "website",
    title: "Biryani Recipes — The World's Most Comprehensive Biryani Archive",
    description:
      "14 authentic biryani recipes with history, ingredients, and step-by-step method. Hyderabadi, Lucknowi, Kolkata, Sindhi, Thalassery, Mandi, Kabsa and more.",
    url: "https://biryanirecipes.com",
    siteName: "Biryani Recipes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biryani Recipes — The World's Most Comprehensive Biryani Archive",
    description:
      "14 authentic biryani recipes with history, ingredients, and step-by-step method. From Hyderabadi kacchi to Cape Malay breyani.",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Biryani Recipes",
  url: "https://biryanirecipes.com",
  description:
    "The world's most comprehensive biryani archive — authentic recipes, history, and the global geography of biryani (also spelled biriyani, briyani, biriani).",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://biryanirecipes.com/varieties?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-night text-ivory">
        <Cursor />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
