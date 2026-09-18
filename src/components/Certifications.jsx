import { certifications } from '../data/portfolioData.js';

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <h2 className="section-title fade-in">Certifications</h2>
        <p className="section-subtitle fade-in">
          Verified certificates and programme completions.
        </p>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <div
              className={`cert-card fade-in ${cert.highlighted ? 'cert-card-highlighted' : ''}`}
              key={cert.title}
            >
              <div className="cert-icon">
                {cert.highlighted ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                )}
              </div>

              <div className="cert-content">
                <h4>{cert.title}</h4>
                {cert.organization && (
                  <div className="cert-org">{cert.organization}</div>
                )}
                <div className="year">{cert.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}