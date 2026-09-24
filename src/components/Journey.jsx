import React from 'react';

export default function Journey() {
  const hackathons = [
    { name: 'Turing Cup 2K26', desc: 'Technical coding competition challenge.' },
    { name: 'ET AI Hackathon 2.0', desc: 'AI solution development and problem solving.' },
    { name: 'Aspire Women x Logitech Women Hackathon', desc: 'Collaborative hackathon event for women in tech.' },
    { name: 'Internshala Hackathons', desc: 'Web and software challenge entries.' },
    { name: 'Adobe Hackathon — Unstop', desc: 'National technical hackathon round participation.' }
  ];

  const programmes = [
    { name: 'Speed Mentoring Programme', desc: 'Interactive mentoring session with engineering mentors.' },
    { name: 'AI 100x Programme', desc: 'Selected for and enrolled in AI 100x upskilling track.' },
    { name: 'TEDx', desc: 'Attended TEDx technical and inspirational speaker forum.' },
    { name: 'Google AI Quiz', desc: 'Participated in Google AI technical assessment quiz.' },
    { name: 'Campus Crew Quiz 2026', desc: 'Participated in campus artificial intelligence quiz.' },
    { name: 'Virality Hyderabad — Synergies / Code & Escape', desc: 'Technical problem-solving and coding challenge.' },
    { name: 'L2 Pro', desc: 'Completed L2 Pro technical training track.' },
    { name: 'Fusion Rounds at BVRIT Hyderabad', desc: 'Participated in college technical innovation rounds.' }
  ];

  return (
    <section className="editorial-journey-section" id="journey">
      <div className="editorial-container">
        <div className="section-title-group">
          <span className="section-meta-mono">04 // ENGAGEMENTS & EXPLORATION</span>
          <h2 className="section-main-title">Journey & Activities</h2>
          <p className="section-editorial-lead">
            Categorized technical activities, hackathons, coding challenges, and community learning tracks I have engaged with.
          </p>
        </div>

        <div className="journey-groups-container">
          {/* CATEGORY 1: HACKATHONS */}
          <div className="journey-category-block">
            <div className="journey-category-header">
              <span className="journey-cat-badge">HACKATHONS & COMPETITIONS</span>
              <h3 className="journey-cat-title">Hackathons & Coding Challenges</h3>
            </div>
            <div className="journey-cards-grid">
              {hackathons.map((h) => (
                <div key={h.name} className="journey-editorial-card">
                  <span className="card-bullet">✦</span>
                  <div className="card-info">
                    <h4 className="card-item-name">{h.name}</h4>
                    <p className="card-item-desc">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CATEGORY 2: PROGRAMMES & ACTIVITIES */}
          <div className="journey-category-block">
            <div className="journey-category-header">
              <span className="journey-cat-badge">PROGRAMMES & COMMUNITY</span>
              <h3 className="journey-cat-title">Programmes & Technical Activities</h3>
            </div>
            <div className="journey-cards-grid">
              {programmes.map((p) => (
                <div key={p.name} className="journey-editorial-card">
                  <span className="card-bullet">✦</span>
                  <div className="card-info">
                    <h4 className="card-item-name">{p.name}</h4>
                    <p className="card-item-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
