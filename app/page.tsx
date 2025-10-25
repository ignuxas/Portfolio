'use client';

import Navigation from '@/components/Navigation';
import Background from '@/components/Background';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';

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
      </div>

      {/* Experience Section - separate from Hero */}
      <Experience />
    </div>
  );
}
