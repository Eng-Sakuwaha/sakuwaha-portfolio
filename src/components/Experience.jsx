import { experience } from '../data/portfolioData.js';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title fade-in">Experience</h2>
        <p className="section-subtitle fade-in">Professional experience and practical exposure.</p>

        <div className="timeline fade-in">
          {experience.map((exp) => (
            <div className="timeline-item" key={exp.title}>
              <div className="timeline-dot"></div>
              <div className="timeline-date">{exp.year}</div>
              <h3>{exp.title}</h3>
              <div className="subtitle">{exp.company}</div>
              <p>{exp.description}</p>
              <ul>
                {exp.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>

              {exp.achievement && (
                <div className="experience-achievement">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                  <span>{exp.achievement}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}