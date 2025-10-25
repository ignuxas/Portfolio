'use client';

import Navigation from '@/components/Navigation';
import Background from '@/components/Background';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black font-sans overflow-hidden">
      {/* Navigation */}
      <Navigation />

      {/* LiquidEther Background */}
      <Background />

      {/* Hero Content */}
      <Hero />
    </div>
  );
}
