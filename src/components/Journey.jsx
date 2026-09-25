import React from 'react';

export default function Journey() {
  const eventsGrid = [
    {
      year: '2026',
      category: 'HACKATHON FINALIST',
      title: 'ET AI Hackathon 2.0',
      rolePill: '2nd Round Qualifier',
      projectBadge: 'Industrial Intelligence',
      description: 'Finalist & 2nd Round Qualifier with Industrial Intelligence PDF document Q&A engine powered by Google Gemini API.'
    },
    {
      year: '2026',
      category: 'COMPETITIVE CODING',
      title: 'Turing Cup 2026',
      rolePill: 'Participant',
      projectBadge: 'VNR VJIET',
      description: 'Competitive Programming Participant at VNR VJIET tackling complex algorithmic and data structure problems.'
    },
    {
      year: '2026',
      category: 'HACKATHON PARTICIPANT',
      title: 'Women Who Aspire Hackathon',
      rolePill: 'Round 1 Attempted',
      projectBadge: 'Online MCQ Round',
      description: 'Attempted Round 1 (Online MCQ Round) testing core Computer Science fundamentals and problem-solving.'
    },
    {
      year: '2026',
      category: 'NATIONAL HACKATHON',
      title: 'Adobe Unstop Hackathon',
      rolePill: 'Official Participant',
      projectBadge: 'Unstop Round',
      description: 'Participant in national university hackathon challenge solving real-world software engineering problems.'
    },
    {
      year: '2026',
      category: 'NATIONAL QUIZ',
      title: 'Campus Crew AI Quiz 2026',
      rolePill: 'Quiz Participant',
      projectBadge: 'Unstop / Google AI Quiz',
      description: 'Unstop / Google AI Quiz Participant evaluating machine learning algorithms and computer science concepts.'
    }
  ];

  const additionalEngagements = [
    'BVRIT Synergies Code & Escape',
    'Speed Mentoring Programme Selection',
    'TEDx BVRITH',
    'L2 Pro Certification',
    'Fusion Rounds at BVRIT Hyderabad'
  ];

  return (
    <section className="editorial-journey-section" id="journey">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="section-title-group">
          <span className="section-meta-mono">03 // ACHIEVEMENTS & TIMELINE</span>
          <h2 className="section-main-title">Achievements & Journey</h2>
          <p className="section-editorial-lead">
            Chronological record of competitive hackathons, algorithm contests, developer quizzes, and technical milestones.
          </p>
        </div>

        {/* Chronological Timeline Grid */}
        <div className="journey-events-grid">
          {eventsGrid.map((ev, index) => (
            <article key={index} className="journey-event-card">
              <div className="event-card-top">
                <span className="event-cat-tag">{ev.category}</span>
                <span className="event-date-tag">{ev.year}</span>
              </div>

              <h3 className="event-title">{ev.title}</h3>
              <p className="event-desc">{ev.description}</p>

              <div className="event-badges-row">
                <span className="event-pill role-pill">{ev.rolePill}</span>
                <span className="event-pill project-badge">{ev.projectBadge}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Additional Engagements Strip */}
        <div className="journey-engagements-strip">
          <span className="strip-title">ADDITIONAL ENGAGEMENTS & ACTIVITIES:</span>
          <div className="strip-pills">
            {additionalEngagements.map((item) => (
              <span key={item} className="strip-pill-item">
                // {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
