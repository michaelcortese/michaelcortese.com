import React, { useState, useEffect } from 'react';

const TypeWriter = ({ text, speed = 100, onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed / 2);

      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
      onComplete && onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  return (
    <div className={`typewriter ${isComplete ? 'typing-complete' : ''}`}>
      {displayText}
    </div>
  );
};

export default TypeWriter; 