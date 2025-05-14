import React, { useState } from 'react';
import EmotionSelector from './components/EmotionSelector';
import SuggestionCard from './components/SuggestionCard';
import './App.css';

const EMOTIONS = [
  {
    key: 'happy',
    label: 'Happy',
    color: '#FFE066',
    gradient: 'linear-gradient(135deg, #FFF9C4 0%, #FFE066 100%)',
    icon: '😊',
  },
  {
    key: 'sad',
    label: 'Sad',
    color: '#3B5BDB',
    gradient: 'linear-gradient(135deg, #A5B4FC 0%, #3B5BDB 100%)',
    icon: '😢',
  },
  {
    key: 'angry',
    label: 'Angry',
    color: '#FF6B6B',
    gradient: 'linear-gradient(135deg, #FFD6D6 0%, #FF6B6B 100%)',
    icon: '😠',
  },
  {
    key: 'calm',
    label: 'Calm',
    color: '#4DDDC3',
    gradient: 'linear-gradient(135deg, #D1FFF6 0%, #4DDDC3 100%)',
    icon: '🧘',
  },
  {
    key: 'stressed',
    label: 'Stressed',
    color: '#FFA94D',
    gradient: 'linear-gradient(135deg, #FFE5B4 0%, #FFA94D 100%)',
    icon: '😰',
  },
  {
    key: 'neutral',
    label: 'Neutral',
    color: '#E0E0E0',
    gradient: 'linear-gradient(135deg, #F5F5F5 0%, #E0E0E0 100%)',
    icon: '😐',
  },
];

function App() {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [theme, setTheme] = useState('');

  const handleSelectEmotion = (emotion) => {
    setSelectedEmotion(emotion);
    setTheme(emotion.gradient);
  };

  const handleBack = () => {
    setSelectedEmotion(null);
    setTheme('');
  };

  const handleTryAnother = () => {
    setSelectedEmotion(null);
    setTheme('');
  };

  return (
    <div
      className="app-root"
      style={{
        minHeight: '100vh',
        background: theme || undefined,
        transition: 'background 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {!selectedEmotion ? (
        <EmotionSelector emotions={EMOTIONS} onSelect={handleSelectEmotion} />
      ) : (
        <SuggestionCard
          emotion={selectedEmotion}
          onBack={handleBack}
          onTryAnother={handleTryAnother}
        />
      )}
    </div>
  );
}

export default App; 