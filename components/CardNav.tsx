import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Button } from '@heroui/react';
// use your own icon import if react-icons is not available
import { GoArrowUpRight } from 'react-icons/go';
import SplitText from './SplitText';

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  logo: string;
  logoAlt?: string;
  logoText?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = 'Logo',
  logoText,
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  menuColor,
  buttonBgColor,
  buttonTextColor
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        contentEl.offsetHeight;

        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 260;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 50, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useLayoutEffect(() => {
    // Add scroll listener
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
    // Detect when HeroUI modal is open by checking for modal overlay in DOM
    const checkModalState = () => {
      // HeroUI modals create a backdrop element with data-slot="backdrop"
      const modalBackdrop = document.querySelector('[data-slot="backdrop"]');
      const modalOverlay = document.querySelector('[role="dialog"]');
      const isOpen = !!(modalBackdrop || modalOverlay);
      setIsModalOpen(isOpen);
    };

    // Initial check
    checkModalState();

    // Create observer to watch for DOM changes
    const observer = new MutationObserver(checkModalState);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['data-slot', 'role']
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={`card-nav-container fixed left-1/2 -translate-x-1/2 w-[90%] z-[999] top-[1.2em] md:top-[2em] ${
        isModalOpen 
          ? '-translate-y-[200px] opacity-0 max-w-[800px] transition-all duration-300 ease-in' 
          : isScrolled 
            ? 'max-w-[800px] translate-y-0 opacity-100 transition-all duration-500 ease-out' 
            : 'max-w-7xl translate-y-0 opacity-100 transition-all duration-500 ease-out'
      } ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} block h-[60px] p-0 rounded-xl shadow-md relative overflow-hidden will-change-[height] backdrop-blur-lg bg-[rgba(0,0,0,0.5)] border-[1px] border-[rgba(0,0,0,0.6)]`}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between p-2 pl-[1.1rem] z-2">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group h-full flex flex-col items-center justify-center cursor-pointer gap-1.5 order-2 md:order-0`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            style={{ color: menuColor || '#000' } as React.CSSProperties}
          >
            <div
              className={`hamburger-line w-[30px] h-0.5 bg-current transition-[transform,opacity,margin] duration-300 ease-linear origin-[50%_50%] ${
                isHamburgerOpen ? 'translate-y-1 rotate-45' : ''
              } group-hover:opacity-75`}
            />
            <div
              className={`hamburger-line w-[30px] h-0.5 bg-current transition-[transform,opacity,margin] duration-300 ease-linear origin-[50%_50%] ${
                isHamburgerOpen ? '-translate-y-1 -rotate-45' : ''
              } group-hover:opacity-75`}
            />
          </div>

          {/* Logo and tagline wrapper - moves as one unit */}
          <div 
            className={`logo-tagline-wrapper hidden md:flex items-center absolute transition-all duration-700 ease-in-out ${
              isScrolled ? 'left-1/2 -translate-x-1/2' : 'left-1/2 -translate-x-1/2 2xl:left-[23%] 2xl:translate-x-0'
            }`}
            style={{
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          >
            {/* Logo section */}
            <div className="flex items-center shrink-0">
              <img src={logo} alt={logoAlt} className="logo h-12" />
              {logoText && (
                <span className="logo-text ml-4 text-white font-semibold text-lg whitespace-nowrap tracking-tight">{logoText}</span>
              )}
            </div>

            {/* Divider - only visible when not scrolled */}
            <div 
              className={`h-6 mx-4 w-[1px] bg-white/20 transition-all duration-700 ease-in-out hidden 2xl:block ${
                isScrolled ? 'opacity-0 w-0' : 'opacity-100 mx-2'
              }`}
            />

            {/* Animated tagline - only visible when not scrolled */}
            <div 
              className={`tagline-container pt-[1px] transition-all duration-700 ease-in-out items-center hidden 2xl:flex ${
                isScrolled ? 'opacity-0 max-w-0 overflow-hidden' : 'opacity-100 max-w-[1000px]'
              }`}
            >
              {!isScrolled && (
                <SplitText
                  key="tagline-animation"
                  text="Full Stack Developer / Software Engineer, Co-founder @ Thunderclap Labs"
                  className="text-sm text-white/80 font-normal whitespace-nowrap tracking-wide"
                  delay={50}
                  duration={0.4}
                  ease="power3.out"
                  splitType="words"
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="0px"
                  textAlign="left"
                  tag="span"
                />
              )}
            </div>
          </div>

          {/* Mobile logo (original) */}
          <div className="logo-container flex md:hidden items-center order-1">
            <img src={logo} alt={logoAlt} className="logo h-12" />
            {logoText && (
              <span className="logo-text ml-4 text-white font-medium text-lg">{logoText}</span>
            )}
          </div>

          <Button
            as="a"
            href="https://drive.google.com/file/d/1jdC_hAlqNQdDPhXeHOkQ5jZ1YEtEcEi6/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            size="md"
            radius="lg"
            className="hidden md:inline-flex bg-transparent border-[1px] border-white/20 text-white font-medium backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all duration-300"
          >
            Resume
          </Button>
        </div>

        <div
          className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-1 ${
            isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          } md:flex-row md:items-end md:gap-3`}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex flex-col gap-2 p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[60px] md:h-full md:min-h-0 md:flex-[1_1_0%]"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor } as React.CSSProperties}
            >
              <div className="nav-card-label font-normal tracking-[-0.5px] text-[18px] md:text-[22px]">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-0.5">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex items-center gap-1.5 no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[15px] md:text-[16px]"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                  >
                    <GoArrowUpRight className="nav-card-link-icon shrink-0" aria-hidden="true" />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
