import React from 'react';

export default function Interests() {
  const interestsList = [
    {
      num: '01',
      tag: 'AI & AUDIO',
      title: 'Generative AI & Conversational Interfaces',
      description: 'Building conversational audio agents, custom LLM tool integration, context-grounded document processing pipelines, and real-time streaming architectures using LiveKit and Google Gemini APIs.'
    },
    {
      num: '02',
      tag: 'WEB & ARCHITECTURE',
      title: 'Full-Stack Web Architecture',
      description: 'Designing responsive frontend user interfaces paired with modular Python (Flask / FastAPI) APIs, session management, and structured relational database models (SQLite / MySQL).'
    },
    {
      num: '03',
      tag: 'ALGORITHMS & LOGIC',
      title: 'Algorithmic Problem Solving & Competitive Coding',
      description: 'Engaging in algorithm challenges (Turing Cup), C memory management, data structure optimizations, and active hackathon problem-solving sprints.'
    }
  ];

  return (
    <section className="editorial-interests-section" id="interests">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="section-title-group">
          <span className="section-meta-mono">08 // SPECIALIZATIONS & FOCUS</span>
          <h2 className="section-main-title">Interests & Specializations</h2>
          <p className="section-editorial-lead">
            Primary technical domains and active areas of engineering curiosity guiding my projects and research.
          </p>
        </div>

        {/* 3-Column Dedicated Grid */}
        <div className="interests-3col-grid">
          {interestsList.map((item) => (
            <div key={item.num} className="interest-editorial-card">
              <div className="interest-card-header">
                <span className="interest-num">{item.num}</span>
                <span className="interest-tag">{item.tag}</span>
              </div>
              <h3 className="interest-title">{item.title}</h3>
              <p className="interest-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
