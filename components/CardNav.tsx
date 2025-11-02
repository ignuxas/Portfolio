import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Button } from '@heroui/react';
// use your own icon import if react-icons is not available
import { GoArrowUpRight } from 'react-icons/go';
import { FaYoutube, FaLinkedin, FaGithub, FaFacebook, FaEnvelope, FaGlobe } from 'react-icons/fa';
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

  const handleLinkClick = () => {
    const tl = tlRef.current;
    if (!tl) return;
    setIsHamburgerOpen(false);
    tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
    tl.reverse();
  };

  const getLinkIcon = (href: string, label: string) => {
    const lowerHref = href.toLowerCase();
    const lowerLabel = label.toLowerCase();
    
    // Check for Website
    if (lowerLabel.includes('website')) {
      return <FaGlobe className="nav-card-link-icon shrink-0 text-[18px]" aria-hidden="true" />;
    }
    // Check for YouTube
    if (lowerHref.includes('youtube') || lowerLabel.includes('youtube')) {
      return <FaYoutube className="nav-card-link-icon shrink-0 text-[18px]" aria-hidden="true" />;
    }
    // Check for LinkedIn
    if (lowerHref.includes('linkedin') || lowerLabel.includes('linkedin')) {
      return <FaLinkedin className="nav-card-link-icon shrink-0 text-[18px]" aria-hidden="true" />;
    }
    // Check for GitHub
    if (lowerHref.includes('github') || lowerLabel.includes('github')) {
      return <FaGithub className="nav-card-link-icon shrink-0 text-[18px]" aria-hidden="true" />;
    }
    // Check for Facebook
    if (lowerHref.includes('facebook') || lowerLabel.includes('facebook')) {
      return <FaFacebook className="nav-card-link-icon shrink-0 text-[18px]" aria-hidden="true" />;
    }
    // Check for Email
    if (lowerHref.startsWith('mailto:') || lowerLabel.includes('email')) {
      return <FaEnvelope className="nav-card-link-icon shrink-0 text-[18px]" aria-hidden="true" />;
    }
    // Default arrow for internal links or unknown external links
    return <GoArrowUpRight className="nav-card-link-icon shrink-0 text-[18px]" aria-hidden="true" />;
  };

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      // On mobile, return viewport height minus some margin, but ensure it doesn't go off-screen
      const viewportHeight = window.innerHeight;
      const topPosition = 20; // top-[1.2em] is roughly 20px
      const bottomMargin = 10; // small margin at bottom
      const maxHeight = viewportHeight - topPosition - bottomMargin;
      return Math.min(maxHeight, viewportHeight - 30);
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
    // Add scroll listener for border styling
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolled = currentScrollY > 50;
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
      className={`card-nav-container fixed left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] z-[999] transition-all top-[1.2em] md:top-[2em] ${
        isModalOpen 
          ? '-translate-y-[200px] opacity-0 duration-300 ease-in' 
          : 'translate-y-0 opacity-100 duration-500 ease-out'
      } ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} block h-[60px] p-0 rounded-xl shadow-md relative overflow-hidden will-change-[height] backdrop-blur-lg bg-[rgba(0,0,0,0.5)] border-[1px] transition-colors duration-500 ${
          isScrolled ? 'border-[rgba(255,255,255,0.15)]' : 'border-[rgba(0,0,0,0.6)]'
        }`}
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

          {/* Logo - always centered */}
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="logo-wrapper hidden md:flex items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:opacity-80"
          >
            <img src={logo} alt={logoAlt} className="logo h-12" />
            {logoText && (
              <span className="logo-text ml-4 text-white font-semibold text-lg whitespace-nowrap tracking-tight">{logoText}</span>
            )}
          </a>

          {/* Mobile logo (original) */}
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="logo-container flex md:hidden items-center order-1 cursor-pointer hover:opacity-80"
          >
            <img src={logo} alt={logoAlt} className="logo h-12" />
            {logoText && (
              <span className="logo-text ml-4 text-white font-medium text-lg">{logoText}</span>
            )}
          </a>

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
          className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2 flex flex-col items-stretch gap-2 justify-start z-1 overflow-y-auto overflow-x-hidden ${
            isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          } md:flex-row md:items-end md:gap-3 md:justify-start md:overflow-visible`}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex flex-col gap-2 p-[12px_16px] rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-1 h-auto md:h-full md:min-h-0 md:flex-[1_1_0%]"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor } as React.CSSProperties}
            >
              <div className="nav-card-label font-normal tracking-[-0.5px] text-[18px] md:text-[22px]">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-1">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex items-center gap-1.5 no-underline cursor-pointer transition-opacity duration-300 hover:opacity-75 text-[16px] md:text-[16px] py-2 md:py-0 -mx-2 px-2 rounded-md active:bg-white/10"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                    onClick={handleLinkClick}
                  >
                    {getLinkIcon(lnk.href, lnk.label)}
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
