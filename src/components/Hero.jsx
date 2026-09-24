import React from 'react';

export default function Hero() {
  return (
    <section className="editorial-hero" id="hero">
      <div className="hero-grid-container">
        <div className="hero-main-column">
          <div className="hero-meta-tag">
            <span className="meta-accent-dot"></span>
            <span>B.Tech AI & ML Student — BVRIT Hyderabad</span>
          </div>

          <h1 className="hero-display-name">
            <span className="name-line">PILLAR ISETTY</span>
            <span className="name-line serif-emphasis">VENKATA SATVIKA</span>
          </h1>

          <div className="hero-sub-row">
            <span className="hero-role-title">AI / FULL-STACK DEVELOPER</span>
          </div>

          <p className="hero-statement">
            Building practical AI applications, full-stack web systems, and projects exploring Generative AI, voice AI, and geospatial technologies.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="cta-btn cta-btn-primary">
              VIEW PROJECTS
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>
            <a 
              href="https://github.com/pvsatvika" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-btn cta-btn-outline"
            >
              GITHUB ↗
            </a>
            <a 
              href="https://www.linkedin.com/in/pv-satvika-a1120439b/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-btn cta-btn-outline"
            >
              LINKEDIN ↗
            </a>
            <a href="#contact" className="cta-btn cta-btn-text">
              CONTACT
            </a>
          </div>
        </div>

        <div className="hero-side-card">
          <div className="side-card-header">
            <span className="side-card-mono">SPECIFICATIONS</span>
          </div>
          <div className="side-card-body">
            <div className="spec-row">
              <span className="spec-label">DEGREE</span>
              <span className="spec-val">B.Tech CSE (AI & ML)</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">INSTITUTION</span>
              <span className="spec-val">BVRIT Hyderabad</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">LOCATION</span>
              <span className="spec-val">Hyderabad, India</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">GRADUATION</span>
              <span className="spec-val">2029</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">CGPA</span>
              <span className="spec-val highlight-val">9.85</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
