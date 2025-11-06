'use client';

import Navigation from '@/components/Navigation';
import Background from '@/components/Background';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import FeaturedProjects from '@/components/FeaturedProjects';
import Footer from '@/components/Footer';
import { FaGithub, FaYoutube, FaFacebookF, FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Home() {
  const [showSideElements, setShowSideElements] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show elements after scrolling 300px
      if (window.scrollY > 300) {
        setShowSideElements(true);
      } else {
        setShowSideElements(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-black font-sans">
      {/* Skip to main content for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-cyan-500 focus:text-black focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section with Background */}
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* LiquidEther Background - constrained to Hero section */}
        <Background />
        
        {/* Hero Content */}
        <Hero />
        
        {/* Fade to black gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-b from-transparent to-black pointer-events-none z-20" />
      </div>

      {/* Main Content */}
      <main id="main-content">
        {/* About Section */}
        <About />

        {/* Experience Section - separate from Hero */}
        <Experience />

        {/* Featured Projects Section */}
        <FeaturedProjects />
        
        {/* Achievements Section */}
        <Achievements />
      </main>

      {/* Footer */}
      <Footer />

      {/* Social Links - Absolute positioned at bottom left */}
      <div 
        className={`absolute bottom-0 left-[calc(50%-692px)] z-2 hidden xl:flex flex-col items-center transition-all duration-500 after:content-[''] after:block after:w-px after:h-[90px] after:mx-auto after:bg-zinc-800 ${
          showSideElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <a 
          href='https://github.com/ignuxas' 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"
          className="flex justify-center items-center h-[30px] w-[30px] mb-2.5 text-zinc-400 hover:text-white hover:-translate-y-1 transition-all duration-[250ms] ease-[cubic-bezier(0.645,0.045,0.355,1)]"
        >
          <FaGithub className="h-5 w-5" />
        </a>
        <a 
          href='https://www.youtube.com/@ThunderclapLabs' 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="YouTube"
          className="flex justify-center items-center h-[30px] w-[30px] mb-2.5 text-zinc-400 hover:text-white hover:-translate-y-1 transition-all duration-[250ms] ease-[cubic-bezier(0.645,0.045,0.355,1)]"
        >
          <FaYoutube className="h-5 w-5" />
        </a>
        <a 
          href='https://www.facebook.com/ignuxas/' 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Facebook"
          className="flex justify-center items-center h-[30px] w-[30px] mb-2.5 text-zinc-400 hover:text-white hover:-translate-y-1 transition-all duration-[250ms] ease-[cubic-bezier(0.645,0.045,0.355,1)]"
        >
          <FaFacebookF className="h-5 w-5" />
        </a>
        <a 
          href='https://www.linkedin.com/in/ignas-mikolaitis/' 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
          className="flex justify-center items-center h-[30px] w-[30px] mb-2.5 text-zinc-400 hover:text-white hover:-translate-y-1 transition-all duration-[250ms] ease-[cubic-bezier(0.645,0.045,0.355,1)]"
        >
          <FaLinkedin className="h-5 w-5" />
        </a>
      </div>

      {/* Contact Email - Absolute positioned at bottom right */}
      <div 
        className={`absolute bottom-0 right-[calc(50%-712px)] z-2 hidden xl:flex flex-col items-center transition-all duration-500 after:content-[''] after:block after:w-px after:h-[90px] after:mx-auto after:bg-zinc-800 ${
          showSideElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <a 
          href='mailto:mikolaitis.ignas@gmail.com' 
          target="_blank" 
          rel="noopener noreferrer"
          className="my-5 mx-auto p-2.5 text-xs leading-[18px] tracking-widest [writing-mode:vertical-rl] text-zinc-400 hover:text-white hover:-translate-y-1 transition-all duration-[250ms] ease-[cubic-bezier(0.645,0.045,0.355,1)]"
        >
          mikolaitis.ignas@gmail.com
        </a>
      </div>
    </div>
  );
}
