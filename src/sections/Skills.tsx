import { SKILL_CARDS, type SkillCardIcon } from '../data/skills';
import './Skills.css';

function SkillIcon({ icon }: { icon: SkillCardIcon }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icon === 'preparation' && <><path d="M4 5h16M6 12h12M8 19h8" /><circle cx="5" cy="5" r="1" /><circle cx="19" cy="12" r="1" /></>}
      {icon === 'analysis' && <><path d="M4 19V5M4 19h16" /><path d="m7 15 4-4 3 2 5-7" /><circle cx="19" cy="6" r="1" /></>}
      {icon === 'sql' && <><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 10h16M10 10v10M15 10v10" /></>}
      {icon === 'visualization' && <><path d="M4 20V5M4 20h16" /><rect x="7" y="12" width="3" height="6" rx="1" /><rect x="13" y="8" width="3" height="10" rx="1" /><rect x="19" y="5" width="2" height="13" rx="1" /></>}
      {icon === 'business' && <><path d="M4 19h16M6 16l4-5 3 2 5-7" /><path d="M15 6h3v3" /></>}
      {icon === 'workflow' && <><rect x="4" y="4" width="6" height="6" rx="1.5" /><rect x="14" y="14" width="6" height="6" rx="1.5" /><path d="M10 7h3a2 2 0 0 1 2 2v5M14 17h-3a2 2 0 0 1-2-2v-5" /></>}
    </svg>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills section" aria-labelledby="skills-title">
      <div className="container">
        <header className="skills__header">
          <span className="section-label reveal-item">Skills &amp; Expertise</span>
          <h2
            id="skills-title"
            className="display-md reveal-item"
            style={{ '--reveal-delay': '80ms' } as React.CSSProperties}
          >
            What I can do with data.
          </h2>
          <p className="text-lg reveal-item" style={{ '--reveal-delay': '160ms' } as React.CSSProperties}>
            Analytical capabilities, methods, and tools for turning data into useful direction.
          </p>
        </header>

        <div className="skills__grid">
          {SKILL_CARDS.map((card, index) => (
            <article
              className="skills__card glass-card reveal-item"
              key={card.id}
              style={{ '--reveal-delay': `${index * 80}ms` } as React.CSSProperties}
            >
              <div className="skills__card-top">
                <span className="skills__icon-tile">
                  <SkillIcon icon={card.icon} />
                </span>
                <h3 className="skills__card-title">{card.title}</h3>
              </div>
              <ul className="skills__item-list">
                {card.skills.map((skill) => (
                  <li className={`skills__item${skill.highlighted ? ' skills__item--highlighted' : ''}`} key={skill.name}>
                    <span className="skills__item-dot" aria-hidden="true" />
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
