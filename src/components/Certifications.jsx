import React from 'react';

export default function Certifications() {
  const certificationsList = [
    {
      provider: 'GOOGLE DEEPMIND',
      title: 'Google DeepMind Learning Track',
      detail: 'Completed multi-stage learning track covering Small Language Models, Neural Networks, Transformers, and Capstone concepts.'
    },
    {
      provider: 'ANTHROPIC',
      title: 'AI Fluency: Framework & Foundations',
      detail: 'Completed Anthropic AI framework and foundational AI literacy coursework.'
    },
    {
      provider: 'ANTHROPIC',
      title: 'Claude 101',
      detail: 'Completed introductory coursework on Claude AI model capabilities and application patterns.'
    },
    {
      provider: 'AWS EDUCATE',
      title: 'Machine Learning Foundations',
      detail: 'AWS Educate learning badge in machine learning fundamentals.'
    },
    {
      provider: 'AWS EDUCATE',
      title: 'Introduction to Generative AI',
      detail: 'AWS Educate learning badge in Generative AI concepts and cloud workloads.'
    },
    {
      provider: 'MURF AI',
      title: '10 Days of Voice Agents',
      detail: 'Completed 10-day hands-on learning track for real-time voice AI agents.'
    },
    {
      provider: 'UDEMY',
      title: 'Complete Python Course',
      detail: 'Completed Python programming language course.'
    },
    {
      provider: 'UDEMY',
      title: 'Data Structures in C',
      detail: 'Completed data structures implementation coursework using C.'
    },
    {
      provider: 'HACKERRANK',
      title: 'Problem Solving (Basic)',
      detail: 'Verified skill badge in foundational problem solving.'
    },
    {
      provider: 'HACKERRANK',
      title: 'C Language Certification',
      detail: 'Verified skill badge in C programming language.'
    },
    {
      provider: 'HACKERRANK',
      title: 'Python Language Certification',
      detail: 'Verified skill badge in Python programming language.'
    },
    {
      provider: 'COMPETITION & LEARNING',
      title: 'ET AI Hackathon Certificate',
      detail: 'Received participation certification for ET AI Hackathon 2.0.'
    },
    {
      provider: 'COMPETITION & LEARNING',
      title: 'Adobe Hackathon Participation Certificate',
      detail: 'Received participation certification for Adobe Unstop Hackathon.'
    }
  ];

  return (
    <section className="editorial-certifications-section" id="certifications">
      <div className="editorial-container">
        <div className="section-title-group">
          <span className="section-meta-mono">05 // CREDENTIALS & CURRICULUM</span>
          <h2 className="section-main-title">Certifications & Learning</h2>
          <p className="section-editorial-lead">
            Completed technical courses, learning tracks, cloud badges, and skill certifications displayed with equal visual hierarchy.
          </p>
        </div>

        <div className="equal-certifications-grid">
          {certificationsList.map((item, index) => (
            <div key={index} className="equal-cert-card">
              <div className="cert-card-header">
                <span className="cert-provider-tag">{item.provider}</span>
              </div>
              <h3 className="cert-item-title">{item.title}</h3>
              <p className="cert-item-detail">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
