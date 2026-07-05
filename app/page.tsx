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
  const [hovered, setHovered] = useState(false);
  const rgb = hexToRgb(accent);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        border: `1px solid ${hovered ? accent : '#dbe4ee'}`,
        borderRadius: 16,
        padding: 30,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        transition: 'border-color 0.25s',
        boxShadow: '0 1px 4px rgba(30,58,95,0.04)',
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: `rgba(${rgb}, 0.08)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1e3a5f' }}>{title}</h3>
        <p style={{ fontSize: 14, color: '#4a6a8a', marginTop: 8, lineHeight: 1.75 }}>{description}</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              background: `rgba(${rgb}, 0.07)`,
              border: `1px solid rgba(${rgb}, 0.18)`,
              color: accent,
              fontSize: 12,
              fontWeight: 500,
              padding: '4px 12px',
              borderRadius: 100,
            }}
          >
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
  const [hovered, setHovered] = useState(false);
  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? '#1e3a5f' : '#94aac0',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 7,
        fontSize: 13,
        fontWeight: 500,
        transition: 'color 0.2s',
      }}
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

  const navLinkColor = (id: string) => (activeSection === id ? '#2563eb' : '#94aac0');

  const inputStyle: CSSProperties = {
    background: '#fff',
    border: '1px solid #dbe4ee',
    borderRadius: 10,
    padding: '12px 16px',
    fontSize: 14,
    color: '#1e3a5f',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.2s',
  };

  const labelStyle: CSSProperties = {
    fontSize: 12.5,
    fontWeight: 600,
    color: '#4a6a8a',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
  };

  return (
    <>
      {/* ── NAV ───────────────────────────────────────────────── */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          background: navScrolled ? 'rgba(240,244,248,0.95)' : 'rgba(240,244,248,0)',
          borderBottom: `1px solid ${navScrolled ? '#dbe4ee' : 'transparent'}`,
          height: 68,
          display: 'flex',
          alignItems: 'center',
          transition: 'background 0.4s, border-color 0.4s',
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: '0 auto',
            padding: '0 32px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <a
            href="#about"
            style={{ fontSize: 19, fontWeight: 800, color: '#1e3a5f', textDecoration: 'none', letterSpacing: '-0.5px' }}
          >
            rg<span style={{ color: '#2563eb' }}>.</span>
          </a>
          <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            {(['about', 'skills', 'experience'] as const).map((id) => (
              <a
                key={id}
                href={`#${id}`}
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: navLinkColor(id),
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  textTransform: 'capitalize',
                }}
              >
                {id === 'about' ? 'About' : id === 'skills' ? 'Skills' : 'Experience'}
              </a>
            ))}
            <a
              href="#contact"
              style={{
                fontSize: 14,
                fontWeight: 600,
                background: '#2563eb',
                color: '#fff',
                padding: '9px 22px',
                borderRadius: 8,
                textDecoration: 'none',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        id="about"
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '120px 32px 80px',
          background:
            'radial-gradient(ellipse 70% 60% at 10% 50%, rgba(37,99,235,0.07) 0%, transparent 60%), #f0f4f8',
        }}
      >
        <div style={{ maxWidth: 1120, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 28,
              maxWidth: 740,
              animation: 'fadeUp 0.75s ease both',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: '50%',
                  background: '#059669',
                  flexShrink: 0,
                  animation: 'pulseDot 2.2s ease-in-out infinite',
                }}
              />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: '#94aac0',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Available for projects
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(44px,7vw,82px)',
                fontWeight: 800,
                lineHeight: 1.07,
                letterSpacing: '-2.5px',
                color: '#1e3a5f',
              }}
            >
              Hi, I&apos;m<br />
              <span style={{ color: '#2563eb' }}>Robert Garcia</span>
            </h1>

            <p style={{ fontSize: 17, fontWeight: 500, color: '#94aac0', letterSpacing: '0.01em' }}>
              Software Engineer · Miami, FL
            </p>

            <p style={{ fontSize: 16, lineHeight: 1.85, color: '#4a6a8a', maxWidth: 580 }}>
              I build reliable, scalable web applications with{' '}
              <strong style={{ color: '#1e3a5f', fontWeight: 600 }}>Ruby on Rails</strong> — and I&apos;m
              diving deep into the exciting world of{' '}
              <strong style={{ color: '#1e3a5f', fontWeight: 600 }}>AI-driven agentic workflows</strong> and
              prompt pipeline design. I care about writing clean code that solves real problems.
            </p>

            <div style={{ display: 'flex', gap: 14, marginTop: 4, flexWrap: 'wrap' }}>
              <a
                href="#contact"
                style={{
                  background: '#2563eb',
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 700,
                  padding: '14px 28px',
                  borderRadius: 10,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 9,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Get in Touch
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#skills"
                style={{
                  border: '1.5px solid #dbe4ee',
                  color: '#4a6a8a',
                  fontSize: 15,
                  fontWeight: 600,
                  padding: '14px 28px',
                  borderRadius: 10,
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 9,
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2563eb';
                  e.currentTarget.style.color = '#2563eb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#dbe4ee';
                  e.currentTarget.style.color = '#4a6a8a';
                }}
              >
                View Skills
              </a>
            </div>
          </div>
        </div>

        {/* decorative dot grid */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '45%',
            opacity: 0.04,
            backgroundImage:
              'linear-gradient(#1e3a5f 1px,transparent 1px),linear-gradient(90deg,#1e3a5f 1px,transparent 1px)',
            backgroundSize: '48px 48px',
            pointerEvents: 'none',
          }}
        />
      </section>

      {/* ── SKILLS ────────────────────────────────────────────── */}
      <section id="skills" style={{ padding: '100px 32px', background: '#e6edf4' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: '#2563eb',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              What I work with
            </span>
            <h2
              style={{
                fontSize: 'clamp(32px,5vw,44px)',
                fontWeight: 800,
                color: '#1e3a5f',
                marginTop: 10,
                letterSpacing: '-1.2px',
              }}
            >
              Skills &amp; Expertise
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 20,
            }}
          >
            <SkillCard
              accent="#2563eb"
              title="Ruby on Rails"
              description="Full-stack web development, REST APIs, background jobs, and scalable application architecture built for production."
              tags={['MVC', 'ActiveRecord', 'REST APIs', 'Sidekiq']}
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
      <section id="experience" style={{ padding: '100px 32px', background: '#f0f4f8' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: '#2563eb',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              Background &amp; Achievements
            </span>
            <h2
              style={{
                fontSize: 'clamp(32px,5vw,44px)',
                fontWeight: 800,
                color: '#1e3a5f',
                marginTop: 10,
                letterSpacing: '-1.2px',
              }}
            >
              Experience
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
            {/* Left: Overview */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <p style={{ fontSize: 16, lineHeight: 1.9, color: '#4a6a8a' }}>
                I&apos;m a Software Engineer with several years of professional experience building and shipping
                production web applications. My core expertise is in{' '}
                <strong style={{ color: '#1e3a5f', fontWeight: 600 }}>Ruby on Rails</strong> — from REST API
                design and database architecture to background job systems and deployment pipelines.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.9, color: '#4a6a8a' }}>
                More recently I&apos;ve been channeling my curiosity into{' '}
                <strong style={{ color: '#1e3a5f', fontWeight: 600 }}>AI and machine learning</strong> —
                building agentic workflows, designing prompt pipelines, and formalizing that knowledge through
                Cornell University&apos;s ML &amp; AI certificate program.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
                {[
                  { color: '#2563eb', label: '4+ years of professional software engineering' },
                  { color: '#d97706', label: 'AI & agentic workflow development' },
                  { color: '#7c3aed', label: 'Full-stack Rails application delivery' },
                ].map(({ color, label }) => (
                  <div
                    key={label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      background: '#fff',
                      border: '1px solid #dbe4ee',
                      borderRadius: 12,
                      padding: '12px 16px',
                    }}
                  >
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, flexShrink: 0 }} />
                    <span style={{ fontSize: 14, fontWeight: 500, color: '#1e3a5f' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: eCornell Certificate */}
            <div
              style={{
                background: '#fff',
                border: '1.5px solid #e8c96a',
                borderRadius: 20,
                padding: 36,
                boxShadow: '0 4px 28px rgba(217,119,6,0.09)',
                display: 'flex',
                flexDirection: 'column',
                gap: 22,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: 'rgba(217,119,6,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <circle cx="13" cy="10" r="6" stroke="#d97706" strokeWidth="1.6" />
                    <path d="M9 17.5l-3 6.5 7-3 7 3-3-6.5" stroke="#d97706" strokeWidth="1.6" strokeLinejoin="round" />
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#d97706',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    background: 'rgba(217,119,6,0.08)',
                    border: '1px solid rgba(217,119,6,0.22)',
                    padding: '4px 12px',
                    borderRadius: 100,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Certificate
                </span>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: 21,
                    fontWeight: 800,
                    color: '#1e3a5f',
                    letterSpacing: '-0.5px',
                    lineHeight: 1.25,
                  }}
                >
                  Machine Learning<br />&amp; Artificial Intelligence
                </h3>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#d97706', marginTop: 10 }}>
                  Cornell University · eCornell
                </p>
                <p style={{ fontSize: 13, color: '#94aac0', marginTop: 3 }}>2025</p>
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: '#4a6a8a',
                  lineHeight: 1.75,
                  borderTop: '1px solid #f5edda',
                  paddingTop: 20,
                }}
              >
                Completed Cornell&apos;s professional certificate program covering machine learning
                fundamentals, model training, neural networks, and real-world AI application design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────── */}
      <section id="contact" style={{ padding: '100px 32px', background: '#e6edf4' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div style={{ maxWidth: 620 }}>
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: '#2563eb',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              Let&apos;s work together
            </span>
            <h2
              style={{
                fontSize: 'clamp(32px,5vw,44px)',
                fontWeight: 800,
                color: '#1e3a5f',
                marginTop: 10,
                letterSpacing: '-1.2px',
              }}
            >
              Get in Touch
            </h2>
            <p style={{ fontSize: 15, color: '#4a6a8a', lineHeight: 1.8, marginTop: 16, marginBottom: 40 }}>
              Have a project in mind, a problem to solve, or just want to connect? I&apos;d love to hear from
              you. Send me a message and I&apos;ll get back to you soon.
            </p>

            {formSubmitted ? (
              <div
                style={{
                  background: '#fff',
                  border: '1px solid #dbe4ee',
                  borderRadius: 16,
                  padding: '52px 40px',
                  textAlign: 'center',
                  boxShadow: '0 1px 4px rgba(30,58,95,0.06)',
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: 'rgba(5,150,105,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}
                >
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M5 13l6 6L21 7" stroke="#059669" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 style={{ fontSize: 21, fontWeight: 700, color: '#1e3a5f', marginBottom: 8 }}>
                  Message Sent!
                </h3>
                <p style={{ fontSize: 14, color: '#4a6a8a', lineHeight: 1.6 }}>
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
                style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                    <label htmlFor="cf-name" style={labelStyle}>Name</label>
                    <input
                      id="cf-name"
                      type="text"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="Your name"
                      required
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = '#2563eb')}
                      onBlur={(e) => (e.target.style.borderColor = '#dbe4ee')}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                    <label htmlFor="cf-email" style={labelStyle}>Email</label>
                    <input
                      id="cf-email"
                      type="email"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = '#2563eb')}
                      onBlur={(e) => (e.target.style.borderColor = '#dbe4ee')}
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  <label htmlFor="cf-msg" style={labelStyle}>Message</label>
                  <textarea
                    id="cf-msg"
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 130, lineHeight: 1.7 }}
                    onFocus={(e) => (e.target.style.borderColor = '#2563eb')}
                    onBlur={(e) => (e.target.style.borderColor = '#dbe4ee')}
                  />
                </div>
                <div style={{ marginTop: 4, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <button
                    type="submit"
                    disabled={formLoading}
                    style={{
                      background: '#2563eb',
                      color: '#fff',
                      fontSize: 15,
                      fontWeight: 700,
                      padding: '14px 32px',
                      borderRadius: 10,
                      border: 'none',
                      cursor: formLoading ? 'not-allowed' : 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 9,
                      transition: 'opacity 0.2s',
                      opacity: formLoading ? 0.7 : 1,
                    }}
                    onMouseEnter={(e) => { if (!formLoading) e.currentTarget.style.opacity = '0.88'; }}
                    onMouseLeave={(e) => { if (!formLoading) e.currentTarget.style.opacity = '1'; }}
                  >
                    {formLoading ? 'Sending…' : 'Send Message'}
                    {!formLoading && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2 8h12M9 4l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                  {formError && (
                    <p style={{ fontSize: 13, color: '#dc2626' }}>{formError}</p>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer style={{ padding: '44px 32px', borderTop: '1px solid #dbe4ee', background: '#f0f4f8' }}>
        <div
          style={{
            maxWidth: 1120,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          <div>
            <span style={{ fontSize: 18, fontWeight: 800, color: '#1e3a5f', letterSpacing: '-0.5px' }}>
              rg<span style={{ color: '#2563eb' }}>.</span>
            </span>
            <p style={{ fontSize: 13, color: '#94aac0', marginTop: 6 }}>© 2026 Robert Garcia · Miami, FL</p>
          </div>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
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
