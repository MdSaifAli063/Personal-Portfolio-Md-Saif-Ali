'use client';

import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="tools-background" aria-hidden="true">
      {/* 3 Large Pulsing Glow Orbs */}
      <div className="glow-orb orb-1" />
      <div className="glow-orb orb-2" />
      <div className="glow-orb orb-3" />

      {/* Floating Developer Tool Icons with Float and Spin */}
      <img src="/tools/html5.svg" className="tool-icon tool-icon-1" alt="" />
      <img src="/tools/react.svg" className="tool-icon tool-icon-2" alt="" />
      <img src="/tools/javascript.svg" className="tool-icon tool-icon-3" alt="" />
      <img src="/tools/python.svg" className="tool-icon tool-icon-4" alt="" />
      <img src="/tools/nodejs.svg" className="tool-icon tool-icon-5" alt="" />
      <img src="/tools/css3.svg" className="tool-icon tool-icon-6" alt="" />
      <img src="/tools/typescript.svg" className="tool-icon tool-icon-7" alt="" />
      <img src="/tools/tailwind.svg" className="tool-icon tool-icon-8" alt="" />
    </div>
  );
};

export default AnimatedBackground;
