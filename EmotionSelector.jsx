import React from 'react';
import './EmotionSelector.css';

function EmotionSelector({ emotions, onSelect }) {
  return (
    <div className="emotion-selector-container">
      <h1 className="emotion-title">How are you feeling today?</h1>
      <div className="emotion-icons-row">
        {emotions.map((emotion) => (
          <button
            key={emotion.key}
            className="emotion-icon-btn"
            style={{ background: emotion.color }}
            aria-label={emotion.label}
            onClick={() => onSelect(emotion)}
          >
            <span className="emotion-icon" role="img" aria-label={emotion.label}>
              {emotion.icon}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default EmotionSelector; 