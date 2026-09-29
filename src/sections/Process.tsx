import { useState } from 'react';
import './Process.css';

interface StageData {
  num: string;
  stageKey: string;
  title: string;
  subtitle: string;
  description: string;
  analyticalDetail: string;
  accent: string;
  isPayoff: boolean;
  renderVisual: () => React.JSX.Element;
}

export default function Process() {
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  const stages: StageData[] = [
    {
      num: '01',
      stageKey: 'data',
      title: 'Data',
      subtitle: 'Raw Ingestion & Audit',
      description: 'Messy, incomplete, fragmented information.',
      analyticalDetail: 'Source audit · Null anomaly detection',
      accent: 'var(--primary)',
      isPayoff: false,
      renderVisual: () => (
        <svg viewBox="0 0 220 95" fill="none" className="workflow__graphic-svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* Subtle coordinate matrix */}
          <line x1="15" y1="22" x2="205" y2="22" stroke="var(--primary)" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.12" />
          <line x1="15" y1="48" x2="205" y2="48" stroke="var(--primary)" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.12" />
          <line x1="15" y1="74" x2="205" y2="74" stroke="var(--primary)" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.12" />
          
          {/* Scattered raw data points with tentative fragmented links */}
          <path d="M 32,62 L 68,36 L 110,66 L 152,32 L 188,52" stroke="var(--primary)" strokeWidth="1" strokeDasharray="2 3" opacity="0.28" />
          <circle cx="32" cy="62" r="2.5" fill="var(--primary)" opacity="0.45" />
          <circle cx="68" cy="36" r="3" fill="var(--primary)" opacity="0.55" />
          <circle cx="110" cy="66" r="2.5" fill="var(--primary)" opacity="0.45" />
          <circle cx="152" cy="32" r="3" fill="var(--primary)" opacity="0.6" />
          <circle cx="188" cy="52" r="2.5" fill="var(--primary)" opacity="0.45" />
          
          {/* Raw outlier detection target */}
          <circle cx="90" cy="24" r="6" stroke="var(--highlight)" strokeWidth="1" strokeDasharray="2 2" opacity="0.65" className="workflow__graphic-pulse" />
          <circle cx="90" cy="24" r="2.2" fill="var(--highlight)" opacity="0.85" />
          
          {/* Secondary noise points */}
          <circle cx="165" cy="74" r="2" fill="var(--primary)" opacity="0.3" />
          <circle cx="48" cy="78" r="1.5" fill="var(--primary)" opacity="0.25" />
          <circle cx="132" cy="18" r="1.5" fill="var(--primary)" opacity="0.2" />
        </svg>
      ),
    },
    {
      num: '02',
      stageKey: 'structure',
      title: 'Structure',
      subtitle: 'Cleaning & Validation',
      description: 'Clean, organize, validate, and understand the data.',
      analyticalDetail: 'Schema integrity · Normalization',
      accent: 'var(--secondary)',
      isPayoff: false,
      renderVisual: () => (
        <svg viewBox="0 0 220 95" fill="none" className="workflow__graphic-svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* Tabular relational matrix */}
          <rect x="22" y="16" width="176" height="64" rx="7" stroke="var(--secondary)" strokeWidth="1" opacity="0.28" fill="rgba(63, 193, 201, 0.04)" />
          {/* Header row rule */}
          <line x1="22" y1="35" x2="198" y2="35" stroke="var(--secondary)" strokeWidth="1" opacity="0.22" />
          {/* Column dividers */}
          <line x1="80" y1="16" x2="80" y2="80" stroke="var(--secondary)" strokeWidth="0.75" opacity="0.16" />
          <line x1="140" y1="16" x2="140" y2="80" stroke="var(--secondary)" strokeWidth="0.75" opacity="0.16" />
          {/* Row divider */}
          <line x1="22" y1="57" x2="198" y2="57" stroke="var(--secondary)" strokeWidth="0.5" opacity="0.12" />
          
          {/* Header capsules */}
          <rect x="34" y="23" width="34" height="4.5" rx="2" fill="var(--secondary)" opacity="0.55" />
          <rect x="94" y="23" width="34" height="4.5" rx="2" fill="var(--secondary)" opacity="0.55" />
          <rect x="152" y="23" width="32" height="4.5" rx="2" fill="var(--secondary)" opacity="0.55" />
          
          {/* Cleansed verified data rows */}
          <circle cx="51" cy="46" r="2.5" fill="var(--primary)" opacity="0.55" />
          <circle cx="110" cy="46" r="2.5" fill="var(--secondary)" opacity="0.75" />
          <circle cx="168" cy="46" r="2.5" fill="var(--secondary)" opacity="0.85" />
          <circle cx="51" cy="68" r="2.5" fill="var(--primary)" opacity="0.55" />
          <circle cx="110" cy="68" r="2.5" fill="var(--primary)" opacity="0.55" />
          <circle cx="168" cy="68" r="2.5" fill="var(--secondary)" opacity="0.75" />
        </svg>
      ),
    },
    {
      num: '03',
      stageKey: 'insight',
      title: 'Insight',
      subtitle: 'Exploration',
      description: 'Explore patterns, trends, and drivers to explain what the data actually means.',
      analyticalDetail: 'Pattern exploration · Root-cause synthesis',
      accent: 'var(--secondary)',
      isPayoff: false,
      renderVisual: () => (
        <svg viewBox="0 0 220 95" fill="none" className="workflow__graphic-svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="wfMergedInsightGrad" x1="25" y1="28" x2="195" y2="78" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.22" />
              <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Statistical baseline */}
          <line x1="20" y1="76" x2="200" y2="76" stroke="var(--primary)" strokeWidth="0.75" opacity="0.18" />

          {/* Statistical distribution pattern wave */}
          <path d="M 24,76 C 65,76 80,30 110,30 C 140,30 155,76 196,76" stroke="var(--secondary)" strokeWidth="1.5" fill="url(#wfMergedInsightGrad)" opacity="0.75" />

          {/* Regression trendline vector */}
          <line x1="38" y1="68" x2="182" y2="40" stroke="var(--primary-dark)" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

          {/* Radial synthesis target radar */}
          <circle cx="110" cy="46" r="28" stroke="var(--primary)" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.2" />
          <circle cx="110" cy="46" r="15" stroke="var(--secondary)" strokeWidth="1" opacity="0.45" />
          <line x1="60" y1="46" x2="160" y2="46" stroke="var(--secondary)" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.35" />
          <line x1="110" y1="18" x2="110" y2="74" stroke="var(--secondary)" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.35" />

          {/* Converging driver vectors isolating the root finding */}
          <path d="M 52,68 L 94,52" stroke="var(--secondary)" strokeWidth="1.25" strokeDasharray="3 2" opacity="0.55" />
          <path d="M 168,68 L 126,52" stroke="var(--secondary)" strokeWidth="1.25" strokeDasharray="3 2" opacity="0.55" />

          {/* Synthesized root-cause beacon core */}
          <circle cx="110" cy="46" r="5" fill="var(--primary-dark)" opacity="0.9" />
          <circle cx="110" cy="46" r="8.5" stroke="var(--secondary)" strokeWidth="1.5" opacity="0.85" />
          <circle cx="110" cy="46" r="2.2" fill="#ffffff" />

          {/* Pattern cluster nodes */}
          <circle cx="82" cy="52" r="2.5" fill="var(--secondary)" opacity="0.6" />
          <circle cx="138" cy="52" r="2.5" fill="var(--secondary)" opacity="0.6" />
        </svg>
      ),
    },
    {
      num: '04',
      stageKey: 'direction',
      title: 'Direction',
      subtitle: 'Strategic Execution',
      description: 'Turn the insight into an actionable business decision.',
      analyticalDetail: 'Strategic impact · Decision execution',
      accent: 'var(--highlight)',
      isPayoff: true,
      renderVisual: () => (
        <svg viewBox="0 0 220 95" fill="none" className="workflow__graphic-svg" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          {/* Baseline reference */}
          <line x1="25" y1="74" x2="195" y2="74" stroke="var(--primary)" strokeWidth="0.75" opacity="0.15" />
          
          {/* Forward decision trajectory */}
          <path d="M 30,74 Q 80,70 125,46 T 180,24" stroke="var(--highlight)" strokeWidth="2.25" strokeLinecap="round" opacity="0.9" />
          
          {/* Vertical attribution drop line */}
          <line x1="180" y1="24" x2="180" y2="74" stroke="var(--highlight)" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.35" />
          
          {/* Stepping progression nodes */}
          <circle cx="30" cy="74" r="2.5" fill="var(--primary)" opacity="0.5" />
          <circle cx="85" cy="62" r="3" fill="var(--secondary)" opacity="0.7" />
          <circle cx="134" cy="42" r="3.5" fill="var(--secondary)" opacity="0.85" />
          
          {/* Signature Payoff Decision Node */}
          <circle cx="180" cy="24" r="11" stroke="var(--highlight)" strokeWidth="1" strokeDasharray="3 3" opacity="0.55" className="workflow__payoff-ring" />
          <circle cx="180" cy="24" r="6" fill="var(--highlight)" />
          <circle cx="180" cy="24" r="2.2" fill="#ffffff" />
          
          {/* Directional arrow forward */}
          <polygon points="186,19 194,24 186,29" fill="var(--highlight)" opacity="0.95" />
        </svg>
      ),
    },
  ];

  return (
    <section id="process" className="process section" data-motion-section>
      <div className="container">
        <div className="process__frame">
          {/* Refined architectural accent line */}
          <div className="process__frame-accent" />

          {/* Section Header */}
          <header className="process__header">
            <div className="process__eyebrow font-mono">
              <span className="process__eyebrow-dot" />
              <span>Analytical Workflow</span>
            </div>

            <h2 className="process__headline">
              From Messy Data to Strategic Direction.
            </h2>

            <p className="process__subhead">
              A disciplined, four-stage progression that transforms raw inputs into structured evidence, clear drivers, and decisive business action.
            </p>
          </header>

          {/* Connected Analytical Workflow System */}
          <div className="workflow" aria-label="4-stage analytical process: Data to Direction">
            {/* Desktop SVG Connecting Data-Flow Rail (4 Stages) */}
            <div className="workflow__rail-container" aria-hidden="true">
              <svg className="workflow__rail-svg" viewBox="0 0 1000 36" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="workflowStreamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.2" />
                    <stop offset="30%" stopColor="var(--secondary)" stopOpacity="0.65" />
                    <stop offset="70%" stopColor="var(--secondary)" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="var(--highlight)" stopOpacity="0.95" />
                  </linearGradient>
                </defs>

                {/* Base guide track linking all 4 stages (centers at 125, 375, 625, 875) */}
                <line
                  x1="125"
                  y1="18"
                  x2="875"
                  y2="18"
                  stroke="rgba(54, 79, 107, 0.14)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />

                {/* Vertical connective drops to stage pins */}
                <line x1="125" y1="18" x2="125" y2="34" stroke="rgba(54, 79, 107, 0.22)" strokeWidth="1.5" strokeDasharray="2 2" />
                <line x1="375" y1="18" x2="375" y2="34" stroke="rgba(63, 193, 201, 0.3)" strokeWidth="1.5" strokeDasharray="2 2" />
                <line x1="625" y1="18" x2="625" y2="34" stroke="rgba(63, 193, 201, 0.3)" strokeWidth="1.5" strokeDasharray="2 2" />
                <line x1="875" y1="18" x2="875" y2="34" stroke="rgba(252, 81, 133, 0.35)" strokeWidth="1.5" strokeDasharray="2 2" />

                {/* Anchor node rings */}
                <circle cx="125" cy="18" r="4.5" fill="#ffffff" stroke="var(--primary)" strokeWidth="1.5" opacity="0.6" />
                <circle cx="375" cy="18" r="4.5" fill="#ffffff" stroke="var(--secondary)" strokeWidth="1.5" opacity="0.7" />
                <circle cx="625" cy="18" r="4.5" fill="#ffffff" stroke="var(--secondary)" strokeWidth="1.5" opacity="0.8" />
                <circle cx="875" cy="18" r="4.5" fill="#ffffff" stroke="var(--highlight)" strokeWidth="1.5" opacity="0.9" />

                {/* Active traveling pulse stream */}
                <line
                  x1="125"
                  y1="18"
                  x2="875"
                  y2="18"
                  stroke="url(#workflowStreamGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="workflow__rail-stream"
                />

                {/* Traveling analytical data signal packet */}
                <g className="workflow__signal-packet">
                  <circle cx="0" cy="18" r="9" fill="var(--secondary)" opacity="0.25" className="workflow__signal-halo" />
                  <circle cx="0" cy="18" r="4.5" fill="#ffffff" stroke="var(--secondary)" strokeWidth="2.5" className="workflow__signal-core" />
                </g>
              </svg>
            </div>

            {/* Mobile Vertical SVG Rail (4 Stages) */}
            <div className="workflow__mobile-rail-container" aria-hidden="true">
              <svg className="workflow__mobile-rail-svg" viewBox="0 0 28 650" preserveAspectRatio="none">
                <line
                  x1="14"
                  y1="20"
                  x2="14"
                  y2="630"
                  stroke="rgba(54, 79, 107, 0.16)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <line
                  x1="14"
                  y1="20"
                  x2="14"
                  y2="630"
                  stroke="url(#workflowStreamGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="workflow__mobile-stream"
                />
                <g className="workflow__mobile-signal-packet">
                  <circle cx="14" cy="0" r="7" fill="var(--secondary)" opacity="0.3" />
                  <circle cx="14" cy="0" r="3.5" fill="#ffffff" stroke="var(--secondary)" strokeWidth="2" />
                </g>
              </svg>
            </div>

            {/* 4 Analytical Stages Grid */}
            <div className="workflow__track" role="list">
              {stages.map((stage, index) => {
                const isHovered = hoveredStage === index;

                return (
                  <div
                    key={stage.num}
                    role="listitem"
                    tabIndex={0}
                    data-scroll-reveal
                    className={`workflow__stage workflow__stage--${stage.stageKey} ${
                      stage.isPayoff ? 'workflow__stage--payoff' : ''
                    } ${isHovered ? 'workflow__stage--active' : ''}`}
                    style={{
                      '--stage-accent': stage.accent,
                      '--stage-reveal-delay': `${index * 100}ms`,
                    } as React.CSSProperties}
                    aria-label={`Stage ${stage.num}: ${stage.title} — ${stage.description}`}
                    onMouseEnter={() => setHoveredStage(index)}
                    onMouseLeave={() => setHoveredStage(null)}
                    onFocus={() => setHoveredStage(index)}
                    onBlur={() => setHoveredStage(null)}
                  >
                    {/* Stage Header Pin & Identification */}
                    <div className="workflow__stage-header">
                      <div className="workflow__stage-node font-mono">
                        <span className="workflow__stage-num">{stage.num}</span>
                        <span className="workflow__stage-status-dot" />
                      </div>
                      <span className="workflow__stage-key font-mono">{stage.subtitle}</span>
                    </div>

                    {/* Bespoke Analytical Stage Graphic */}
                    <div className="workflow__stage-canvas">
                      {stage.renderVisual()}
                    </div>

                    {/* Stage Headline & Short Description */}
                    <div className="workflow__stage-body">
                      <h3 className="workflow__stage-title">{stage.title}</h3>
                      <p className="workflow__stage-desc">{stage.description}</p>
                    </div>

                    {/* Stage Analytical Metadata Micro-Tag */}
                    <div className="workflow__stage-footer font-mono">
                      <span className="workflow__stage-tag">{stage.analyticalDetail}</span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
