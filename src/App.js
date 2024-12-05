import './App.css';
import TypeWriter from './components/TypeWriter';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  const [isNameDone, setIsNameDone] = useState(false);
  const [isSubtitleDone, setIsSubtitleDone] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Only skip animation when using back button
    if (location.state?.from === 'back') {
      setIsNameDone(true);
      setIsSubtitleDone(true);
      setShouldAnimate(false);
    } else {
      setIsNameDone(false);
      setIsSubtitleDone(false);
      setShouldAnimate(true);
    }
  }, [location]);

  const handleNameComplete = () => {
    setIsNameDone(true);
  };

  const handleSubtitleComplete = () => {
    setIsSubtitleDone(true);
  };

  const handleNavigation = (path) => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(path);
    }, 800);
  };

  return (
    <div className={`App ${isTransitioning ? 'transitioning' : ''}`}>
      <div className="intro">
        {shouldAnimate ? (
          <>
            <TypeWriter 
              text="My name is Michael Cortese" 
              speed={200}
              onComplete={handleNameComplete}
            />
            {isNameDone && (
              <TypeWriter 
                text="I am a Computer Science and Statistics Major studying at the University of Wisconsin-Madison" 
                speed={100}
                onComplete={handleSubtitleComplete}
              />
            )}
          </>
        ) : (
          <>
            <div className="typewriter typing-complete">
              My name is Michael Cortese
            </div>
            <div className="typewriter typing-complete">
              I am a Computer Science and Statistics Major studying at the University of Wisconsin-Madison
            </div>
          </>
        )}
        {(isSubtitleDone || !shouldAnimate) && (
          <>
            <div className="button-container">
              <button className="animated-button" onClick={() => handleNavigation('/resume')}>Resume</button>
              <button className="animated-button" onClick={() => handleNavigation('/work')}>My Work</button>
              <button className="animated-button" onClick={() => handleNavigation('/contact')}>Contact</button>
            </div>
            <div className="social-icons">
              <a 
                href="https://github.com/incognitoatlas" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
              >
                <FaGithub />
              </a>
              <a 
                href="https://linkedin.com/in/YourLinkedInUsername" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
              >
                <FaLinkedin />
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
