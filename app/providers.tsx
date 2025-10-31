'use client';

import { HeroUIProvider } from '@heroui/react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      easing: 'ease-out-cubic',
      offset: 50,
      delay: 0,
    });
  }, []);

  return <HeroUIProvider>{children}</HeroUIProvider>;
}
