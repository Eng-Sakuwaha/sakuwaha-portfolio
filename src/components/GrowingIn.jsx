import { growingIn } from '../data/portfolioData.js';

export default function GrowingIn() {
  return (
    <section className="section" id="growing">
      <div className="container">
        <h2 className="section-title fade-in">Currently Growing In</h2>
        <p className="section-subtitle fade-in">Continuous professional development areas.</p>

        <div className="growing-section fade-in">
          <p>
            Continuously developing practical knowledge in infrastructure, networking, cybersecurity,
            software development and embedded technologies.
          </p>
          <div className="skill-badges">
            {growingIn.map((item) => (
              <span className="skill-badge" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}