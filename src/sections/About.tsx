import './About.css';
import { PROFILE } from '../config/profile';

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about__frame reveal-item">
          {/* Subtle architectural accent line */}
          <div className="about__frame-accent" />

          {/* Main 2-Column Grid */}
          <div className="about__grid">
            {/* Left Column: Narrative Content */}
            <div className="about__content">
              <div className="about__eyebrow font-mono">
                <span className="about__eyebrow-dot" />
                <span>About Me</span>
              </div>

              <h2 className="about__headline">
                I turn complex data into clear direction.
              </h2>

              <div className="about__story">
                <p className="about__paragraph">
                  I’m {PROFILE.name}, a Data Analyst who enjoys going beyond the numbers to understand what they actually mean. I believe data becomes valuable when it answers the right question, reveals the patterns behind a business problem, and turns uncertainty into something people can act on.
                </p>
                <p className="about__paragraph">
                  My approach is simple: understand the problem first, explore the data with curiosity, and translate the findings into clear insights that create real business value. I’m driven by the process of turning messy, ambiguous questions into meaningful direction — not simply producing another report or dashboard.
                </p>
              </div>

              {/* Creed Statement */}
              <div className="about__creed">
                <span className="about__creed-bar" />
                <p className="about__creed-text">
                  Analytical by nature. Precise by practice. Driven by impact.
                </p>
              </div>
            </div>

            {/* Right Column: Integrated Portrait Stage */}
            <div className="about__visual">
              <div className="about__stage">
                <div className="about__stage-halo" aria-hidden="true" />
                <div className="about__stage-bracket about__stage-bracket--tl" aria-hidden="true" />
                <div className="about__stage-bracket about__stage-bracket--br" aria-hidden="true" />

                <div className="about__photo-container">
                  <picture>
                    <img
                      src="/images/stand.png"
                      alt={`${PROFILE.name} — Data Analyst`}
                      className="about__photo-img"
                      loading="lazy"
                      decoding="async"
                      width={380}
                      height={505}
                    />
                  </picture>
                  <div className="about__photo-scrim" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>

          <div className="about__vision" aria-labelledby="about-vision-title">
            <div className="about__vision-heading">
              <span id="about-vision-title" className="about__vision-kicker font-mono">MY VISION</span>
            </div>

            <p className="about__vision-statement">
              I want my analysis to be clear, dependable, and useful.
            </p>

            <ul className="about__vision-principles" aria-label="Principles that guide my analysis">
              <li className="about__vision-principle">
                <h3 className="about__vision-principle-title">CLEAR THINKING</h3>
              </li>
              <li className="about__vision-principle">
                <h3 className="about__vision-principle-title">TRUSTWORTHY ANALYSIS</h3>
              </li>
              <li className="about__vision-principle">
                <h3 className="about__vision-principle-title">PRACTICAL DECISIONS</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
