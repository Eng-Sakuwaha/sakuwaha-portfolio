import { useState } from 'react';
import { personalInfo } from '../data/portfolioData.js';

export default function Footer() {
  const [imgSrc, setImgSrc] = useState(personalInfo.profileImage);

  const whatsappHref = `${personalInfo.whatsappUrl}?text=${encodeURIComponent(
    personalInfo.whatsappMessage
  )}`;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-brand-head">
              <img
                src={imgSrc}
                alt="Sakuwaha Henry"
                className="footer-avatar"
                width="48"
                height="48"
                loading="lazy"
                onError={() => setImgSrc(personalInfo.placeholderImage)}
              />
              <div>
                <h4>{personalInfo.name}</h4>
                <p>Computer Engineering | Web Development | Graphic Design</p>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              LinkedIn
            </a>
            <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              GitHub
            </a>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
              WhatsApp
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Send email">
              Email
            </a>
          </div>
        </div>
        <div className="footer-copy">© 2026 Sakuwaha Henry. All rights reserved.</div>
      </div>
    </footer>
  );
}