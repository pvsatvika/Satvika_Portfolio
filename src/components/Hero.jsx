import React from 'react';

export default function Hero() {
  return (
    <section className="editorial-hero" id="hero">
      <div className="hero-grid-container">
        {/* Left Side Main Presentation */}
        <div className="hero-main-column">
          <div className="hero-meta-tag">
            <span className="meta-accent-dot"></span>
            <span>B.Tech CSE (AI & ML) — BVRIT Hyderabad</span>
          </div>

          <h1 className="hero-display-name">
            <span className="name-line">Pillar Isetty</span>
            <span className="name-line serif-emphasis">Venkata Satvika</span>
          </h1>

          <div className="hero-sub-row">
            <span className="hero-role-title">AI & FULL-STACK DEVELOPER | B.TECH CSE (AI & ML)</span>
          </div>

          <p className="hero-statement">
            Architecting practical AI solutions, intelligent document processing pipelines, voice-enabled interactive interfaces, and full-stack software applications grounded in solid computer science fundamentals.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="cta-btn cta-btn-primary">
              View Featured Projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>
            <a href="#contact" className="cta-btn cta-btn-secondary">
              Let's Connect
            </a>
            <a 
              href="https://github.com/pvsatvika" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-btn cta-btn-outline"
            >
              GitHub ↗
            </a>
            <a 
              href="https://www.linkedin.com/in/pvsatvika" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-btn cta-btn-outline"
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Quick Stats Bar */}
          <div className="hero-location-status">
            <span>• BVRIT Hyderabad</span>
            <span className="status-sep">|</span>
            <span>• CGPA 9.85</span>
            <span className="status-sep">|</span>
            <span>• Hyderabad, India</span>
          </div>
        </div>

        {/* Right Side: Interactive Developer Desk Card */}
        <div className="hero-workstation-card">
          <div className="workstation-header">
            <div className="window-controls">
              <span className="window-dot dot-close"></span>
              <span className="window-dot dot-minimize"></span>
              <span className="window-dot dot-expand"></span>
            </div>
            <span className="workstation-title">&gt; satvika@workspace:~</span>
          </div>

          <div className="workstation-body">
            {/* Block 1: PRIMARY EXPERTISE */}
            <div className="workstation-block">
              <span className="block-label">PRIMARY EXPERTISE</span>
              <div className="focus-badges-row">
                <span className="desk-badge">AI/ML Applications</span>
                <span className="desk-badge">Generative Pipelines</span>
                <span className="desk-badge">Full-Stack Architecture</span>
              </div>
            </div>

            {/* Block 2: CURRENT TOOLING */}
            <div className="workstation-block">
              <span className="block-label">CURRENT TOOLING</span>
              <div className="stack-mono-tags">
                Python • C • React • Streamlit • Flask • SQLite
              </div>
            </div>

            {/* Block 3: KEY MILESTONES */}
            <div className="workstation-block">
              <span className="block-label">KEY MILESTONES</span>
              <div className="highlights-rows">
                <div className="highlight-item">
                  <span className="hl-key">ET AI Hackathon 2.0</span>
                  <span className="hl-badge live">Finalist</span>
                </div>
                <div className="highlight-item">
                  <span className="hl-key">Women Who Aspire</span>
                  <span className="hl-badge hack">Round 1 Cleared</span>
                </div>
                <div className="highlight-item">
                  <span className="hl-key">Turing Cup 2026</span>
                  <span className="hl-badge doc">Participant</span>
                </div>
              </div>
            </div>

            {/* Bottom Status Indicator */}
            <div className="workstation-status-line">
              <span className="status-prompt">$ status --open_for_opportunities</span>
              <span className="status-pulse-cursor"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
