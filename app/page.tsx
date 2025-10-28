'use client';

import Navigation from '@/components/Navigation';
import Background from '@/components/Background';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative bg-black font-sans">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section with Background */}
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* LiquidEther Background - constrained to Hero section */}
        <Background />
        
        {/* Hero Content */}
        <Hero />
        
        {/* Fade to black gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black pointer-events-none z-20" />
      </div>

      {/* About Section */}
      <About />

      {/* Experience Section - separate from Hero */}
      <Experience />

      {/* Footer */}
      <Footer />
    </div>
  );
}
