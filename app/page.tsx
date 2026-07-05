'use client';

import { useState, useEffect, CSSProperties, ReactNode } from 'react';

/* ── Shared sub-components ──────────────────────────────────── */

function SkillCard({
  accent,
  icon,
  title,
  description,
  tags,
}: {
  accent: string;
  icon: ReactNode;
  title: string;
  description: string;
  tags: string[];
}) {
  const rgb = hexToRgb(accent);
  const accentVars = { '--accent': accent, '--accent-rgb': rgb } as CSSProperties;

  return (
    <div className="skill-card" style={accentVars}>
      <div className="skill-card-icon">{icon}</div>
      <div>
        <h3 className="skill-card-title">{title}</h3>
        <p className="skill-card-desc">{description}</p>
      </div>
      <div className="skill-card-tags">
        {tags.map((tag) => (
          <span key={tag} className="skill-card-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function FooterLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: ReactNode;
}) {
  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="footer-link"
    >
      {icon}
      {label}
    </a>
  );
}

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

/* ── Page ───────────────────────────────────────────────────── */

export default function Home() {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const [activeSection, setActiveSection] = useState('about');
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 40);
      for (const id of ['contact', 'experience', 'skills', 'about']) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 130) {
          setActiveSection(id);
          return;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ── NAV ───────────────────────────────────────────────── */}
      <nav className={`nav${navScrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <a href="#about" className="nav-logo">
            rg<span className="brand-dot">.</span>
          </a>
          <div className="nav-links">
            {(['about', 'skills', 'experience'] as const).map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={`nav-link${activeSection === id ? ' active' : ''}`}
              >
                {id === 'about' ? 'About' : id === 'skills' ? 'Skills' : 'Experience'}
              </a>
            ))}
            <a href="#contact" className="nav-cta">
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section id="about" className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <div className="hero-badge-dot" />
              <span className="hero-badge-text">Available for projects</span>
            </div>

            <h1 className="hero-title">
              Hi, I&apos;m<br />
              <span className="brand-dot">Robert Garcia</span>
            </h1>

            <p className="hero-subtitle">Software Engineer · Miami, FL</p>

            <p className="hero-description">
              I build reliable, scalable web applications for small businesses.
              Currently diving deep into the exciting world of
              AI-driven agentic workflows and prompt pipeline design. 
              I care about writing clean code that solves real problems.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                Get in Touch
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#skills" className="btn-secondary">
                View Skills
              </a>
            </div>
          </div>
        </div> 

        {/* decorative dot grid */}
        <div className="hero-grid-decoration" />
      </section>

      {/* ── SKILLS ────────────────────────────────────────────── */}
      <section id="skills" className="section skills-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="eyebrow">What I work with</span>
            <h2 className="section-title">Skills &amp; Expertise</h2>
          </div>

          <div className="skills-grid">
            <SkillCard
              accent="#2563eb"
              title="Web Development"
              description="Full-stack web development, REST APIs, background jobs, and scalable application architecture built for production."
              tags={['MVC', 'Postgres', 'REST APIs', 'Sidekiq']}
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L21 7.5V16.5L12 22L3 16.5V7.5L12 2Z" stroke="#2563eb" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M12 7V17M8 9.5L12 7L16 9.5" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
            <SkillCard
              accent="#d97706"
              title="Agentic Workflows"
              description="Designing and building multi-step AI agent pipelines that orchestrate tools, memory, and decisions at scale."
              tags={['Agents', 'Orchestration', 'Automation']}
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="3" stroke="#d97706" strokeWidth="1.5" />
                  <circle cx="4.5" cy="6" r="2" stroke="#d97706" strokeWidth="1.5" />
                  <circle cx="19.5" cy="6" r="2" stroke="#d97706" strokeWidth="1.5" />
                  <circle cx="4.5" cy="18" r="2" stroke="#d97706" strokeWidth="1.5" />
                  <circle cx="19.5" cy="18" r="2" stroke="#d97706" strokeWidth="1.5" />
                  <path d="M6.5 7L9.5 9.5M14.5 9.5L17.5 7M6.5 17L9.5 14.5M14.5 14.5L17.5 17" stroke="#d97706" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              }
            />
            <SkillCard
              accent="#7c3aed"
              title="Prompt Engineering"
              description="Crafting high-quality prompts and reliable LLM pipelines — turning language model capabilities into dependable production features."
              tags={['LLMs', 'RAG', 'Pipelines']}
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16M4 10.5h11M4 15h8" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="19" cy="16.5" r="3" stroke="#7c3aed" strokeWidth="1.5" />
                  <path d="M21.2 18.7L23 20.5" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              }
            />
            <SkillCard
              accent="#059669"
              title="Databases & Backend"
              description="PostgreSQL schema design, query optimization, caching strategies, and clean backend service architecture."
              tags={['PostgreSQL', 'Redis', 'Git']}
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <ellipse cx="12" cy="7" rx="7" ry="2.8" stroke="#059669" strokeWidth="1.5" />
                  <path d="M5 7v5c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8V7" stroke="#059669" strokeWidth="1.5" />
                  <path d="M5 12v5c0 1.55 3.13 2.8 7 2.8s7-1.25 7-2.8v-5" stroke="#059669" strokeWidth="1.5" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ────────────────────────────────────────── */}
      <section id="experience" className="section experience-section">
        <div className="section-inner">
          <div className="section-header">
            <span className="eyebrow">Background &amp; Achievements</span>
            <h2 className="section-title">Experience</h2>
          </div>

          <div className="experience-grid">
            {/* Left: Overview */}
            <div className="experience-overview">
              <p className="experience-text">
                I&apos;m a Software Engineer with several years of professional experience building and shipping
                production web applications. My core expertise is in{' '}
                <strong className="text-emphasis">Ruby on Rails</strong> — from REST API
                design and database architecture to background job systems and deployment pipelines.
              </p>
              <p className="experience-text">
                More recently I&apos;ve been channeling my curiosity into{' '}
                <strong className="text-emphasis">AI and machine learning</strong> —
                building agentic workflows, designing prompt pipelines, and formalizing that knowledge through
                Cornell University&apos;s ML &amp; AI certificate program.
              </p>
              <div className="experience-highlights">
                {[
                  { color: '#2563eb', label: '4+ years of professional software engineering' },
                  { color: '#d97706', label: 'AI & agentic workflow development' },
                  { color: '#7c3aed', label: 'Full-stack Rails application delivery' },
                ].map(({ color, label }) => (
                  <div key={label} className="experience-highlight">
                    <div className="experience-highlight-dot" style={{ background: color }} />
                    <span className="experience-highlight-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: eCornell Certificate */}
            <div className="certificate-card">
              <div className="certificate-header">
                <div className="certificate-icon">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <circle cx="13" cy="10" r="6" stroke="#d97706" strokeWidth="1.6" />
                    <path d="M9 17.5l-3 6.5 7-3 7 3-3-6.5" stroke="#d97706" strokeWidth="1.6" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="certificate-badge">Certificate</span>
              </div>
              <div>
                <h3 className="certificate-title">
                  Machine Learning<br />&amp; Artificial Intelligence
                </h3>
                <p className="certificate-org">Cornell University · eCornell</p>
                <p className="certificate-year">2025</p>
              </div>
              <p className="certificate-desc">
                Completed Cornell&apos;s professional certificate program covering machine learning
                fundamentals, model training, neural networks, and real-world AI application design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────── */}
      <section id="contact" className="section contact-section">
        <div className="section-inner">
          <div className="contact-intro">
            <span className="eyebrow">Let&apos;s work together</span>
            <h2 className="section-title">Get in Touch</h2>
            <p className="contact-desc">
              Have a project in mind, a problem to solve, or just want to connect? I&apos;d love to hear from
              you. Send me a message and I&apos;ll get back to you soon.
            </p>

            {formSubmitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M5 13l6 6L21 7" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="contact-success-title">Message Sent!</h3>
                <p className="contact-success-desc">
                  Thanks for reaching out, I&apos;ll be in touch shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  setFormLoading(true);
                  setFormError('');
                  try {
                    const res = await fetch('https://api.web3forms.com/submit', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
                        name: formName,
                        email: formEmail,
                        message: formMessage,
                        subject: `Portfolio contact from ${formName}`,
                      }),
                    });
                    const data = await res.json();
                    if (data.success) {
                      setFormSubmitted(true);
                    } else {
                      setFormError('Something went wrong. Please try again.');
                    }
                  } catch {
                    setFormError('Something went wrong. Please try again.');
                  } finally {
                    setFormLoading(false);
                  }
                }}
                className="contact-form"
              >
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cf-name" className="form-label">Name</label>
                    <input
                      id="cf-name"
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Your name"
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cf-email" className="form-label">Email</label>
                    <input
                      id="cf-email"
                      type="email"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="cf-msg" className="form-label">Message</label>
                  <textarea
                    id="cf-msg"
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="form-input form-textarea"
                  />
                </div>
                <div className="form-actions">
                  <button type="submit" disabled={formLoading} className="btn-submit">
                    {formLoading ? 'Sending…' : 'Send Message'}
                    {!formLoading && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2 8h12M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                  {formError && <p className="form-error">{formError}</p>}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="footer-inner">
          <div>
            <span className="footer-brand">
              rg<span className="brand-dot">.</span>
            </span>
            <p className="footer-copyright">© 2026 Robert Garcia · Miami, FL</p>
          </div>
          <div className="footer-links">
            <FooterLink
              href="https://github.com/Robert-Garcia552"
              label="GitHub"
              icon={
                <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              }
            />
            <FooterLink
              href="https://www.linkedin.com/in/robert-garcia552/"
              label="LinkedIn"
              icon={
                <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              }
            />
            <FooterLink
              href="mailto:robgarcia552@gmail.com"
              label="Email"
              icon={
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" strokeLinecap="round" />
                </svg>
              }
            />
          </div>
        </div>
      </footer>
    </>
  );
}
