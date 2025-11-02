'use client';

import logo from "../public/signature.png";
import React from 'react';

export default function Hero() {
  return (
    <main className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-center px-8 pb-12">
      {/* New Background Badge */}
      <div className="mb-12 flex items-center gap-2 rounded-full border border-zinc-700 bg-black/50 backdrop-blur-sm px-6 py-2.5">
        <div className="flex items-center gap-2">
            <img src={logo.src} alt="Ignas Mikolaitis" className="h-6 w-6 rounded-full" />
          <span className="text-sm font-medium text-white">Ignas Mikolaitis</span>
        </div>
      </div>

      {/* Hero Title */}
      <h1 className="max-w-5xl text-center text-5xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-6xl">
        I code sometimes
      </h1>
      <h3 className="mb-12 max-w-3xl text-center text-lg font-medium leading-relaxed text-zinc-300 md:text-xl">
        ¯\_(ツ)_/¯
      </h3>

      {/* CTA Buttons */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <a 
          href="#featured"
          className="flex h-14 items-center justify-center rounded-full bg-white px-10 text-base font-semibold text-black transition-all hover:bg-zinc-200 hover:scale-105"
        >
          View Projects
        </a>
        <a 
          href="#contact"
          className="flex h-14 items-center justify-center rounded-full border border-zinc-700 bg-transparent px-10 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105"
        >
          Contact Me
        </a>
      </div>
    </main>
  );
}
