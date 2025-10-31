'use client';

import React from 'react';
import { Button } from '@heroui/react';
import { SOCIAL_LINKS, EMAIL, FULL_NAME } from '@/lib/constants';
import { useRouter } from 'next/navigation';

interface FooterProps {
  variant?: 'default' | 'minimal';
}

export default function Footer({ variant = 'default' }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  if (variant === 'minimal') {
    return (
      <footer className="relative w-full bg-black py-16 px-8">
        <div className="mx-auto max-w-6xl">
          {/* Main Footer Content */}
          <div className="flex flex-col items-center justify-center text-center">
            {/* Go Back Button */}
            <Button
              onPress={() => router.push('/')}
              size="lg"
              radius="full"
              className="mb-12 bg-white text-black font-semibold px-8 py-6 text-base hover:bg-zinc-200 transition-all duration-300"
            >
              Go Back
            </Button>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col items-center justify-between gap-6 border-t border-zinc-800 pt-8 md:flex-row">
            {/* Copyright */}
            <p className="text-sm text-zinc-500">
              © {currentYear} {FULL_NAME}. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 transition-colors hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="relative w-full bg-black py-24 px-8 pb-8">
      <div className="mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Available Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 backdrop-blur-sm px-4 py-2" data-aos="fade-up">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-zinc-300">Available for work</span>
          </div>

          {/* Main Heading */}
          <h2 className="mb-8 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl" data-aos="fade-up" data-aos-delay="100">
            Let's create your
            <br />
            next big idea.
          </h2>

          {/* Contact Button */}
          <Button
            as="a"
            href={`mailto:${EMAIL}`}
            size="lg"
            radius="full"
            className="mb-20 bg-transparent border-2 border-white text-white font-semibold px-8 py-6 text-base hover:bg-white hover:text-black transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Contact Me
          </Button>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-zinc-800 pt-8 md:flex-row">
          {/* Copyright */}
          <p className="text-sm text-zinc-500">
            © {currentYear} {FULL_NAME}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 transition-colors hover:text-white"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
