import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Benefits from "@/components/sections/Benefits";
import Catalog from "@/components/sections/Catalog";

import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import SeoSchema from "@/components/ui/SeoSchema";

export default function Home() {
  return (
    <>
      <SeoSchema />
      <Navbar />
      <main>
        <Hero />
        <Catalog />
        <Benefits />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
