import { education } from '../data/portfolioData.js';

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <h2 className="section-title fade-in">Education</h2>
        <p className="section-subtitle fade-in">Academic background and relevant coursework.</p>

        <div className="timeline fade-in">
          {education.map((item) => (
            <div className="timeline-item" key={item.degree}>
              <div className="timeline-dot"></div>
              <div className="timeline-date">{item.year}</div>
              <h3>{item.degree}</h3>
              <div className="subtitle">{item.institution}</div>

              {item.coursework && (
                <>
                  <p>
                    <strong>Relevant Coursework:</strong>
                  </p>
                  <div className="coursework-grid">
                    {item.coursework.map((course) => (
                      <div className="coursework-item" key={course}>
                        {course}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}