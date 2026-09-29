import { Project, PROJECTS } from '../data/projects';
import './Projects.css';

export default function Projects() {
  const featured = PROJECTS.find((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="projects section section-dark">
      <div className="container">
        <span className="section-label reveal-item" style={{ color: 'var(--mint)' }}>Case Studies</span>
        <h2 className="display-md reveal-item" style={{ color: 'white', marginBottom: '1rem', maxWidth: 600 }}>
          Real problems. Real data. Real impact.
        </h2>
        <p className="text-lg reveal-item" style={{ color: 'rgba(255,255,255,0.72)', marginBottom: '3.5rem', maxWidth: 600 }}>
          Each project follows a structured analytical process: Problem → Data → Process → Insights → Result.
        </p>

        {/* Featured Project */}
        {featured && (
          <div className="projects__featured reveal-item" data-cursor="project">
            <FeaturedProject project={featured} />
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="projects__grid">
          {others.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <div className="projects__featured-card">
      <div className="projects__featured-bg" style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)` }} />

      <div className="projects__featured-content">
        <div className="projects__featured-info">
          <span className="projects__featured-badge font-mono">{project.category}</span>
          <h3 className="projects__featured-title">{project.title}</h3>
          <p className="projects__featured-problem">{project.problem}</p>

          <div className="projects__featured-insights">
            {project.insights.map((insight, i) => (
              <div key={i} className="projects__insight">
                <span className="projects__insight-dot" style={{ background: project.color }} />
                <span>{insight}</span>
              </div>
            ))}
          </div>

          {/* Results */}
          {project.results && (
            <div className="projects__featured-results">
              <span className="projects__results-label font-mono">Results & Impact</span>
              <p>{project.results}</p>
            </div>
          )}

          <div className="projects__featured-tools">
            {project.tools.map((tool) => (
              <span key={tool} className="projects__tool-tag font-mono">{tool}</span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="projects__featured-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects__link" data-cursor="cta" aria-label={`View ${project.title} source code on GitHub`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="projects__link projects__link--live" data-cursor="cta" aria-label={`Open live dashboard for ${project.title}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
                <span>Live Dashboard</span>
              </a>
            )}
          </div>
        </div>

        <div className="projects__featured-visual">
          <div className="projects__layer projects__layer--bg">
            <div className="projects__dash-bg" />
          </div>
          <div className="projects__layer projects__layer--charts">
            <div className="projects__dash-chart">
              <div className="projects__dash-chart-title font-mono">Monthly Trend</div>
              <svg viewBox="0 0 200 80" className="projects__dash-svg">
                <defs>
                  <linearGradient id="featGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={project.color} stopOpacity="0.3" />
                    <stop offset="100%" stopColor={project.color} stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,60 Q20,55 40,50 T80,35 T120,25 T160,18 T200,10" fill="none" stroke={project.color} strokeWidth="2" className="projects__dash-line" />
                <path d="M0,60 Q20,55 40,50 T80,35 T120,25 T160,18 T200,10 L200,80 L0,80 Z" fill="url(#featGrad)" />
              </svg>
            </div>
          </div>
          <div className="projects__layer projects__layer--kpis">
            <div className="projects__dash-kpi">
              <span className="projects__dash-kpi-label font-mono">{project.metrics.label}</span>
              <span className="projects__dash-kpi-value">{project.metrics.value}</span>
              <span className="projects__dash-kpi-change" style={{ color: project.color }}>{project.metrics.change}</span>
            </div>
          </div>
          <div className="projects__layer projects__layer--insight">
            <div className="projects__dash-callout">
              <span className="projects__dash-callout-icon">◉</span>
              <span className="projects__dash-callout-text font-mono">Key Insight Detected</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <div
      className="projects__card reveal-item"
      style={{ '--reveal-delay': `${index * 0.12}s`, '--project-color': project.color } as React.CSSProperties}
    >
      <div className="projects__card-header">
        <span className="projects__card-category font-mono">{project.category}</span>
        <h3 className="projects__card-title">{project.title}</h3>
        <p className="projects__card-problem">{project.problem}</p>

        <div className="projects__card-metric" style={{ marginBottom: '1.25rem' }}>
          <span className="projects__card-metric-value">{project.metrics.value}</span>
          <span className="projects__card-metric-label">{project.metrics.label}</span>
        </div>

        {/* Dataset source */}
        <div style={{ marginBottom: '1rem', fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)' }}>
          <span className="font-mono" style={{ color: 'var(--blue-light)', fontSize: '0.72rem', display: 'block', marginBottom: '0.2rem', textTransform: 'uppercase' }}>
            Dataset:
          </span>
          {project.dataset}
        </div>

        {/* Key Insights Preview */}
        <div style={{ marginBottom: '1.25rem' }}>
          <span className="font-mono" style={{ color: 'var(--mint)', fontSize: '0.72rem', display: 'block', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
            Key Insights:
          </span>
          {project.insights.slice(0, 2).map((ins, i) => (
            <div key={i} className="projects__insight" style={{ marginBottom: '0.4rem' }}>
              <span className="projects__insight-dot" style={{ background: project.color }} />
              <span style={{ fontSize: '0.82rem' }}>{ins}</span>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="projects__card-tools-row" style={{ marginBottom: '1.5rem' }}>
          {project.tools.map((tool) => (
            <span key={tool} className="projects__tool-tag font-mono">{tool}</span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="projects__card-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects__link" data-cursor="cta" aria-label={`View ${project.title} source code on GitHub`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="projects__link projects__link--live" data-cursor="cta" aria-label={`Open live dashboard for ${project.title}`}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
              <span>Live</span>
            </a>
          )}
        </div>
      </div>

      {/* Mini bar visualization */}
      <div className="projects__card-bars" aria-hidden="true">
        {[0.6, 0.85, 0.45, 0.75, 0.55, 0.9, 0.4].map((h, i) => (
          <div key={i} className="projects__card-bar" style={{
            height: `${h * 100}%`,
            background: project.color,
            opacity: 0.15 + i * 0.05,
          }} />
        ))}
      </div>
    </div>
  );
}
