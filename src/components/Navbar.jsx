import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Technical Skills', href: '#skills' },
    { label: 'Achievements', href: '#journey' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`editorial-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero" className="brand-logo-wrapper">
          <span className="brand-logo">PV SATVIKA</span>
          <span className="brand-subtag">AI &amp; FULL-STACK</span>
        </a>

        <nav className="desktop-nav">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href} className="nav-item">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-cta-pinned">
          <a href="#contact" className="nav-cta-btn">
            Get In Touch
          </a>
        </div>

        <button 
          className="mobile-nav-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`toggle-line ${mobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`toggle-line ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="mobile-nav-menu">
          {navLinks.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="mobile-nav-item"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="mobile-nav-item mobile-nav-cta"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get In Touch
          </a>
        </nav>
      )}
    </header>
  );
}
