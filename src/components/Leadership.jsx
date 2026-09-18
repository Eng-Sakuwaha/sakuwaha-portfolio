import { leadership } from '../data/portfolioData.js';

export default function Leadership() {
  return (
    <section className="section" id="leadership">
      <div className="container">
        <h2 className="section-title fade-in">Leadership & Professional Development</h2>
        <p className="section-subtitle fade-in">Mentorship and professional growth milestones.</p>

        <div className="timeline fade-in">
          {leadership.map((item) => (
            <div className="timeline-item" key={item.title}>
              <div className="timeline-dot"></div>
              <div className="timeline-date">{item.year}</div>
              <h3>{item.title}</h3>
              <div className="subtitle">{item.role}</div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}