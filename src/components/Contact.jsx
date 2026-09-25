import React, { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('pvsatvika@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="editorial-contact-section" id="contact">
      <div className="editorial-container">
        <div className="contact-editorial-box">
          <div className="contact-header-block">
            <span className="section-meta-mono text-warm">05 // CONNECT & COLLABORATE</span>
            <h2 className="contact-callout-heading">Let's build something.</h2>
            <p className="contact-lead-text">
              Interested in developing practical AI systems, web applications, or engineering collaborations? Let's connect.
            </p>
          </div>

          <div className="contact-direct-grid">
            <div className="editorial-channel-card email-copy-card">
              <div className="channel-tag-mono">DIRECT EMAIL</div>
              <div className="channel-title">pvsatvika@gmail.com</div>
              <button onClick={handleCopyEmail} className="channel-action-btn">
                {copied ? 'Copied to Clipboard!' : 'Copy Email Address 📋'}
              </button>
            </div>

            <a 
              href="https://github.com/pvsatvika" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="editorial-channel-card"
            >
              <div className="channel-tag-mono">GITHUB PROFILE</div>
              <div className="channel-title">github.com/pvsatvika</div>
              <span className="channel-arrow-link">View Repositories ↗</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/pvsatvika" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="editorial-channel-card"
            >
              <div className="channel-tag-mono">LINKEDIN PROFILE</div>
              <div className="channel-title">linkedin.com/in/pvsatvika</div>
              <span className="channel-arrow-link">Connect on LinkedIn ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
