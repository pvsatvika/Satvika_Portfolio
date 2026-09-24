import React, { useState } from 'react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const categories = ['All Projects', 'AI & ML', 'Voice & GIS', 'Web Platforms'];

  const mainProjects = [
    {
      num: '01',
      title: 'Industrial Intelligence — AI-Powered Document Q&A System',
      domain: 'ET AI Hackathon 2.0',
      category: 'AI & ML',
      overview: 'Intelligent PDF Q&A engine that extracts document context and delivers grounded natural language answers.',
      features: [
        'PDF text extraction and chunk parsing using PyPDF',
        'Google Gemini API integration with custom prompt engineering',
        'Interactive Streamlit frontend interface for seamless PDF uploads'
      ],
      stack: ['Python', 'Streamlit', 'Google Gemini API', 'PyPDF', 'Git'],
      repo: 'https://github.com/pvsatvika/Industrial-Intelligence'
    },
    {
      num: '02',
      title: 'AshaAssist / Murf-LiveKit Starter',
      domain: 'Voice AI Architecture',
      category: 'Voice & GIS',
      overview: 'Real-time voice agent starter kit delivering low-latency conversational audio.',
      features: [
        'WebSockets audio streaming pipeline for real-time interaction',
        'Murf AI voice synthesis integration',
        'LiveKit infrastructure setup for low-latency voice agents'
      ],
      stack: ['Python', 'Murf AI', 'LiveKit', 'FastAPI', 'WebSockets'],
      repo: 'https://github.com/pvsatvika/murf-livekit-starter'
    },
    {
      num: '03',
      title: 'EXPERIA — Sell Experiences, Not Products',
      domain: 'Full-Stack Web Platform',
      category: 'Web Platforms',
      overview: 'Full-stack experience booking web platform designed for intuitive service exploration.',
      features: [
        'Responsive catalog browsing interface for experience categories',
        'Flask backend API routing and session management',
        'Structured SQLite database schema for booking records'
      ],
      stack: ['JavaScript', 'HTML/CSS', 'Python', 'Flask', 'SQLite'],
      repo: 'https://github.com/pvsatvika/EXPERIA-Sell-Experiences.-Not-Products.'
    },
    {
      num: '04',
      title: 'PyroSentinel-GIS',
      domain: 'Geospatial Analytics',
      category: 'Voice & GIS',
      overview: 'Geospatial monitoring prototype tracking industrial fire risks and incident logs.',
      features: [
        'Interactive map layer rendering and spatial coordinate tracking',
        'Real-time incident data mapping for hazard visualization',
        'Emergency awareness dashboard for industrial site safety'
      ],
      stack: ['JavaScript', 'GIS APIs', 'Python', 'HTML/CSS'],
      repo: 'https://github.com/pvsatvika/pyrosentinel-gis'
    },
    {
      num: '05',
      title: 'BugTrace',
      domain: 'Diagnostics Pipeline',
      category: 'AI & ML',
      overview: 'Telemetry and issue diagnostic framework for monitoring bug lifecycles.',
      features: [
        'Structured issue logging and crash report capture',
        'Diagnostic data collection with inspectable log entries',
        'FastAPI backend status tracking pipeline'
      ],
      stack: ['Python', 'FastAPI', 'Android Telemetry', 'SQLite'],
      repo: 'https://github.com/pvsatvika/BugTrace'
    },
    {
      num: '06',
      title: 'Tourism Guide Web Application (Team Project)',
      domain: 'Team Web Project',
      category: 'Web Platforms',
      overview: 'Interactive single-page travel web app for destination exploration.',
      features: [
        'Interactive budget estimators for regional trip planning',
        'Seasonal travel attraction listings with responsive UI layout',
        'Flask micro-service backend routing'
      ],
      stack: ['Flask', 'HTML/CSS', 'JavaScript', 'Git'],
      repo: 'https://github.com/sruthi-r-22/Tourism_Guide'
    }
  ];

  const additionalProjects = [
    {
      title: 'Student Study Planner (C / Data Structures)',
      domain: 'C Language CLI',
      overview: 'Menu-driven command-line tool to structure study schedules and prioritize task deadlines.',
      features: [
        'Priority queue implementation for deadline management',
        'Modular C file structure and dynamic memory allocation'
      ],
      stack: ['C', 'Data Structures']
    },
    {
      title: 'Tic-Tac-Toe Game (C & Python 2D Arrays)',
      domain: 'Logic Game',
      overview: 'Strategic board game evaluating win conditions using multi-dimensional array logic.',
      features: [
        'Matrix evaluation algorithm for rows, columns, and diagonals',
        'Input validation and turn-based state tracking'
      ],
      stack: ['C', 'Python']
    }
  ];

  const filteredProjects = activeCategory === 'All Projects'
    ? mainProjects
    : mainProjects.filter(p => p.category === activeCategory);

  return (
    <section className="editorial-projects-section" id="projects">
      <div className="editorial-container">
        {/* Section Title Header */}
        <div className="section-title-group">
          <span className="section-meta-mono">05 // ENGINEERING PROJECTS</span>
          <h2 className="section-main-title">Projects & System Architecture</h2>
          <p className="section-editorial-lead">
            Standardized technical overviews of practical applications built across document intelligence, voice agents, full-stack platforms, geospatial tracking, and system diagnostics.
          </p>
        </div>

        {/* Category Filter System */}
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

        {/* Standardized Featured Projects Grid */}
        <div className="projects-featured-grid">
          {filteredProjects.map((project) => (
            <article key={project.num} className="featured-editorial-card standardized-project-card">
              <div className="card-top-metadata-row">
                <span className="meta-badge-left">{project.domain}</span>
                <span className="meta-badge-right">{project.num}</span>
              </div>

              <h3 className="featured-card-title">{project.title}</h3>

              <p className="featured-card-narrative">{project.overview}</p>

              {/* Key Features & Architecture Bullet Points */}
              <div className="project-architecture-block">
                <span className="arch-label">KEY FEATURES & ARCHITECTURE:</span>
                <ul className="arch-bullets">
                  {project.features.map((feat, i) => (
                    <li key={i} className="arch-bullet-item">
                      <span className="arch-bullet-dash">—</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applied Technologies Pill Badges */}
              <div className="featured-card-pills">
                {project.stack.map((t) => (
                  <span key={t} className="project-tech-pill">{t}</span>
                ))}
              </div>

              {/* GitHub Repository Link */}
              {project.repo && (
                <div className="featured-card-footer">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-github-link"
                  >
                    View Code on GitHub ↗
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Additional Technical Work */}
        <div className="more-projects-section">
          <div className="more-projects-header">
            <span className="section-meta-mono">ADDITIONAL TECHNICAL WORK</span>
            <h3 className="more-projects-title">Foundational C & Logic Projects</h3>
          </div>

          <div className="more-projects-grid">
            {additionalProjects.map((item, idx) => (
              <div key={idx} className="more-project-card">
                <div className="more-card-tag">{item.domain}</div>
                <h4 className="more-card-title">{item.title}</h4>
                <p className="more-card-desc">{item.overview}</p>
                
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
