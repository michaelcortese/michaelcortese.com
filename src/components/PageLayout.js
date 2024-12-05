import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageLayout({ title, children }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/', { state: { from: 'back' } });
  };

  return (
    <div className="page">
      <button className="back-button animated-button" onClick={handleBack}>
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