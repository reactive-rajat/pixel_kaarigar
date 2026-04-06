import React, { useState } from 'react';
import "./HeroVisual.css";

const HeroVisual = ({ defaultMood = 'focused', onCharacterClick }) => {
  const [currentMood, setCurrentMood] = useState(defaultMood);
  const isClickable = typeof onCharacterClick === 'function';

  return (
    <div className={isClickable ? 'hero-visual clickable' : 'hero-visual'}>
      <div
        className="character-container animate-float"
        onClick={isClickable ? onCharacterClick : undefined}
      >
        <div className="glow-overlay"></div>
        <img
          src={`/assets/brand/avatar_${currentMood}.png`}
          alt="Man working on laptop"
          className="character-img"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="hud-panel mood-panel">
        <span className="hud-label">MOOD MATRIX</span>
        <div className="mood-switcher">
          <div
            className={currentMood === 'relaxed' ? 'mood-option active' : 'mood-option'}
            onClick={() => setCurrentMood('relaxed')}
          >
            <span className="material-symbols-outlined">sentiment_satisfied</span>
            <span>Relaxed</span>
          </div>
          <div
            className={currentMood === 'focused' ? 'mood-option active' : 'mood-option'}
            onClick={() => setCurrentMood('focused')}
          >
            <span className="material-symbols-outlined">bolt</span>
            <span>Focused</span>
          </div>
        </div>
      </div>

      <div className="hud-panel energy-panel">
        <span className="hud-label">CREATIVE YIELD</span>
        <div className="energy-header">
          <div className="energy-label">
            <span className="material-symbols-outlined">battery_charging_full</span>
            <span>Energy Level</span>
          </div>
          <span className="energy-value">94%</span>
        </div>
        <div className="energy-bar-bg">
          <div className="energy-bar-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
