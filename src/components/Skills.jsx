import React from 'react';

export default function Skills() {
  const skillCards = [
    {
      id: 'ai-genai',
      tag: '// 01',
      badge: 'INTELLIGENCE',
      title: 'AI / ML & GenAI',
      items: [
        'Machine Learning Fundamentals',
        'Generative AI Workflows',
        'Google Gemini API',
        'Prompt Engineering',
        'Small Language Models'
      ]
    },
    {
      id: 'web-dev',
      tag: '// 02',
      badge: 'APPLICATION STACK',
      title: 'Web Development',
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
      id: 'prog-found',
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
        'DBMS',
        'MySQL',
        'SQLite'
      ]
    },
    {
      id: 'dev-tools',
      tag: '// 05',
      badge: 'ENVIRONMENT',
      title: 'Developer Tools & Workflows',
      items: ['Git', 'GitHub', 'VS Code', 'AWS Educate']
    }
  ];

  return (
    <section className="editorial-skills-section" id="skills">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="skills-editorial-header">
          <span className="skills-meta-tag">02. TECHNICAL TOOLSET</span>
          <h2 className="skills-serif-title">Technical Skills</h2>
          <p className="skills-editorial-lead">
            Categorized technical toolset grounded in university coursework, AI application development, and hackathon project repositories.
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
            <strong>Practical Execution:</strong> All technologies actively applied across open-source codebases, competitive hackathons, and software projects.
          </span>
        </div>
      </div>
    </section>
  );
}
