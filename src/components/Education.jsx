import React from 'react';

export default function Education() {
  const eduHistory = [
    {
      institution: 'BVRIT Hyderabad College of Engineering for Women',
      degree: 'B.Tech — Artificial Intelligence & Machine Learning',
      period: '2025 – 2029',
      cgpa: '9.85 CGPA',
      location: 'Hyderabad, India'
    },
    {
      institution: 'Resonance Junior College',
      degree: 'MPC (Mathematics, Physics, Chemistry)',
      period: '2023 – 2025',
      location: 'Telangana, India'
    }
  ];

  return (
    <section className="editorial-education-section" id="education">
      <div className="editorial-container">
        <div className="section-title-group">
          <span className="section-meta-mono">06 // ACADEMIC BACKGROUND</span>
          <h2 className="section-main-title">Education</h2>
        </div>

        <div className="education-compact-grid">
          {eduHistory.map((edu, idx) => (
            <div key={idx} className="education-card">
              <div className="edu-top-row">
                <span className="edu-period">{edu.period}</span>
                {edu.cgpa && <span className="edu-cgpa-badge">{edu.cgpa}</span>}
              </div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <span className="edu-location">{edu.location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
