import React from 'react';

export default function Achievements() {
  const achievements = [
    {
      title: 'Turing Cup 2026',
      type: 'Technical Competition',
      details: 'Participated in the Turing Cup 2026 challenge.'
    },
    {
      title: 'ET AI Hackathon 2.0',
      type: 'Hackathon',
      details: 'Engaged in AI solution development and problem-solving.'
    },
    {
      title: 'Aspire Women x Logitech Women Hackathon',
      type: 'Hackathon',
      details: 'Collaborative hackathon experience focused on software innovation.'
    },
    {
      title: 'Smart India Internal Hackathon',
      type: 'Institutional Hackathon',
      details: 'Internal hackathon round developing solutions for engineering challenges.'
    },
    {
      title: 'EXPERIA Hackathon Project',
      type: 'Project & Hackathon Showcase',
      details: 'Designed and presented EXPERIA experience platform concept.'
    },
    {
      title: 'Internshala Hackathons',
      type: 'Hackathons',
      details: 'Participated in software and web application challenges.'
    },
    {
      title: 'AI 100x Programme & Speed Mentoring',
      type: 'Mentorship & Upskilling',
      details: 'Enrolled in AI 100x learning initiatives and professional speed mentoring.'
    },
    {
      title: 'Google AI Quiz & TEDx Participation',
      type: 'Technical Quiz & Engagement',
      details: 'Participated in technical quizzes and community speaker events.'
    }
  ];

  return (
    <section className="achievements-section" id="achievements">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">04 // HACKATHONS & ACHIEVEMENTS</span>
          <h2 className="section-title">Engagements & Hackathons</h2>
          <p className="section-subtitle">
            Timeline of hackathons, technical competitions, quizzes, and technical learning initiatives.
          </p>
        </div>

        <div className="timeline">
          {achievements.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {index !== achievements.length - 1 && <div className="marker-line"></div>}
              </div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="item-title">{item.title}</h3>
                  <span className="item-type">{item.type}</span>
                </div>
                <p className="item-details">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
