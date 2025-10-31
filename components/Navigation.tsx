'use client';

import signature from "../public/signature.png";
import React from 'react';
import CardNav from '@/components/CardNav';
import type { CardNavItem } from '@/components/CardNav';

export default function Navigation() {
  const navItems: CardNavItem[] = [
    {
      label: "Page",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Projects", href: "#projects", ariaLabel: "View Projects" },
        { label: "About", href: "#about", ariaLabel: "About Me" },
        { label: "Experience", href: "#experience", ariaLabel: "My Experience" },
        { label: "Achievements", href: "#achievements", ariaLabel: "My Achievements" }
      ]
    },
    {
      label: "Thunderclap Labs",
      bgColor: "#0D1520",
      textColor: "#fff",
      links: [
        { label: "Website", href: "https://thunderclaplabs.com/", ariaLabel: "Thunderclap Labs Website" },
        { label: "YouTube", href: "https://www.youtube.com/@thunderclaplabs", ariaLabel: "Thunderclap Labs YouTube" },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/thunderclap-labs/", ariaLabel: "Thunderclap Labs LinkedIn" }
      ]
    },
    {
      label: "My Socials", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "YouTube", href: "https://www.youtube.com/@thunderclaplabs", ariaLabel: "My YouTube Channel" },
        { label: "Email", href: "mailto:mikolaitis.ignas@gmail.com", ariaLabel: "Email Me" },
        { label: "GitHub", href: "https://github.com/ignuxas", ariaLabel: "My GitHub" },
        { label: "Facebook", href: "https://www.facebook.com/ignuxas/", ariaLabel: "My Facebook" }
      ]
    }
  ];

  return (
    <CardNav
      logo={`${signature.src}`}
      logoText="Ignas Mikolaitis"
      logoAlt="Ignas Mikolaitis"
      items={navItems}
      baseColor="#000"
      menuColor="#fff"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
}
