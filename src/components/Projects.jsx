import React, { useState } from 'react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'AI & GENAI', 'FULL-STACK', 'GIS & TOOLS'];

  const mainProjects = [
    {
      num: '01 / 05',
      title: 'Industrial Intelligence',
      subtitle: 'ET AI Hackathon 2.0 — 2nd Round Qualifier',
      domain: 'AI & GENAI',
      category: 'AI & GENAI',
      summary: 'AI-powered document Q&A application allowing natural language queries over uploaded PDFs with context-grounded responses.',
      features: [
        'PDF text parsing and chunk extraction via PyPDF',
        'Google Gemini API integration with prompt engineering for accurate context grounding',
        'Interactive Streamlit frontend interface supporting multi-document upload and chat history'
      ],
      stack: ['Python', 'Streamlit', 'Google Gemini API', 'PyPDF', 'Git'],
      repo: 'https://github.com/pvsatvika/Industrial-Intelligence'
    },
    {
      num: '02 / 05',
      title: 'AshaAssist / Murf-LiveKit Starter',
      subtitle: 'Voice AI Architecture',
      domain: 'AI & GENAI',
      category: 'AI & GENAI',
      summary: 'Real-time conversational voice agent starter architecture delivering low-latency audio interaction.',
      features: [
        'WebSocket audio streaming pipeline for real-time bidirectional communication',
        'Murf AI voice engine integration for dynamic text-to-speech rendering',
        'LiveKit streaming infrastructure setup supporting low-latency voice agent interactions'
      ],
      stack: ['Python', 'Murf AI', 'LiveKit', 'FastAPI', 'WebSockets'],
      repo: 'https://github.com/pvsatvika/murf-livekit-starter'
    },
    {
      num: '03 / 05',
      title: 'EXPERIA — Sell Experiences, Not Products',
      subtitle: 'Full-Stack Web Platform',
      domain: 'FULL-STACK',
      category: 'FULL-STACK',
      summary: 'Modern full-stack experience booking web platform designed for intuitive service discovery and structured catalog management.',
      features: [
        'Responsive client-side catalog browsing interface for experience categories',
        'Flask backend integration managing API request routing and session state',
        'Structured SQLite database schema handling booking reservations and user data'
      ],
      stack: ['JavaScript', 'HTML/CSS', 'Python', 'Flask', 'SQLite'],
      repo: 'https://github.com/pvsatvika/EXPERIA-Sell-Experiences.-Not-Products.'
    },
    {
      num: '04 / 05',
      title: 'PyroSentinel-GIS',
      subtitle: 'Geospatial Analytics Prototype',
      domain: 'GIS & TOOLS',
      category: 'GIS & TOOLS',
      summary: 'Geospatial monitoring prototype tracking industrial fire hazards, emergency incident logs, and spatial hazard maps.',
      features: [
        'Map layer rendering and spatial coordinate pinpointing for industrial sites',
        'Real-time incident data mapping enabling visual hazard assessments',
        'Emergency awareness dashboard facilitating rapid situational monitoring'
      ],
      stack: ['JavaScript', 'GIS APIs', 'Python', 'HTML/CSS'],
      repo: 'https://github.com/pvsatvika/pyrosentinel-gis'
    },
    {
      num: '05 / 05',
      title: 'BugTrace',
      subtitle: 'Telemetry & Diagnostics Pipeline',
      domain: 'GIS & TOOLS',
      category: 'GIS & TOOLS',
      summary: 'Telemetry and issue diagnostic pipeline for tracking software bug lifecycles and mobile log reports.',
      features: [
        'Structured issue logging capturing device telemetry and stack traces',
        'Diagnostic data collection with developer inspectable log feeds',
        'FastAPI backend endpoint pipeline tracking bug resolution status'
      ],
      stack: ['Python', 'FastAPI', 'Android Telemetry', 'SQLite'],
      repo: 'https://github.com/pvsatvika/BugTrace'
    }
  ];

  const moreProjects = [
    {
      title: 'Tourism Guide Web Application',
      domain: 'Team Web Project',
      summary: 'Single-page travel guide web application featuring destination budget estimators, attraction listings, and responsive UI navigation.',
      features: [
        'Budget estimator tool for regional travel route planning',
        'Flask backend routing integration for content delivery'
      ],
      stack: ['Flask', 'HTML/CSS', 'JavaScript'],
      repo: 'https://github.com/sruthi-r-22/Tourism_Guide'
    },
    {
      title: 'Student Study Planner',
      domain: 'C / Data Structures',
      summary: 'Menu-driven command-line tool designed to structure study schedules, organize task deadlines, and track assignment priorities.',
      features: [
        'Priority queue data structure implementation for deadline tracking',
        'Modular C file architecture with dynamic memory allocation'
      ],
      stack: ['C', 'Data Structures']
    },
    {
      title: 'Tic-Tac-Toe Game',
      domain: 'C & Python 2D Arrays',
      summary: 'Strategic two-player board game evaluating win conditions using multi-dimensional array evaluation algorithms.',
      features: [
        'Matrix win-condition evaluation logic across rows, columns, and diagonals',
        'Input validation and turn-based state management'
      ],
      stack: ['C', 'Python']
    }
  ];

  const filteredProjects = activeCategory === 'ALL'
    ? mainProjects
    : mainProjects.filter(p => p.category === activeCategory);

  return (
    <section className="editorial-projects-section" id="projects">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="section-title-group">
          <span className="section-meta-mono">01 // CASE STUDIES & REPOSITORIES</span>
          <h2 className="section-main-title">Featured Projects</h2>
          <p className="section-editorial-lead">
            Standardized technical breakdowns of production repositories across document AI, real-time voice architectures, full-stack web platforms, geospatial analytics, and telemetry pipelines.
          </p>
        </div>

        {/* Top Category Filter Tabs */}
        <div className="project-tabs-container">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`project-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Projects Grid */}
        <div className="projects-featured-grid">
          {filteredProjects.map((project) => (
            <article key={project.num} className="featured-editorial-card standardized-project-card">
              <div className="card-top-metadata-row">
                <span className="meta-badge-left">{project.domain}</span>
                <span className="meta-badge-right font-mono-num">{project.num}</span>
              </div>

              <h3 className="featured-card-title">{project.title}</h3>
              <p className="featured-card-subtitle">{project.subtitle}</p>

              <p className="featured-card-narrative">{project.summary}</p>

              {/* Key Features & Architecture */}
              <div className="project-architecture-block">
                <span className="arch-label">KEY FEATURES &amp; ARCHITECTURE:</span>
                <ul className="arch-bullets">
                  {project.features.map((feat, i) => (
                    <li key={i} className="arch-bullet-item">
                      <span className="arch-bullet-dash">—</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applied Tech Stack */}
              <div className="featured-card-pills">
                {project.stack.map((t) => (
                  <span key={t} className="project-tech-pill">{t}</span>
                ))}
              </div>

              {/* Source Code Direct Link Button */}
              {project.repo && (
                <div className="featured-card-footer">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-github-link source-code-btn"
                  >
                    Source Code ↗
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* More Projects (3-Column Subsection) */}
        <div className="more-projects-section">
          <div className="more-projects-header">
            <span className="section-meta-mono">ADDITIONAL WORK &amp; REPOSITORIES</span>
            <h3 className="more-projects-title">More Projects</h3>
          </div>

          <div className="more-projects-grid">
            {moreProjects.map((item, idx) => (
              <div key={idx} className="more-project-card">
                <div className="more-card-tag">{item.domain}</div>
                <h4 className="more-card-title">{item.title}</h4>
                <p className="more-card-desc">{item.summary}</p>
                
                <div className="project-architecture-block compact-arch">
                  <ul className="arch-bullets">
                    {item.features.map((feat, i) => (
                      <li key={i} className="arch-bullet-item">
                        <span className="arch-bullet-dash">—</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="more-card-tech flex-wrap">
                  {item.stack.map((t) => (
                    <span key={t} className="mini-tech-tag">{t}</span>
                  ))}
                </div>

                {item.repo && (
                  <a 
                    href={item.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="more-card-link"
                  >
                    Source Code ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
