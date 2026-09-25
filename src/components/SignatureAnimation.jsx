import React, { useRef, useState, useMemo, useEffect } from 'react';
import GithubGraph from './ui/github-graph';
import { generateNameContributions } from './ui/name-matrix';

const ANIM_MODES = ['wave', 'scan', 'cascade'];

const SignatureAnimation = () => {
  const containerRef = useRef(null);
  const [mode, setMode] = useState('pattern'); // 'pattern' | 'live'
  const [animIndex, setAnimIndex] = useState(0);

  // Pre-generate the 7-row matrix spelling "MD SAIF ALI"
  const nameContributions = useMemo(() => generateNameContributions(), []);

  // Automatically cycle through motion animations every 7.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimIndex((prev) => (prev + 1) % ANIM_MODES.length);
    }, 7500);
    return () => clearInterval(timer);
  }, []);

  const animation = ANIM_MODES[animIndex];

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    containerRef.current.style.setProperty('--sig-mouse-x', `${x}%`);
    containerRef.current.style.setProperty('--sig-mouse-y', `${y}%`);
  };

  return (
    <section
      className="signature-section"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      aria-label="Md Saif Ali GitHub Contribution Signature"
    >
      {/* Background Interactive Spotlight */}
      <div className="sig-spotlight"></div>

      {/* Ambient Cyber Nebula */}
      <div className="sig-ambient-nebula"></div>

      {/* Header Title (Without capsule and dot, larger size) */}
      <h3
        style={{
          position: 'relative',
          zIndex: 3,
          fontFamily: "'Space Grotesk', 'Outfit', sans-serif",
          fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)',
          fontWeight: 800,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #ffffff 0%, #a7f3d0 45%, #39d353 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          margin: '0 0 1.5rem',
        }}
      >
        GitHub Contribution Canvas • MD SAIF ALI
      </h3>

      {/* Interactive Controls Bar */}
      <div className="sig-controls" onClick={(e) => e.stopPropagation()}>
        <div className="sig-toggle-group">
          <button
            type="button"
            className={`sig-control-btn ${mode === 'pattern' ? 'active' : ''}`}
            onClick={() => setMode('pattern')}
          >
            <span className="sig-btn-dot"></span>
            MD SAIF ALI Matrix
          </button>
          <button
            type="button"
            className={`sig-control-btn ${mode === 'live' ? 'active' : ''}`}
            onClick={() => setMode('live')}
          >
            <i className="uil uil-github-alt"></i>
            Live GitHub (@MdSaifAli063)
          </button>
        </div>
      </div>

      {/* The Green GitHub Contribution Graph */}
      <div className="sig-graph-container" onClick={(e) => e.stopPropagation()}>
        <div className="sig-graph-frame">
          <div className="sig-graph-header">
            <div className="sig-window-dots">
              <span className="sig-dot red"></span>
              <span className="sig-dot yellow"></span>
              <span className="sig-dot green"></span>
            </div>
            <span className="sig-graph-title">
              {mode === 'pattern'
                ? 'git commit -m "MD SAIF ALI — Full-Stack & AI"'
                : 'https://github.com/MdSaifAli063 (Live Contributions)'}
            </span>
            <a
              href="https://github.com/MdSaifAli063"
              target="_blank"
              rel="noreferrer"
              className="sig-gh-link"
              title="Visit Md Saif Ali's GitHub"
            >
              <i className="uil uil-external-link-alt"></i>
            </a>
          </div>

          <div className="sig-graph-canvas-wrap">
            <GithubGraph
              account="MdSaifAli063"
              data={mode === 'pattern' ? nameContributions : undefined}
              months={6}
              variant="github"
              animation={animation}
              animationSpeed={1.2}
              cellSize={14}
              cellGap={4}
              cellRadius={3}
              autoFit={false}
              showLegend={true}
              showAccount={false}
              ambientEffect="tide"
              ambientIntensity={0.7}
            />
          </div>
        </div>
      </div>

      {/* Bottom Glowing Emerald Beam */}
      <div className="sig-bottom-beam"></div>
    </section>
  );
};

export default SignatureAnimation;
