import React from 'react';

export default function Skills() {
  const coreSkills = [
    {
      group: 'Programming & Web Fundamentals',
      items: ['Python', 'C', 'HTML', 'CSS', 'JavaScript']
    },
    {
      group: 'Frameworks & Databases',
      items: ['Flask', 'MySQL', 'SQLite']
    },
    {
      group: 'Tools & Development',
      items: ['Git', 'GitHub', 'VS Code']
    },
    {
      group: 'Computer Science Core',
      items: ['Data Structures & Algorithms (DSA)', 'Object-Oriented Programming (OOP)', 'DBMS']
    },
    {
      group: 'Artificial Intelligence & ML',
      items: ['AI / Machine Learning', 'Generative AI', 'Prompt Engineering']
    }
  ];

  const appliedTechnologies = [
    'React',
    'Vite',
    'Node.js',
    'Express',
    'REST APIs',
    'FastAPI',
    'LiveKit',
    'Murf AI',
    'Streamlit',
    'PyPDF',
    'GIS Data Analysis'
  ];

  return (
    <section className="editorial-skills-section" id="skills">
      <div className="editorial-container">
        <div className="section-title-group">
          <span className="section-meta-mono">03 // TECHNICAL FOUNDATION & TOOLING</span>
          <h2 className="section-main-title">Skills & Technologies</h2>
          <p className="section-editorial-lead">
            A clear distinction between my core technical foundation and the broader set of tools applied across various project stacks.
          </p>
        </div>

        {/* SUBSECTION A: CORE SKILLS */}
        <div className="skills-level-block core-skills-block">
          <div className="level-header">
            <span className="level-badge">LEVEL A</span>
            <h3 className="level-title">Core Skills</h3>
            <p className="level-desc">
              Technologies, programming languages, and computer science fundamentals that form my primary technical background.
            </p>
          </div>

          <div className="core-skills-grid">
            {coreSkills.map((cat) => (
              <div key={cat.group} className="core-skill-card">
                <h4 className="core-group-title">{cat.group}</h4>
                <ul className="core-item-list">
                  {cat.items.map((item) => (
                    <li key={item} className="core-item">
                      <span className="core-bullet">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* SUBSECTION B: WORKED WITH / APPLIED IN PROJECTS */}
        <div className="skills-level-block applied-skills-block">
          <div className="level-header">
            <span className="level-badge secondary-badge">LEVEL B</span>
            <h3 className="level-title">Worked With / Applied in Projects</h3>
            <p className="level-desc">
              Technologies I’ve worked with while building projects and experimenting with different stacks.
            </p>
          </div>

          <div className="applied-tech-chips">
            {appliedTechnologies.map((tech) => (
              <span key={tech} className="applied-chip">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
