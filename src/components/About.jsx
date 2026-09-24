import React from 'react';

export default function About() {
  const focusAreas = [
    'AI / Machine Learning',
    'Generative AI',
    'Full-Stack Development',
    'Voice AI',
    'GIS / Spatial Technologies',
    'Software Engineering'
  ];

  return (
    <section className="editorial-about-section" id="about">
      <div className="editorial-container">
        <div className="about-editorial-grid">
          <div className="about-left-header">
            <span className="section-meta-mono">02 // PROFILE & OBJECTIVES</span>
            <h2 className="section-main-title dark-bg-title">About Me</h2>
            <div className="institution-badge">
              <span>BVRIT Hyderabad College of Engineering for Women</span>
            </div>
          </div>

          <div className="about-right-content">
            <p className="about-lead-paragraph">
              I am a B.Tech Computer Science and Engineering student specializing in Artificial Intelligence & Machine Learning at BVRIT Hyderabad College of Engineering for Women.
            </p>
            <p className="about-body-paragraph">
              I am interested in building practical software using AI, machine learning, Generative AI, web technologies, and emerging technologies. My experience includes academic projects, hackathons, collaborative development, and independent technical learning.
            </p>

            <div className="about-focus-wrapper">
              <span className="focus-label-title">CORE FOCUS AREAS</span>
              <div className="focus-pills-grid">
                {focusAreas.map((area) => (
                  <div key={area} className="focus-pill-item">
                    <span className="pill-bullet">✦</span>
                    <span className="pill-text">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
