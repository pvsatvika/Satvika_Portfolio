import React from 'react';

export default function Footer() {
  return (
    <footer className="editorial-footer">
      <div className="footer-inner">
        <div className="footer-brand-col">
          <span className="footer-logo">SATVIKA</span>
          <span className="footer-tagline">Pillar Isetty Venkata Satvika — AI & Full-Stack Developer</span>
        </div>

        <div className="footer-right-col">
          <span className="footer-copy">
            &copy; {new Date().getFullYear()} All rights reserved. Built with React & Vite.
          </span>
          <a href="#hero" className="footer-back-link">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
