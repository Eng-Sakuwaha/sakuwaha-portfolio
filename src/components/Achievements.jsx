import { achievements } from '../data/portfolioData.js';

const icons = {
  award: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
};

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <h2 className="section-title fade-in">Achievements</h2>
        <p className="section-subtitle fade-in">
          Recognition earned through professional commitment and dedication.
        </p>

        <div className="achievements-grid">
          {achievements.map((item) => (
            <article className="achievement-card fade-in" key={item.id}>
              <div className="achievement-icon">
                {icons[item.icon] || icons.award}
              </div>

              <div className="achievement-content">
                <div className="achievement-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  {item.date}
                </div>

                <h3>{item.title}</h3>
                <div className="achievement-org">
                  {item.organization}
                  {item.cohort && ` · ${item.cohort}`}
                </div>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}