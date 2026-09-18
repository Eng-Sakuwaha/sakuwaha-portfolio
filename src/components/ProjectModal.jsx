import { useEffect, useRef } from 'react';

export default function ProjectModal({ project, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    closeBtnRef.current?.focus();

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const { details } = project;

  return (
    <div
      className="modal-overlay active"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${project.id}-title`}
      onClick={(e) => {
        if (e.target.classList.contains('modal-overlay')) onClose();
      }}
    >
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close modal" ref={closeBtnRef}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {project.label && (
          <div className="modal-label">
            {project.label}
            {project.year && ` · ${project.year}`}
          </div>
        )}

        <h2 id={`${project.id}-title`}>{project.title}</h2>

        <div className="modal-tech">
          <strong>Technology Used:</strong> {project.technology}
        </div>

        <h4>Problem Addressed</h4>
        <p>{details.problemAddressed}</p>

        <h4>Technical Implementation</h4>
        <p>{details.technicalImplementation}</p>

        <h4>Key Components</h4>
        <p>{details.keyComponents}</p>

        {details.technicalChallenge && (
          <>
            <h4>Engineering Challenge &amp; Design Decision</h4>
            <p>{details.technicalChallenge}</p>
          </>
        )}

        <h4>Project Outcome</h4>
        <p>{details.outcome}</p>

        {details.acknowledgements && (
          <>
            <h4>Acknowledgements</h4>
            <p>{details.acknowledgements}</p>
          </>
        )}

        {details.tags && details.tags.length > 0 && (
          <div className="modal-tags">
            {details.tags.map((tag) => (
              <span key={tag} className="modal-tag">
                #{tag.replace(/\s+/g, '')}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}