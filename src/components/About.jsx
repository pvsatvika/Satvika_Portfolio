import React from 'react';

export default function About() {
  const mindsetCards = [
    {
      title: 'Analytical Foundations',
      desc: 'Rooted in Python, C, core data structures, and algorithmic logic to design scalable solutions.'
    },
    {
      title: 'Interactive AI Systems',
      desc: 'Translating LLMs, document parsers, and voice APIs into functional, responsive software tools.'
    },
    {
      title: 'Competitive Drive',
      desc: 'Thriving in hackathons, algorithm challenges, and rapid prototyping sprints under real-world constraints.'
    }
  ];

  return (
    <section className="editorial-about-section" id="about">
      <div className="editorial-container">
        {/* Deep Near-Black (#151515) Contrast Card Block */}
        <div className="about-dark-card-split">
          {/* Left Column: Core Engineering Mindset */}
          <div className="about-left-bio-col">
            <span className="section-meta-mono text-warm">02 // PROFILE & MINDSET</span>
            <h2 className="about-split-title">Bridging Complex AI Workflows & Usable Interfaces</h2>

            <p className="about-bio-text">
              As a Computer Science and Engineering student specializing in Artificial Intelligence & Machine Learning at BVRIT Hyderabad, my technical focus centers on transforming advanced algorithmic models into accessible, reliable software applications. I believe engineering practical AI requires bridging data pipelines with clean backend routing and responsive user interfaces.
            </p>

            <p className="about-bio-subtext">
              From context-grounded document analysis tools powered by foundation models to real-time WebSocket audio streaming for conversational voice agents, I prioritize modular architecture, strict data validation, and intuitive design standards across every project I engineer.
            </p>

            {/* 3 Mini Cards */}
            <div className="mindset-cards-grid">
              {mindsetCards.map((item) => (
                <div key={item.title} className="mindset-card">
                  <span className="mindset-icon">//</span>
                  <h4 className="mindset-title">{item.title}</h4>
                  <p className="mindset-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic Snapshot */}
          <div className="about-right-dashboard-col">
            <span className="dashboard-header-tag">ACADEMIC SNAPSHOT & BASE</span>

            {/* Undergraduate Degree Card */}
            <div className="dashboard-card highlight-degree-card">
              <div className="dash-card-header">
                <span className="dash-tag">UNDERGRADUATE DEGREE</span>
                <span className="dash-badge gpa-badge">9.85 CGPA</span>
              </div>
              <h3 className="dash-degree-title">B.Tech — CSE (AI &amp; ML)</h3>
              <p className="dash-institution">BVRIT Hyderabad College of Engineering for Women</p>
              <span className="dash-year">2025 – 2029 • Hyderabad, Telangana, India</span>
            </div>

            {/* Intermediate Education Card */}
            <div className="dashboard-card training-card">
              <div className="dash-card-header">
                <span className="dash-tag">INTERMEDIATE EDUCATION</span>
                <span className="dash-badge status-active-badge">MPC Track</span>
              </div>
              <h4 className="dash-card-subtitle">Resonance Junior College</h4>
              <p className="dash-card-desc">
                Completed 2 Years of Intermediate coursework in Mathematics, Physics, and Chemistry.
              </p>
            </div>

            {/* Base Location & Primary Focus Summary Box */}
            <div className="dashboard-summary-box">
              <span className="summary-label">BASE LOCATION & FOCUS</span>
              <p className="summary-statement">
                Based in Hyderabad, Telangana, India. Focused on developing production-ready AI applications, conversational voice agents, and full-stack software systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
