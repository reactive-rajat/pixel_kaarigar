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
        <div className="mood-switcher">
          <div
            className={currentMood === 'relaxed' ? 'mood-option active' : 'mood-option'}
            onClick={() => setCurrentMood('relaxed')}
          >
            <span className="material-symbols-outlined">sentiment_satisfied</span>
            <span className="font-medium">Relaxed</span>
          </div>
          <div
            className={currentMood === 'focused' ? 'mood-option active' : 'mood-option'}
            onClick={() => setCurrentMood('focused')}
          >
            <span className="material-symbols-outlined">bolt</span>
            <span className="font-medium">Focused</span>
          </div>
        </div>
      </div>

      <div className="hud-panel energy-panel">
        <div className="energy-header">
          <div className="energy-label">
            <span className="material-symbols-outlined">battery_charging_full</span>
            <span className="font-medium">Energy Level</span>
          </div>
          <span className="energy-value font-medium">94%</span>
        </div>
        <div className="energy-bar-bg">
          <div className="energy-bar-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;
