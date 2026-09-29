import { useEffect, useRef, useState, useCallback } from 'react';
import { PROFILE } from '../../config/profile';
import './Navigation.css';

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'process', label: 'Process' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = NAV_LINKS;

  // Active pill indicator position & width
  const linksContainerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  // Track if scrolling is caused by a click to avoid jumpy active states
  const isClickScrollingRef = useRef(false);
  const clickTimeoutRef = useRef<number | null>(null);

  // Measure and position the active pill
  const updateIndicator = useCallback(() => {
    const activeBtn = linkRefs.current[activeSection];
    const container = linksContainerRef.current;
    if (activeBtn && container) {
      const containerRect = container.getBoundingClientRect();
      const btnRect = activeBtn.getBoundingClientRect();
      setIndicatorStyle({
        left: btnRect.left - containerRect.left,
        width: btnRect.width,
        opacity: 1,
      });
    } else {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [activeSection]);

  // Update indicator on section change or window resize
  useEffect(() => {
    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [updateIndicator]);

  useEffect(() => {
    const main = document.querySelector('main');
    if (!main || !('IntersectionObserver' in window)) return;

    const visibleSections = new Map<HTMLElement, number>();
    const observedSections = new Set<Element>();
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const section = entry.target as HTMLElement;
        if (entry.isIntersecting) visibleSections.set(section, entry.boundingClientRect.top);
        else visibleSections.delete(section);
      });

      if (isClickScrollingRef.current || visibleSections.size === 0) return;
      const targetLine = window.innerHeight * 0.28;
      const activeSection = [...visibleSections.entries()].sort(
        ([, topA], [, topB]) => Math.abs(topA - targetLine) - Math.abs(topB - targetLine)
      )[0]?.[0];
      if (activeSection) setActiveSection(activeSection.id);
    }, { rootMargin: '-22% 0px -65% 0px', threshold: 0 });

    const observeSections = (node: Node) => {
      if (!(node instanceof Element)) return;
      const sections: Element[] = [];
      if (node.matches('section[id]')) sections.push(node);
      sections.push(...node.querySelectorAll('section[id]'));

      sections.forEach((section) => {
        const isNavigationTarget = NAV_LINKS.some((link) => link.id === section.id);
        if (isNavigationTarget && !observedSections.has(section)) {
          observedSections.add(section);
          sectionObserver.observe(section);
        }
      });
    };

    observeSections(main);

    // Sections are lazy loaded, so inspect only newly added subtrees.
    const mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => record.addedNodes.forEach(observeSections));
    });
    mutationObserver.observe(main, { childList: true, subtree: true });

    const handleScroll = () => {
      const nextScrolled = window.scrollY > 60;
      if (nextScrolled !== scrolledRef.current) {
        scrolledRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }

      if (!isClickScrollingRef.current && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      mutationObserver.disconnect();
      sectionObserver.disconnect();
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileOpen(false);

    // Lock scroll-driven updates while smoothly traveling to the section
    isClickScrollingRef.current = true;
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = window.setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 850);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav ref={navRef} className={`nav ${scrolled ? 'nav--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="nav__inner">
        <div className={`nav__center ${mobileOpen ? 'nav__center--open' : ''}`}>
          <div ref={linksContainerRef} className="nav__links">
            {/* Smooth Sliding Active Pill Indicator */}
            <span
              className="nav__active-indicator"
              style={{
                transform: `translateX(${indicatorStyle.left}px)`,
                width: `${indicatorStyle.width}px`,
                opacity: indicatorStyle.opacity,
              }}
              aria-hidden="true"
            />

            {navLinks.map((link) => (
              <button
                key={link.id}
                ref={(el) => {
                  linkRefs.current[link.id] = el;
                }}
                className={`nav__link ${activeSection === link.id ? 'nav__link--active' : ''}`}
                onClick={() => handleNavClick(link.id)}
                aria-current={activeSection === link.id ? 'page' : undefined}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="nav__mobile-cta">
            <a
              href={`mailto:${PROFILE.email}`}
              className="btn-primary"
              data-cursor="cta"
              aria-label="Send email to contact Mohamed"
              onClick={() => setMobileOpen(false)}
            >
              <span>Get in Touch</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="nav__actions">
          <a href={`mailto:${PROFILE.email}`} className="btn-primary nav__cta" data-cursor="cta" aria-label="Send email to contact Mohamed">
            <span>Get in Touch</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <button
          className={`nav__hamburger ${mobileOpen ? 'nav__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
