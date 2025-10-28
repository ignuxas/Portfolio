'use client';

import signature from "../public/signature.png";
import React from 'react';
import CardNav from '@/components/CardNav';
import type { CardNavItem } from '@/components/CardNav';

export default function Navigation() {
  const navItems: CardNavItem[] = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", href: "#company", ariaLabel: "About Company" },
        { label: "Careers", href: "#careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Experience",
      bgColor: "#0D1520",
      textColor: "#fff",
      links: [
        { label: "Work History", href: "#work-history", ariaLabel: "Work History" },
        { label: "Achievements", href: "#achievements", ariaLabel: "Achievements" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", href: "#featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", href: "#case-studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", href: "#email", ariaLabel: "Email us" },
        { label: "Twitter", href: "#twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", href: "#linkedin", ariaLabel: "LinkedIn" }
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
