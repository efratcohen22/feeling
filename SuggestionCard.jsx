import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, Headphones, Music } from 'lucide-react';

const musicLinks = {
  happy: {
    youtube: [
      'https://www.youtube.com/watch?v=ZbZSe6N_BXs',
      'https://www.youtube.com/watch?v=3GwjfUFyY6M',
      'https://www.youtube.com/watch?v=9bZkp7q19f0',
      'https://www.youtube.com/watch?v=OPf0YbXqDm0',
      'https://www.youtube.com/watch?v=J---aiyznGQ',
    ],
    spotify: [
      'https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH',
      'https://open.spotify.com/track/3GwjfUFyY6M',
      'https://open.spotify.com/track/9bZkp7q19f0',
      'https://open.spotify.com/track/OPf0YbXqDm0',
      'https://open.spotify.com/track/J---aiyznGQ',
    ],
    apple: [
      'https://music.apple.com/us/album/happy/1440833081?i=1440833085',
      'https://music.apple.com/us/album/walking-on-sunshine/1440833081?i=1440833085',
      'https://music.apple.com/us/album/gangnam-style/1440833081?i=1440833085',
      'https://music.apple.com/us/album/uptown-funk/1440833081?i=1440833085',
      'https://music.apple.com/us/album/dont-worry-be-happy/1440833081?i=1440833085',
    ],
  },
  sad: {
    youtube: [
      'https://www.youtube.com/watch?v=hLQl3WQQoQ0',
      'https://www.youtube.com/watch?v=zABLecsR5UE',
      'https://www.youtube.com/watch?v=3EfbeTcxkIY',
      'https://www.youtube.com/watch?v=wVyggTKDcOE',
      'https://www.youtube.com/watch?v=YQHsXMglC9A',
    ],
    spotify: [
      'https://open.spotify.com/track/4kflIGfjdZJW4ot2ioixTB',
      'https://open.spotify.com/track/7LVHVU3tWfcxj5aiPFEW4Q',
      'https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a',
      'https://open.spotify.com/track/1AhDOtG9vPSOmsWgNW0BEY',
      'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b',
    ],
    apple: [
      'https://music.apple.com/us/album/someone-like-you/420075073?i=420075083',
      'https://music.apple.com/us/album/someone-you-loved/1450117955?i=1450117965',
      'https://music.apple.com/us/album/fix-you/1122775104?i=1122775109',
      'https://music.apple.com/us/album/everything-i-wanted/1485802965?i=1485802966',
      'https://music.apple.com/us/album/goodbye-my-lover/1440833081?i=1440833085',
    ],
  },
  angry: {
    youtube: [
      'https://www.youtube.com/watch?v=8SbUC-UaAxE',
      'https://www.youtube.com/watch?v=ktvTqknDobU',
      'https://www.youtube.com/watch?v=QK8mJJJvaes',
      'https://www.youtube.com/watch?v=Z0GFRcFm-aY',
      'https://www.youtube.com/watch?v=9sTQ0QdkN3Q',
    ],
    spotify: [
      'https://open.spotify.com/track/7o2CTH4ctstm8TNelqjb51',
      'https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P',
      'https://open.spotify.com/track/0azC730Exh71aQlOt9Zj3y',
      'https://open.spotify.com/track/2DlHlPMa4M17kufBvI2lEN',
      'https://open.spotify.com/track/2PpruBYCo4H7WOBJ7Q2EwM',
    ],
    apple: [
      'https://music.apple.com/us/album/november-rain/1440833081?i=1440833085',
      'https://music.apple.com/us/album/radioactive/1440833081?i=1440833085',
      'https://music.apple.com/us/album/turn-down-for-what/1440833081?i=1440833085',
      'https://music.apple.com/us/album/chop-suey/1440833081?i=1440833085',
      'https://music.apple.com/us/album/killing-in-the-name/1440833081?i=1440833085',
    ],
  },
  calm: {
    youtube: [
      'https://www.youtube.com/watch?v=2Vv-BfVoq4g',
      'https://www.youtube.com/watch?v=JGwWNGJdvx8',
      'https://www.youtube.com/watch?v=YQHsXMglC9A',
      'https://www.youtube.com/watch?v=ktvTqknDobU',
      'https://www.youtube.com/watch?v=RB-RcX5DS5A',
    ],
    spotify: [
      'https://open.spotify.com/track/6K4t31amVTZDgR3sKmwUJJ',
      'https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3',
      'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b',
      'https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P',
      'https://open.spotify.com/track/4VqPOruhp5EdPBeR92t6lQ',
    ],
    apple: [
      'https://music.apple.com/us/album/perfect/1440833081?i=1440833085',
      'https://music.apple.com/us/album/shape-of-you/1440833081?i=1440833085',
      'https://music.apple.com/us/album/hello/1440833081?i=1440833085',
      'https://music.apple.com/us/album/radioactive/1440833081?i=1440833085',
      'https://music.apple.com/us/album/let-her-go/1440833081?i=1440833085',
    ],
  },
  stressed: {
    youtube: [
      'https://www.youtube.com/watch?v=pXRviuL6vMY',
      'https://www.youtube.com/watch?v=ktvTqknDobU',
      'https://www.youtube.com/watch?v=RB-RcX5DS5A',
      'https://www.youtube.com/watch?v=YQHsXMglC9A',
      'https://www.youtube.com/watch?v=2Vv-BfVoq4g',
    ],
    spotify: [
      'https://open.spotify.com/track/3CRDbSIZ4r5MsZ0YwxuEkn',
      'https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P',
      'https://open.spotify.com/track/4VqPOruhp5EdPBeR92t6lQ',
      'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b',
      'https://open.spotify.com/track/6K4t31amVTZDgR3sKmwUJJ',
    ],
    apple: [
      'https://music.apple.com/us/album/stressed-out/1440833081?i=1440833085',
      'https://music.apple.com/us/album/radioactive/1440833081?i=1440833085',
      'https://music.apple.com/us/album/let-her-go/1440833081?i=1440833085',
      'https://music.apple.com/us/album/hello/1440833081?i=1440833085',
      'https://music.apple.com/us/album/perfect/1440833081?i=1440833085',
    ],
  },
  neutral: {
    youtube: [
      'https://www.youtube.com/watch?v=kXYiU_JCYtU',
      'https://www.youtube.com/watch?v=lWA2pjMjpBs',
      'https://www.youtube.com/watch?v=RgKAFK5djSk',
      'https://www.youtube.com/watch?v=3YxaaGgTQYM',
      'https://www.youtube.com/watch?v=uelHwf8o7_U',
    ],
    spotify: [
      'https://open.spotify.com/track/2nLtzopw4rPReszdYBJU6h',
      'https://open.spotify.com/track/3PQLYVskjZQYJHxx1yVdZ8',
      'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b',
      'https://open.spotify.com/track/3sNVsP50132BTNlImLx70i',
      'https://open.spotify.com/track/2takcwOaAZWiXQijPHIx7B',
    ],
    apple: [
      'https://music.apple.com/us/album/numb/1440833081?i=1440833085',
      'https://music.apple.com/us/album/stay/1440833081?i=1440833085',
      'https://music.apple.com/us/album/see-you-again/1440833081?i=1440833085',
      'https://music.apple.com/us/album/bring-me-to-life/1440833081?i=1440833085',
      'https://music.apple.com/us/album/love-the-way-you-lie/1440833081?i=1440833085',
    ],
  }
};

