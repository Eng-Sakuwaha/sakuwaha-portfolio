import { useState, useEffect, useRef } from 'react';
import { designs, designCategories, personalInfo } from '../data/portfolioData.js';

/* ---------- Individual design card with its own image state ---------- */
function DesignCard({ design, onOpen }) {
  const [imgSrc, setImgSrc] = useState(design.image);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleError = () => {
    setImgSrc(personalInfo.designPlaceholder);
  };

  const handleLoad = () => {
    setImgLoaded(true);
  };

  return (
    <button
      className="design-card"
      onClick={onOpen}
      aria-label={`View ${design.title}`}
    >
      <div className="design-image-wrapper">
        {!imgLoaded && <div className="design-image-skeleton" aria-hidden="true" />}
        <img
          src={imgSrc}
          alt={design.title}
          loading="lazy"
          decoding="async"
          className={imgLoaded ? 'loaded' : ''}
          onError={handleError}
          onLoad={handleLoad}
        />
        <div className="design-overlay">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
        </div>
      </div>
      <div className="design-info">
        <h3>{design.title}</h3>
        <span className="design-category">{design.category}</span>
      </div>
    </button>
  );
}

/* ---------- Lightbox ---------- */
function Lightbox({ design, onClose, closeBtnRef }) {
  const [imgSrc, setImgSrc] = useState(design.image);

  useEffect(() => {
    setImgSrc(design.image);
  }, [design]);

  return (
    <div
      className="lightbox-overlay active"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onClick={(e) => {
        if (e.target.classList.contains('lightbox-overlay')) onClose();
      }}
    >
      <div className="lightbox-content">
        <button
          className="lightbox-close"
          onClick={onClose}
          aria-label="Close"
          ref={closeBtnRef}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="lightbox-image">
          <img
            src={imgSrc}
            alt={design.title}
            onError={() => setImgSrc(personalInfo.designPlaceholder)}
          />
        </div>

        <div className="lightbox-info">
          <div className="lightbox-category">{design.category}</div>
          <h3 id="lightbox-title">{design.title}</h3>
          {design.description && <p>{design.description}</p>}

          {design.tools && design.tools.length > 0 && (
            <div className="lightbox-tools">
              {design.tools.map((tool) => (
                <span key={tool} className="lightbox-tool">
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Main section ---------- */
export default function Designs() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxDesign, setLightboxDesign] = useState(null);
  const closeBtnRef = useRef(null);

  const filtered =
    activeCategory === 'All'
      ? designs
      : designs.filter((d) => d.category === activeCategory);

  // Lock body scroll & handle Escape key when lightbox open
  useEffect(() => {
    if (lightboxDesign) {
      document.body.style.overflow = 'hidden';
      closeBtnRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }

    const handleKey = (e) => {
      if (e.key === 'Escape') setLightboxDesign(null);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [lightboxDesign]);

  return (
    <section className="section" id="designs">
      <div className="container">
        <div className="designs-header fade-in">
          <div>
            <h2 className="section-title">Graphic Design Portfolio</h2>
            <p className="section-subtitle">
              A selection of logos, flyers, social media graphics, branding, and posters
              designed for clients and personal projects.
            </p>
          </div>

          <a
            href={personalInfo.designDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline designs-drive-btn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7.71 3.5 1.15 15l3.42 6h13.06l3.42-6L14.29 3.5H7.71zM10.14 5h3.72l4.71 8.16h-3.87L10.14 5zm1.28 12.5H5.36l1.86-3.22 3.07 5.32 1.13-2.1zm5.97 0h-3.3l-1.83-3.18h5.13l-1.47 2.55-1.53-2.55h3.3L17.39 17.5z" />
            </svg>
            View Full Portfolio on Google Drive
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        {/* ---------- Category Filters ---------- */}
        <div className="design-filters fade-in" role="tablist" aria-label="Filter designs by category">
          {designCategories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`design-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ---------- Design Grid ---------- */}
        {filtered.length === 0 ? (
          <p className="design-empty fade-in">
            No designs in this category yet. Check back soon.
          </p>
        ) : (
          <div className="designs-grid fade-in">
            {filtered.map((design) => (
              <DesignCard
                key={design.id}
                design={design}
                onOpen={() => setLightboxDesign(design)}
              />
            ))}
          </div>
        )}
      </div>

      {/* ---------- Lightbox ---------- */}
      {lightboxDesign && (
        <Lightbox
          design={lightboxDesign}
          onClose={() => setLightboxDesign(null)}
          closeBtnRef={closeBtnRef}
        />
      )}
    </section>
  );
}