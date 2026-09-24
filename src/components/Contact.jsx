import React from 'react';

export default function Contact() {
  return (
    <section className="editorial-contact-section" id="contact">
      <div className="editorial-container">
        <div className="contact-editorial-box">
          <div className="contact-header-block">
            <span className="section-meta-mono text-warm">07 // INQUIRIES & CONNECT</span>
            <h2 className="contact-main-title">Let’s Build Together</h2>
            <p className="contact-lead-text">
              Open to technical collaborations, software engineering opportunities, and research inquiries. Reach out via email or connect across developer platforms.
            </p>
          </div>

          <div className="contact-direct-grid">
            <a 
              href="mailto:pvsatvika@gmail.com" 
              className="editorial-channel-card"
            >
              <div className="channel-tag-mono">EMAIL DIRECT</div>
              <div className="channel-title">pvsatvika@gmail.com</div>
              <span className="channel-arrow-link">Send Email ↗</span>
            </a>

            <a 
              href="https://github.com/pvsatvika" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="editorial-channel-card"
            >
              <div className="channel-tag-mono">GITHUB REPOSITORIES</div>
              <div className="channel-title">github.com/pvsatvika</div>
              <span className="channel-arrow-link">View Profile ↗</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/pv-satvika-a1120439b/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="editorial-channel-card"
            >
              <div className="channel-tag-mono">LINKEDIN NETWORK</div>
              <div className="channel-title">pv-satvika</div>
              <span className="channel-arrow-link">Connect on LinkedIn ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
