import React from 'react';

export default function Footer() {
  return (
    <footer className="editorial-footer">
      <div className="footer-inner">
        <div className="footer-brand-col">
          <span className="footer-logo">PV SATVIKA</span>
          <span className="footer-tagline">Pillar Isetty Venkata Satvika — AI & Full-Stack Developer</span>
        </div>

        <div className="footer-right-col">
          <span className="footer-copy">
            &copy; 2026 Pillar Isetty Venkata Satvika. Built with React.
          </span>
          <a href="#hero" className="footer-back-link">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
