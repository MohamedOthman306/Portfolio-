import { PROFILE } from '../config/profile';
import HeroBackground from './HeroBackground';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero" aria-label="Introduction" data-motion-section>
      <HeroBackground />

      <div className="hero__container container">
        {/* Left Column: Strategic Analytical Narrative */}
        <div className="hero__content">
          {/* Eyebrow: Single Identity Badge */}
          <div className="hero__eyebrow hero__animate hero__animate--1">
            <span className="hero__status-indicator" aria-hidden="true">
              <span className="hero__status-pulse" />
              <span className="hero__status-core" />
            </span>
            <span className="hero__eyebrow-text font-mono">DATA ANALYST</span>
          </div>

          {/* Main Display Headline (Calibrated Editorial Scale) */}
          <h1 className="hero__title hero__animate hero__animate--2">
            <span className="hero__title-primary">Turning Complex Data</span>
            <span className="hero__title-accent">Into Strategic Direction.</span>
          </h1>

          {/* Lead Proposition Subtitle */}
          <p className="hero__subtitle text-lg hero__animate hero__animate--3">
            Data Analyst using SQL, Python, and Power BI to explore patterns, investigate what drives them, and turn findings into clear next steps.
          </p>

          {/* Actions & Verified Profiles */}
          <div className="hero__actions hero__animate hero__animate--4">
            <a
              href="#projects"
              className="btn-primary hero__cta-primary"
              data-cursor="cta"
              aria-label="View Projects and Case Studies"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('projects');
              }}
            >
              <span>Explore Case Studies</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="#process"
              className="btn-secondary hero__cta-secondary"
              aria-label="Explore Analytical Workflow and Vision"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('process');
              }}
            >
              <span>Workflow & Vision</span>
            </a>

            {/* Social Connect Icons */}
            <div className="hero__socials" aria-label="Professional channels">
              {PROFILE.linkedin && (
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-link"
                  title="LinkedIn: Mohamed Othman"
                  aria-label="LinkedIn profile of Mohamed Ahmed (opens in new tab)"
                  data-cursor="cta"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="hero__social-tooltip font-mono">LinkedIn</span>
                </a>
              )}

              {PROFILE.github && (
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-link"
                  title="GitHub: MohamedOthman306"
                  aria-label="GitHub profile of Mohamed Ahmed (opens in new tab)"
                  data-cursor="cta"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="hero__social-tooltip font-mono">GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Portrait Composition */}
        <div className="hero__stage hero__animate hero__animate--stage">
          {/* The Portrait Frame */}
          <div className="hero__portrait-frame">
            <picture>
              <source
                type="image/avif"
                srcSet="/images/hero-320w.avif 320w, /images/hero-480w.avif 480w, /images/hero-640w.avif 640w, /images/hero-800w.avif 800w"
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 340px"
              />
              <source
                type="image/webp"
                srcSet="/images/hero-320w.webp 320w, /images/hero-480w.webp 480w, /images/hero-640w.webp 640w, /images/hero-800w.webp 800w"
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 340px"
              />
              <img
                src="/images/hero.png"
                alt={`${PROFILE.name} — ${PROFILE.role}`}
                className="hero__portrait-img"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width={340}
                height={452}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.closest('.hero__portrait-frame')?.querySelector('.hero__portrait-fallback') as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
            </picture>

            <div className="hero__portrait-fallback" style={{ display: 'none' }} aria-hidden="true" />

            {/* Subtle high-tech bottom gradient overlay so frame edges blend harmoniously */}
            <div className="hero__portrait-scrim" aria-hidden="true" />
          </div>
        </div>
      </div>

      {/* Editorial Scroll Invitation */}
      <div className="hero__scroll hero__animate hero__animate--scroll" aria-hidden="true">
        <span className="hero__scroll-text font-mono">EXPLORE ANALYSIS</span>
        <div className="hero__scroll-track">
          <div className="hero__scroll-thumb" />
        </div>
      </div>
    </section>
  );
}
