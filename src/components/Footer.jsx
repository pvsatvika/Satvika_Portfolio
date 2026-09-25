import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="editorial-footer">
      <div className="footer-inner">
        <div className="footer-brand-col">
          <span className="footer-logo">PV SATVIKA</span>
          <span className="footer-tagline">Pillar Isetty Venkata Satvika — AI &amp; Full-Stack Developer</span>
        </div>

        <div className="footer-right-col">
          <span className="footer-copy">
            &copy; 2026 Pillar Isetty Venkata Satvika. Designed &amp; Developed with React &amp; Vite.
          </span>
          <button onClick={scrollToTop} className="footer-back-link font-mono-btn">
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