function SuggestionCard({ emotion, onBack, onTryAnother }) {
  if (!emotion) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: '#ffffffcc',
        borderRadius: '1.5rem',
        padding: '2rem',
        color: '#1f1f1f',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
        margin: '2rem auto',
        textAlign: 'center',
      }}
    >
      <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>
        {emotion.icon} {emotion.label}
      </h2>
      <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
        {getSuggestionContent(emotion.key)}
      </p>
      <em style={{ display: 'block', marginBottom: '2rem' }}>
        {getAction(emotion.key)}
      </em>

      {musicLinks[emotion.key] && (
        <div>
          <p style={{ marginBottom: '1rem', fontStyle: 'italic' }}>
            Need a soundtrack for your mood?
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
          {['youtube', 'spotify', 'apple'].map((platform) => (
  <div key={platform} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <button
      onClick={() => {
        const links = musicLinks[emotion.key][platform];
        if (links && links.length > 0) {
          const randomLink = links[Math.floor(Math.random() * links.length)];
          window.open(randomLink, '_blank');
        }
      }}
      style={iconButtonStyle}
    >
      {platform === 'youtube' && <PlayCircle size={32} />}
      {platform === 'spotify' && <Headphones size={32} />}
      {platform === 'apple' && <Music size={32} />}
    </button>
    <span style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
      {platform.charAt(0).toUpperCase() + platform.slice(1)}
    </span>
  </div>
))}

          </div>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button onClick={onBack} style={buttonStyle}>Back</button>
        <button onClick={onTryAnother} style={buttonStyle}>Try Another</button>
      </div>
    </motion.div>
  );
}

const buttonStyle = {
  background: '#fff',
  border: 'none',
  padding: '0.75rem 1.5rem',
  borderRadius: '999px',
  cursor: 'pointer',
  fontWeight: '600',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
};

const iconButtonStyle = {
  backgroundColor: '#ffffffcc',
  border: '1px solid #ddd',
  borderRadius: '999px',
  padding: '0.6rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease-in-out',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  fontWeight: 500,
};

const iconButtonHoverStyle = {
  transform: 'scale(1.1)',
  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
};

function getSuggestionContent(key) {
  const suggestions = {
    happy: "You're in a great mood! Share your energy or do something fun.",
    sad: "It's okay to feel sad. Be gentle with yourself and take a breath.",
    angry: "Pause and take a breath. Let your energy flow in a healthy way.",
    calm: "Enjoy your calm moment. Maybe add a soft soundtrack to it.",
    stressed: "You're under pressure. Let's create a small moment of relief.",
    neutral: "You're in balance. A moment of mindfulness could feel great.",
  };
  return suggestions[key] || suggestions['neutral'];
}

function getAction(key) {
  const actions = {
    happy: "Try dancing, journaling, or calling someone you love 🎶",
    sad: "Listen to music, take a walk, or write your thoughts 🖊️",
    angry: "Squeeze something soft or shake out the tension 💢",
    calm: "Take deep breaths or light a candle 🕯️",
    stressed: "Try a breathing animation or stretching session 🧘",
    neutral: "Sip tea slowly or watch the sky ☁️",
  };
  return actions[key] || actions['neutral'];
}

export default SuggestionCard;
