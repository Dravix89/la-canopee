import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import SvgDefs from "@/components/SvgDefs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollTop from "@/components/ScrollTop";

export const metadata: Metadata = {
  title: {
    default: "La Canopée",
    template: "%s | La Canopée",
  },
  description:
    "La Canopée rassemble communautés, idées et actions pour protéger la faune et la flore.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body>
        <SvgDefs />
        <div className="wrap">
          <Navbar />
          {children}
          <Footer />
          <ScrollTop />
        </div>
      </body>
    </html>
  );
}
