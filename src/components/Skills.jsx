import React from 'react';

export default function Skills() {
  const skillCards = [
    {
      id: 'ai-ml',
      tag: '// 01',
      badge: 'AI & INTELLIGENCE',
      title: 'Intelligent Systems & AI',
      items: [
        'Machine Learning Fundamentals',
        'Generative AI Workflows',
        'Google Gemini API',
        'Prompt Engineering',
        'Small Language Models'
      ]
    },
    {
      id: 'web-app',
      tag: '// 02',
      badge: 'APPLICATION STACK',
      title: 'Web & Application Stack',
      items: [
        'Python (Flask)',
        'Streamlit',
        'React',
        'HTML5',
        'CSS3',
        'JavaScript'
      ]
    },
    {
      id: 'prog-lang',
      tag: '// 03',
      badge: 'LANGUAGES',
      title: 'Programming Foundations',
      items: ['Python', 'C']
    },
    {
      id: 'core-cs',
      tag: '// 04',
      badge: 'CORE CS',
      title: 'Core Computer Science',
      items: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming (OOP)',
        'Database Management Systems (DBMS)',
        'MySQL',
        'SQLite'
      ]
    },
    {
      id: 'tools-dev',
      tag: '// 05',
      badge: 'DEVELOPER ENVIRONMENT',
      title: 'Workflows & Developer Tools',
      items: ['Git', 'GitHub', 'VS Code', 'AWS Educate']
    }
  ];

  return (
    <section className="editorial-skills-section" id="skills">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="skills-editorial-header">
          <span className="skills-meta-tag">04. TECHNICAL TOOLSET</span>
          <h2 className="skills-serif-title">Skills & Capabilities</h2>
          <p className="skills-editorial-lead">
            Structured technical capabilities grounded in university coursework, full-stack application engineering, and hackathon projects.
          </p>
          <div className="skills-header-divider"></div>
        </div>

        {/* Grouped 5-Card Grid Layout */}
        <div className="skills-grouped-grid">
          {skillCards.map((card) => (
            <div key={card.id} className="skill-group-editorial-card">
              <div className="skill-card-top-redesigned">
                <div className="skill-card-tags">
                  <span className="skill-card-mono-tag">{card.tag}</span>
                  <span className="skill-card-pill-badge">{card.badge}</span>
                </div>
                <h3 className="skill-card-title-serif">{card.title}</h3>
              </div>
              <ul className="skill-card-list">
                {card.items.map((item) => (
                  <li key={item} className="skill-card-item">
                    <span className="item-bullet">▪</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="skills-bottom-banner">
          <span className="banner-icon">//</span>
          <span className="banner-text">
            <strong>Practical Application:</strong> Toolset actively applied across production repositories, competitive hackathons, and software projects.
          </span>
        </div>
      </div>
    </section>
  );
}
