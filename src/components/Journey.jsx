import React from 'react';

export default function Journey() {
  const eventsGrid = [
    {
      title: 'ET AI Hackathon 2.0',
      category: 'HACKATHON',
      rolePill: 'Finalist & Developer',
      projectBadge: 'Industrial Intelligence',
      date: '2025',
      description: 'Finalist & Creator of Industrial Intelligence document Q&A engine powered by Google Gemini API.'
    },
    {
      title: 'Women Who Aspire Hackathon',
      category: 'HACKATHON',
      rolePill: 'Round 1 Cleared',
      projectBadge: 'Online MCQ Round',
      date: '2026',
      description: 'Cleared Round 1 (Online MCQ Round) evaluating core Computer Science fundamentals and problem-solving.'
    },
    {
      title: 'Adobe Unstop Hackathon',
      category: 'HACKATHON',
      rolePill: 'Official Participant',
      projectBadge: 'Unstop Round',
      date: '2026',
      description: 'Official Participant in national university hackathon challenge solving engineering problems.'
    },
    {
      title: 'Turing Cup 2026',
      category: 'COMPETITION',
      rolePill: 'Competitive Programmer',
      projectBadge: 'VNR VJIET',
      date: '2026',
      description: 'Competitive Programming Participant at VNR VJIET tackling complex algorithmic challenges.'
    },
    {
      title: 'Campus Crew AI Quiz 2026',
      category: 'ENGAGEMENT',
      rolePill: 'Quiz Participant',
      projectBadge: 'Unstop / Google AI Quiz',
      date: '2026',
      description: 'Unstop / Google AI Quiz Participant testing advanced machine learning and computer science concepts.'
    },
    {
      title: 'BVRIT Synergies Code & Escape',
      category: 'COMPETITION',
      rolePill: 'Code Challenge Participant',
      projectBadge: 'BVRIT Synergies',
      date: '2026',
      description: 'Coding Challenge Participant engaged in rapid problem solving and algorithmic execution.'
    }
  ];

  const additionalEngagements = [
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
          <span className="section-meta-mono">06 // ACHIEVEMENTS & MILESTONES</span>
          <h2 className="section-main-title">Hackathons & Achievements</h2>
          <p className="section-editorial-lead">
            Record of competitive hackathons, algorithm contests, developer quizzes, and technical achievements.
          </p>
        </div>

        {/* Grid Layout for Events */}
        <div className="journey-events-grid">
          {eventsGrid.map((ev) => (
            <article key={ev.title} className="journey-event-card">
              <div className="event-card-top">
                <span className="event-cat-tag">{ev.category}</span>
                <span className="event-date-tag">{ev.date}</span>
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
          <span className="strip-title">ADDITIONAL ACHIEVEMENTS & ACTIVITIES:</span>
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
