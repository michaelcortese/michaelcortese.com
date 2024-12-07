import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageLayout({ title, children }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/', { state: { from: 'back' } });
  };

  return (
    <div className="page" style={{ 
      minHeight: '100vh', 
      overflow: 'hidden',
      position: 'relative',
      zIndex: 1 
    }}>
      <button 
        className="back-button animated-button" 
        onClick={handleBack}
        style={{ 
          position: 'fixed',
          zIndex: 9999,
          top: '20px',
          left: '20px'
        }}
      >
        Back
      </button>
      <div className="page-content">
        <h1 className="page-title">{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default PageLayout; 