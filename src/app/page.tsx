'use client';

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Manifesto from "@/components/Manifesto";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";

export default function Home() {
  return (
    <main className="min-h-screen bg-acid-black text-acid-white selection:bg-acid-lime selection:text-acid-black">
      <Navigation />
      <SocialSidebar />
      <Hero />
      <Manifesto />
      <Services />
      <Projects />
      <Footer />
    </main>
  );
}