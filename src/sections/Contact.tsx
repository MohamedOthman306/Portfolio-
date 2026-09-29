import { PROFILE } from '../config/profile';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact section section-dark">
      <div className="container">
        {/* Concluding statement */}
        <div className="contact__finale reveal-item">
          <h2 className="display-lg contact__finale-text">
            Good analysis answers questions.<br />
            <span style={{ color: 'var(--coral)' }}>Great analysis changes decisions.</span>
          </h2>
        </div>

        {/* Contact content */}
        <div className="contact__grid">
          <div className="contact__info reveal-item">
            <span className="section-label" style={{ color: 'var(--mint)' }}>Contact</span>
            <h3 className="display-md" style={{ color: 'white', marginBottom: '1.25rem' }}>
              Let's work with data.
            </h3>
            <p className="text-lg" style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '2.5rem', maxWidth: 460 }}>
              Whether you need exploratory analysis, database modeling, or clear KPI dashboards — I'm open to discussing full-time opportunities and collaborative analytical projects.
            </p>

            <div className="contact__links">
              <a href={`mailto:${PROFILE.email}`} className="contact__link" data-cursor="cta" aria-label={`Send an email to ${PROFILE.name} at ${PROFILE.email}`}>
                <div className="contact__link-icon" style={{ background: 'var(--highlight)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 6L2 7" />
                  </svg>
                </div>
                <div>
                  <div className="contact__link-label">Email</div>
                  <div className="contact__link-value">{PROFILE.email}</div>
                </div>
              </a>

              {PROFILE.linkedin && (
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__link"
                  data-cursor="cta"
                  title="LinkedIn: Mohamed Othman"
                  aria-label="Visit Mohamed's LinkedIn profile (opens in new tab)"
                >
                  <div className="contact__link-icon" style={{ background: 'var(--primary-light)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <div className="contact__link-label">LinkedIn</div>
                    <div className="contact__link-value">linkedin.com/in/mohamed-othman24</div>
                  </div>
                </a>
              )}

              {PROFILE.github && (
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__link"
                  data-cursor="cta"
                  title="GitHub: MohamedOthman306"
                  aria-label="Visit Mohamed's GitHub profile (opens in new tab)"
                >
                  <div className="contact__link-icon" style={{ background: 'var(--secondary)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <div className="contact__link-label">GitHub</div>
                    <div className="contact__link-value">github.com/MohamedOthman306</div>
                  </div>
                </a>
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact__form-card reveal-item">
            <form
              className="contact__form"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const subject = encodeURIComponent(`Data Project Inquiry from ${data.get('name')}`);
                const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\nMessage:\n${data.get('message')}`);
                window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
              }}
            >
              <div className="contact__form-header">
                <span className="contact__form-badge font-mono">Send a Message</span>
                <p className="contact__form-sub">Have a dataset, role, or project in mind?</p>
              </div>

              <div className="contact__form-group">
                <label className="contact__form-label font-mono" htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Alex Johnson"
                  className="contact__form-input"
                />
              </div>

              <div className="contact__form-group">
                <label className="contact__form-label font-mono" htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  className="contact__form-input"
                />
              </div>

              <div className="contact__form-group">
                <label className="contact__form-label font-mono" htmlFor="contact-message">Project / Role Details</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your dataset, analytical goal, or opening..."
                  className="contact__form-input contact__form-textarea"
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <span>Send Message</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Minimal Professional Footer */}
      <footer className="contact__footer">
        <div className="container">
          <div className="contact__footer-inner">
            <div className="contact__footer-info">
              <span className="contact__footer-name">{PROFILE.name}</span>
              <span className="contact__footer-divider">|</span>
              <span className="contact__footer-role">{PROFILE.role}</span>
            </div>

            <div className="contact__footer-links">
              <a href={`mailto:${PROFILE.email}`} className="contact__footer-link" title={`Email: ${PROFILE.email}`} aria-label={`Email ${PROFILE.name} directly`}>Email</a>
              {PROFILE.linkedin && (
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__footer-link"
                  title="LinkedIn: Mohamed Othman"
                  aria-label={`Visit ${PROFILE.name}'s LinkedIn profile in new tab`}
                >
                  LinkedIn
                </a>
              )}
              {PROFILE.github && (
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__footer-link"
                  title="GitHub: MohamedOthman306"
                  aria-label={`Visit ${PROFILE.name}'s GitHub profile in new tab`}
                >
                  GitHub
                </a>
              )}
            </div>

            <p className="contact__footer-copy font-mono">
              © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
