import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GsapEffects from "@/components/GsapEffects";

export const metadata = {
  title: "Vinod SK | Frontend, WordPress & Shopify Developer",
  description:
    "Portfolio of Vinod SK, a frontend, WordPress and Shopify developer with 2 years of experience building responsive, SEO-friendly websites.",
  keywords: [
    "Vinod SK",
    "Frontend Developer",
    "WordPress Developer",
    "Shopify Developer",
    "WooCommerce Developer",
    "Elementor Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Vinod SK" }],
  creator: "Vinod SK",
  openGraph: {
    title: "Vinod SK | Frontend, WordPress & Shopify Developer",
    description:
      "WordPress, Shopify and frontend development portfolio.",
    siteName: "Vinod SK Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinod SK | Frontend, WordPress & Shopify Developer",
    description: "WordPress, Shopify and frontend development portfolio.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="font-sans scroll-smooth h-full antialiased"
    >
      <body className="min-h-full flex flex-col font-sans transition-colors duration-300">
        <GsapEffects />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
