import { aboutText, profile } from '../data/portfolioData.js';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title fade-in">About Me</h2>
        <p className="section-subtitle fade-in">
          Emerging technical professional with practical project experience and a strong academic foundation.
        </p>

        <div className="about-grid">
          <div className="about-text fade-in">
            {aboutText.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="profile-card fade-in">
            <h3>Profile</h3>
            {profile.map((item) => (
              <div className="profile-item" key={item.label}>
                <span className="label">{item.label}</span>
                <span className="value">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}