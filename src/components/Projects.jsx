import React from 'react';

export default function Projects() {
  const projectsList = [
    {
      num: '01',
      name: 'EXPERIA — Sell Experiences, Not Products',
      tag: 'Full-Stack Web Platform',
      oneLiner: 'A web application built to facilitate listing, discovery, and booking of experience-driven service offerings.',
      workDone: 'Designed and implemented the web application structure, decoupling traditional e-commerce product listings from experience-based service management.',
      stack: ['React', 'Node.js', 'Express', 'JavaScript'],
      github: 'https://github.com/pvsatvika/EXPERIA-Sell-Experiences.-Not-Products'
    },
    {
      num: '02',
      name: 'AshaAssist / Murf-LiveKit Starter',
      tag: 'Voice AI Architecture',
      oneLiner: 'A real-time voice AI starter project built with LiveKit Agents and voice synthesis capabilities.',
      workDone: 'Integrated LiveKit inference audio streaming, Gemma open LLM models, and acoustic turn detection to explore responsive conversational agent workflows.',
      stack: ['Python', 'LiveKit', 'Murf AI', 'Voice AI'],
      github: 'https://github.com/pvsatvika/murf-livekit-starter'
    },
    {
      num: '03',
      name: 'PyroSentinel-GIS',
      tag: 'Geospatial Analytics',
      oneLiner: 'A Geographic Information System (GIS) application for spatial tracking and hazard monitoring.',
      workDone: 'Developed spatial data mapping logic to visualize geographic coordinates and layer environmental data for monitoring tasks.',
      stack: ['Python', 'GIS', 'Spatial Data Analysis'],
      github: 'https://github.com/pvsatvika/pyrosentinel-gis'
    },
    {
      num: '04',
      name: 'Industrial Intelligence',
      tag: 'Document Intelligence Prototype',
      oneLiner: 'An AI document intelligence application that enables natural language querying over uploaded industrial PDFs.',
      workDone: 'Implemented document parsing using PyPDF, text chunking, and natural language question answering powered by Google’s Gemini API with source citations.',
      stack: ['Python', 'Google Gemini AI', 'PyPDF', 'Streamlit'],
      github: 'https://github.com/pvsatvika/Industrial-Intelligence'
    },
    {
      num: '05',
      name: 'BugTrace',
      tag: 'Android Telemetry Diagnostics',
      oneLiner: 'An end-to-end diagnostic utility built for device telemetry analysis and automated bug reproduction reporting.',
      workDone: 'Captured physical Android device telemetry (battery, CPU activity, network state) and routed signals to a local FastAPI backend to generate developer bug reports.',
      stack: ['Python', 'FastAPI', 'Android Telemetry', 'SQLite'],
      github: 'https://github.com/pvsatvika/BugTrace'
    }
  ];

  return (
    <section className="editorial-projects-section" id="projects">
      <div className="editorial-container">
        <div className="section-title-group">
          <span className="section-meta-mono">01 // CASE STUDIES & SOFTWARE</span>
          <h2 className="section-main-title">Selected Projects</h2>
          <p className="section-editorial-lead">
            Concise case-study introductions to practical applications, voice agents, GIS tools, and AI prototypes built across real repositories.
          </p>
        </div>

        <div className="projects-single-block-list">
          {projectsList.map((project) => (
            <article key={project.num} className="single-project-card">
              <div className="card-editorial-header">
                <div className="card-num-badge">
                  <span className="proj-num">{project.num}</span>
                  <span className="proj-tag-badge">{project.tag}</span>
                </div>
                <h3 className="proj-title">{project.name}</h3>
              </div>

              <div className="card-editorial-body">
                <p className="proj-one-liner">{project.oneLiner}</p>
                
                <div className="proj-work-summary">
                  <span className="work-label">Implementation Context:</span>
                  <p className="work-text">{project.workDone}</p>
                </div>

                <div className="card-editorial-footer">
                  <div className="proj-tech-line">
                    <span className="tech-meta-label">Applied Technologies:</span>
                    <span className="tech-meta-values">{project.stack.join(' • ')}</span>
                  </div>

                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="proj-github-button"
                  >
                    View Repository on GitHub ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
