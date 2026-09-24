import React from 'react';

export default function About() {
  const highlightCards = [
    {
      title: 'Analytical Problem Solving',
      desc: 'Grounded in C, Python, and core data structures to design efficient algorithms.'
    },
    {
      title: 'Interactive AI',
      desc: 'Translating LLMs and voice APIs into responsive, user-centered software tools.'
    },
    {
      title: 'Rapid Prototyping',
      desc: 'Building functional end-to-end applications during fast-paced hackathon challenges.'
    }
  ];

  return (
    <section className="editorial-about-section" id="about">
      <div className="editorial-container">
        {/* Balanced 2-Column Split inside Deep Near-Black (#151515) Contrast Block */}
        <div className="about-dark-card-split">
          {/* Left Column: Core Engineering Philosophy */}
          <div className="about-left-bio-col">
            <span className="section-meta-mono text-warm">02 // PROFILE & PHILOSOPHY</span>
            <h2 className="about-split-title">Bridging AI Models & Practical Interfaces</h2>

            <p className="about-bio-text">
              As a B.Tech Artificial Intelligence & Machine Learning student at BVRIT Hyderabad, my engineering philosophy revolves around turning theoretical algorithmic concepts into robust, real-world software applications. I believe powerful ML models are only as valuable as the interfaces and systems through which users interact with them.
            </p>

            <p className="about-bio-subtext">
              Whether architecting natural language document Q&A pipelines with foundation models, streaming real-time voice telemetry via LiveKit, or deploying GIS geospatial monitoring dashboards, I focus on clean code structure, modular API design, and seamless user experiences.
            </p>

            {/* 3 Mini Highlight Cards */}
            <div className="mindset-cards-grid">
              {highlightCards.map((item) => (
                <div key={item.title} className="mindset-card">
                  <span className="mindset-icon">//</span>
                  <h4 className="mindset-title">{item.title}</h4>
                  <p className="mindset-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Development Snapshot & Academic Foundation */}
          <div className="about-right-dashboard-col">
            <span className="dashboard-header-tag">DEVELOPMENT SNAPSHOT & ACADEMIC FOUNDATION</span>

            {/* Current Academic Status Card */}
            <div className="dashboard-card highlight-degree-card">
              <div className="dash-card-header">
                <span className="dash-tag">ACADEMIC STATUS</span>
                <span className="dash-badge gpa-badge">9.85 CGPA</span>
              </div>
              <h3 className="dash-degree-title">B.Tech — CSE (AI & ML)</h3>
              <p className="dash-institution">BVRIT Hyderabad College of Engineering for Women</p>
              <span className="dash-year">2025 – 2029 • Hyderabad, Telangana, India</span>
            </div>

            {/* Domain Focus Card */}
            <div className="dashboard-card training-card">
              <div className="dash-card-header">
                <span className="dash-tag">PRIMARY DOMAIN FOCUS</span>
                <span className="dash-badge status-active-badge">Core Specializations</span>
              </div>
              <h4 className="dash-card-subtitle">AI Systems & Intelligent Interfaces</h4>
              <p className="dash-card-desc">
                Generative AI workflows, context-grounded document analysis tools, real-time voice agents, and full-stack web platforms.
              </p>
            </div>

            {/* Technical Mindset & Principles Box */}
            <div className="dashboard-summary-box">
              <span className="summary-label">ENGINEERING MINDSET</span>
              <p className="summary-statement">
                Prioritizing clean code maintainability, modular backend architecture, strict data validation, and intuitive design standards across every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
