import './About.css';

export default function About() {
  return (
    <section id="about" className="about section" data-motion-section>
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
                  I’m Mohamed Ahmed, a Data Analyst who enjoys going beyond the numbers to understand what they actually mean. I believe data becomes valuable when it answers the right question, reveals the patterns behind a business problem, and turns uncertainty into something people can act on.
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
                    <source
                      type="image/avif"
                      srcSet="/images/about-320w.avif 320w, /images/about-480w.avif 480w, /images/about-640w.avif 640w, /images/about-800w.avif 800w"
                      sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 380px"
                    />
                    <source
                      type="image/webp"
                      srcSet="/images/about-320w.webp 320w, /images/about-480w.webp 480w, /images/about-640w.webp 640w, /images/about-800w.webp 800w"
                      sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 380px"
                    />
                    <img
                      src="/images/about.png"
                      alt="Mohamed Ahmed — Data Analyst"
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

          {/* One connected transformation path */}
          <div className="about__vision">
            <div className="about__vision-heading">
              <span className="about__vision-kicker font-mono">MY VISION</span>
            </div>

            <ol className="about__vision-chain" aria-label="My analytical process, from data to action">
              <li className="about__vision-step">
                <span className="about__vision-node" aria-hidden="true"><span /></span>
                <span className="about__vision-step-num font-mono">01</span>
                <h3 className="about__vision-step-title">DATA</h3>
                <p className="about__vision-step-desc">Understand the real business question.</p>
              </li>
              <li className="about__vision-step">
                <span className="about__vision-node" aria-hidden="true"><span /></span>
                <span className="about__vision-step-num font-mono">02</span>
                <h3 className="about__vision-step-title">UNDERSTANDING</h3>
                <p className="about__vision-step-desc">Find patterns, relationships, and drivers.</p>
              </li>
              <li className="about__vision-step">
                <span className="about__vision-node" aria-hidden="true"><span /></span>
                <span className="about__vision-step-num font-mono">03</span>
                <h3 className="about__vision-step-title">INSIGHT</h3>
                <p className="about__vision-step-desc">Turn evidence into meaningful explanation.</p>
              </li>
              <li className="about__vision-step about__vision-step--target">
                <span className="about__vision-node" aria-hidden="true"><span /></span>
                <span className="about__vision-step-num font-mono">04</span>
                <h3 className="about__vision-step-title">ACTION</h3>
                <p className="about__vision-step-desc">Create value through better decisions.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
