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
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Journey', href: '#journey' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`editorial-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#hero" className="brand-logo">
          PV SATVIKA
        </a>

        <nav className="desktop-nav">
          {navLinks.map((item) => (
            <a key={item.label} href={item.href} className="nav-item">
              {item.label}
            </a>
          ))}
        </nav>

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
        </nav>
      )}
    </header>
  );
}
