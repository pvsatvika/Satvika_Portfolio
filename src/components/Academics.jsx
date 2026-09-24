import React from 'react';

export default function Academics() {
  const academicList = [
    {
      level: 'UNDERGRADUATE DEGREE',
      degree: 'B.Tech in Computer Science and Engineering (Artificial Intelligence & Machine Learning)',
      institution: 'BVRIT Hyderabad College of Engineering for Women',
      period: '2025 – 2029',
      location: 'Hyderabad, Telangana, India',
      gpa: 'CGPA: 9.85',
      summary: 'Specializing in AI/ML fundamentals, data structures, algorithm design, neural networks, and practical software engineering.'
    },
    {
      level: 'INTERMEDIATE EDUCATION',
      degree: 'Intermediate (10+2) — MPC Track',
      institution: 'Resonance Junior College',
      period: '2023 – 2025',
      location: 'Telangana, India',
      summary: 'Focused on core Mathematics, Physics, and Chemistry, building a rigorous analytical foundation for computer engineering.'
    }
  ];

  return (
    <section className="editorial-academics-section" id="academics">
      <div className="editorial-container">
        <div className="section-title-group">
          <span className="section-meta-mono">03 // ACADEMIC FOUNDATION</span>
          <h2 className="section-main-title">Academics & Education</h2>
          <p className="section-editorial-lead">
            Academic achievements grounded in Computer Science, Artificial Intelligence, Mathematics, and Analytical Problem Solving.
          </p>
        </div>

        <div className="academics-grid academics-2col-grid">
          {academicList.map((item, idx) => (
            <div key={idx} className="academic-editorial-card">
              <div className="acad-card-header">
                <span className="acad-level-tag">{item.level}</span>
                {item.gpa && <span className="acad-gpa-badge">{item.gpa}</span>}
              </div>
              <h3 className="acad-degree-title">{item.degree}</h3>
              <p className="acad-institution">{item.institution}</p>
              <div className="acad-meta-row">
                <span className="acad-period">{item.period}</span>
                <span className="acad-sep">•</span>
                <span className="acad-location">{item.location}</span>
              </div>
              <p className="acad-summary-text">{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
