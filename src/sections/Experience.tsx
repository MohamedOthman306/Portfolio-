import { EXPERIENCE_DATA } from '../data/projects';
import './Experience.css';

const typeLabels: Record<string, { label: string; color: string }> = {
  work: { label: 'Work Experience', color: 'var(--primary)' },
  internship: { label: 'Internship', color: 'var(--secondary)' },
  education: { label: 'Education', color: 'var(--highlight)' },
  training: { label: 'DEPI Training', color: 'var(--secondary-dark)' },
};

const typeIcons: Record<string, string> = {
  work: '◈',
  internship: '◎',
  education: '▦',
  training: '⬡',
};

function renderHighlight(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={index}>{part.slice(2, -2)}</strong>
      : part
  );
}

export default function Experience() {
  if (EXPERIENCE_DATA.length === 0) return null;

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <span className="section-label reveal-item">Experience & Education</span>
        <h2 className="display-md reveal-item" style={{ marginBottom: '1rem', maxWidth: 600 }}>
          Professional journey
        </h2>
        <p className="text-lg reveal-item" style={{ color: 'var(--text-secondary)', marginBottom: '3.5rem', maxWidth: 550 }}>
          A timeline of education, training, and hands-on experience building analytical capabilities.
        </p>

        <div className="experience__timeline">
          {EXPERIENCE_DATA.map((item, i) => {
            const typeMeta = typeLabels[item.type] || { label: item.type, color: 'var(--blue)' };
            return (
              <div
                key={item.id}
                className="experience__item reveal-item"
                style={{ '--reveal-delay': `${i * 0.12}s`, '--timeline-color': typeMeta.color } as React.CSSProperties}
              >
                {/* Timeline connector */}
                <div className="experience__connector">
                  <div className="experience__dot">
                    <span>{typeIcons[item.type] || '◈'}</span>
                  </div>
                  {i < EXPERIENCE_DATA.length - 1 && <div className="experience__line" />}
                </div>

                {/* Content card */}
                <div className="experience__card glass-card">
                  <div className="experience__card-top">
                    <span className="experience__type-badge font-mono" style={{ color: typeMeta.color, borderColor: typeMeta.color }}>
                      {typeMeta.label}
                    </span>
                    <span className="experience__dates font-mono">{item.startDate} — {item.endDate}</span>
                  </div>

                  <h3 className="experience__title">{item.title}</h3>
                  <div className="experience__org">
                    <span>{item.organization}</span>
                    <span className="experience__location">{item.location}</span>
                  </div>

                  <p className="experience__desc">{item.description}</p>

                  {item.highlights.length > 0 && (
                    <ul className="experience__highlights">
                      {item.highlights.map((h, hi) => (
                        <li key={hi} className="experience__highlight">
                          <span className="experience__highlight-dot" style={{ background: typeMeta.color }} />
                          <span>{renderHighlight(h)}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.tools && item.tools.length > 0 && (
                    <div className="experience__tools">
                      {item.tools.map((tool) => (
                        <span key={tool} className="experience__tool font-mono">{tool}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
