import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import About from "../components/About";
import Stats from "../components/Stats";
import Services from "../components/Services";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const LandingPage = () => (
  <div className="min-h-screen bg-white text-gray-900">
    <Navbar />
    <Hero />
    
    <About />
    <Stats />
    <Services />
    <CTA />
    <Footer />
  </div>
);

export default LandingPage;
