import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { ProblemSection } from "@/components/ProblemSection";
import { WhyUs } from "@/components/WhyUs";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { ThreeBackground } from "@/components/ThreeBackground";
import { FloatingCTA } from "@/components/FloatingCTA";
import { InquireModal } from "@/components/InquireModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);

  return (
    <div className="min-h-screen bg-black text-foreground font-sans relative overflow-x-hidden selection:bg-primary/30">
      <ThreeBackground />
      
      <Navbar onOpenModal={handleOpenModal} />
      
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <Services />
        <ProblemSection />
        <WhyUs />
        <About />
        <Testimonials />
        <FAQ />
        <FinalCTA onOpenModal={handleOpenModal} />
      </main>

      <Footer />
      
      <FloatingCTA onOpenModal={handleOpenModal} />
      <InquireModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}