
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProjectsSection from "@/components/ProjectsSection";
import BackgroundSection from "@/components/BackgroundSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ExpertiseSection />
      <ProjectsSection />
      <BackgroundSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
