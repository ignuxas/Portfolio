'use client';

import React from 'react';

export default function Hero() {
  return (
    <main className="relative z-10 flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-8 pb-12">
      {/* New Background Badge */}
      <div className="mb-12 flex items-center gap-2 rounded-full border border-zinc-700 bg-black/50 backdrop-blur-sm px-6 py-2.5">
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
            <path d="M2 2L14 14M2 14L14 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="text-sm font-medium text-white">New Background</span>
        </div>
      </div>

      {/* Hero Title */}
      <h1 className="mb-12 max-w-5xl text-center text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl lg:text-8xl">
        The web, made fluid at your fingertips.
      </h1>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <button className="flex h-14 items-center justify-center rounded-full bg-white px-10 text-base font-semibold text-black transition-all hover:bg-zinc-200 hover:scale-105">
          Get Started
        </button>
        <button className="flex h-14 items-center justify-center rounded-full border border-zinc-700 bg-transparent px-10 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105">
          Learn More
        </button>
      </div>
    </main>
  );
}
