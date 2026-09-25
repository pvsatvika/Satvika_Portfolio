import React from 'react';

export default function Certifications() {
  const certificationsList = [
    {
      issuer: 'GOOGLE DEEPMIND',
      title: 'Google DeepMind Learning Track',
      detail: 'Small Language Models, Transformers, & Neural Networks curriculum.'
    },
    {
      issuer: 'ANTHROPIC',
      title: 'Anthropic — AI Fluency: Framework & Foundations',
      detail: 'Foundational AI framework, prompt architecture, and LLM principles.'
    },
    {
      issuer: 'ANTHROPIC',
      title: 'Anthropic — Claude 101',
      detail: 'Introductory track on Claude AI integration patterns and prompt design.'
    },
    {
      issuer: 'MURF AI',
      title: 'Murf AI — 10 Days of Voice Agents',
      detail: 'Hands-on intensive track covering real-time voice synthesis & LiveKit.'
    },
    {
      issuer: 'AWS EDUCATE',
      title: 'AWS Educate — Machine Learning Foundations',
      detail: 'Cloud-based machine learning fundamentals and predictive modeling.'
    },
    {
      issuer: 'AWS EDUCATE',
      title: 'AWS Educate — Introduction to Generative AI',
      detail: 'Generative AI workload patterns and foundation model deployment.'
    },
    {
      issuer: 'ET AI HACKATHON 2.0',
      title: 'ET AI Hackathon 2.0 Participation Certificate',
      detail: 'Official Participation Certificate for ET AI Hackathon 2.0.'
    },
    {
      issuer: 'ADOBE / UNSTOP',
      title: 'Adobe Unstop Hackathon Participation Certificate',
      detail: 'Official Participation Certificate for Adobe Unstop Hackathon.'
    },
    {
      issuer: 'WOMEN WHO ASPIRE',
      title: 'Women Who Aspire Participation Certificate',
      detail: 'Official Participation Certificate for Women Who Aspire Hackathon.'
    },
    {
      issuer: 'UDEMY',
      title: 'Udemy — The Complete Python Bootcamp',
      detail: 'Comprehensive Python programming language and OOP concepts.'
    },
    {
      issuer: 'UDEMY',
      title: 'Udemy — Data Structures in C',
      detail: 'Low-level memory management and data structures implementation in C.'
    },
    {
      issuer: 'HACKERRANK',
      title: 'HackerRank — Problem Solving (Basic) Verified Badge',
      detail: 'Verified skill badge in algorithmic problem solving and logic.'
    },
    {
      issuer: 'HACKERRANK',
      title: 'HackerRank — C Language Certification',
      detail: 'Verified skill badge in C programming language.'
    },
    {
      issuer: 'HACKERRANK',
      title: 'HackerRank — Python Language Certification',
      detail: 'Verified skill badge in Python programming language.'
    }
  ];

  return (
    <section className="editorial-certifications-section" id="certifications">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="section-title-group">
          <span className="section-meta-mono">04 // CREDENTIALS & LEARNING</span>
          <h2 className="section-main-title">Certifications</h2>
          <p className="section-editorial-lead">
            Structured informational cards detailing completed technical courses, cloud learning tracks, verified skill badges, and hackathon certificates.
          </p>
        </div>

        {/* Clean 3-Column Static Grid with NO buttons or links */}
        <div className="certifications-3col-grid">
          {certificationsList.map((item, index) => (
            <div key={index} className="cert-grid-card">
              <div className="cert-card-top-row">
                <span className="cert-issuer-badge">{item.issuer}</span>
              </div>
              <h3 className="cert-grid-title">{item.title}</h3>
              <p className="cert-grid-detail">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
