import React from 'react';

export default function Contact() {
  return (
    <section className="editorial-contact-section" id="contact">
      <div className="editorial-container">
        <div className="contact-editorial-box">
          <div className="contact-header-block">
            <span className="section-meta-mono text-warm">09 // GET IN TOUCH</span>
            <h2 className="contact-callout-heading">Let's Connect</h2>
            <p className="contact-lead-text">
              Open for technical collaborations, internship opportunities, and innovative AI project discussions.
            </p>
          </div>

          <div className="contact-direct-grid">
            <a 
              href="mailto:pvsatvika@gmail.com" 
              className="editorial-channel-card"
            >
              <div className="channel-tag-mono">DIRECT EMAIL</div>
              <div className="channel-title">pvsatvika@gmail.com</div>
              <span className="channel-arrow-link">Send Email ↗</span>
            </a>

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
