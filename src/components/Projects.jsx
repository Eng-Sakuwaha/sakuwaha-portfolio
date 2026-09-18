import { useState } from 'react';
import { projects } from '../data/portfolioData.js';
import ProjectModal from './ProjectModal.jsx';

export default function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title fade-in">Featured Projects</h2>
        <p className="section-subtitle fade-in">
          Engineering projects demonstrating practical application of technical skills.
        </p>

        {/* ---------- Featured Final Year Project ---------- */}
        {featuredProject && (
          <article className="featured-project fade-in">
            <div className="featured-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              {featuredProject.label} · {featuredProject.year}
            </div>

            <h3 className="featured-title">{featuredProject.title}</h3>

            <div className="featured-tech">{featuredProject.technology}</div>

            <p className="featured-description">{featuredProject.description}</p>

            <div className="project-components">
              {featuredProject.components.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>

            {featuredProject.diagram && (
              <div className="project-diagram featured-diagram">
                {featuredProject.diagram.map((step, i) => (
                  <span key={step}>
                    {step}
                    {i < featuredProject.diagram.length - 1 && (
                      <span className="arrow"> → </span>
                    )}
                  </span>
                ))}
              </div>
            )}

            <button
              className="btn btn-primary featured-btn"
              onClick={() => setActiveProject(featuredProject)}
              aria-label={`View details for ${featuredProject.title}`}
            >
              View Full Case Study
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </article>
        )}

        {/* ---------- Other Projects ---------- */}
        <h3 className="projects-subheading fade-in">Other Engineering Projects</h3>

        <div className="projects-grid">
          {otherProjects.map((project) => (
            <article className="project-card fade-in" key={project.id}>
              <div className="project-tech">{project.technology}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-components">
                {project.components.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>

              {project.diagram && (
                <div className="project-diagram">
                  {project.diagram.map((step, i) => (
                    <span key={step}>
                      {step}
                      {i < project.diagram.length - 1 && <span className="arrow"> → </span>}
                    </span>
                  ))}
                </div>
              )}

              <button
                className="btn btn-outline"
                onClick={() => setActiveProject(project)}
                aria-label={`View details for ${project.title}`}
              >
                View Details
              </button>
            </article>
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}