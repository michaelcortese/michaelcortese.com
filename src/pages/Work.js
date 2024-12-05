import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import PageLayout from '../components/PageLayout';
import '../styles/Work.css';

const projects = [
  {
    title: "Black-Scholes Price Visualizer",
    description: "A tool to visualize the Black-Scholes price of an option as a function of the underlying asset price.",
    github: "https://github.com/michaelcortese/black-scholes-price-visualizer",
    live: "https://black-scholes-price-visualizer.streamlit.app/",
  },
  {
    title: "Example Project",
    description: "Description of example project. You can write multiple lines about the technologies used and what the project does.",
    github: "https://github.com/michaelcortese/example-project",
    live: "https://example-project.com",
  },
];

function Work() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return; // Prevent clicks during transition
    setIsTransitioning(true);
    setDirection('slide-left');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === projects.length - 1 ? 0 : prevIndex + 1
      );
      setDirection('');
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return; // Prevent clicks during transition
    setIsTransitioning(true);
    setDirection('slide-right');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? projects.length - 1 : prevIndex - 1
      );
      setDirection('');
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <PageLayout title="My Work">
      <div className="work-container">
        <button className="carousel-button prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <div className="carousel-content">
          <div className={`project-card ${direction}`}>
            <h2>{projects[currentIndex].title}</h2>
            <p>{projects[currentIndex].description}</p>
            <div className="project-links">
              <a href={projects[currentIndex].github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
              {projects[currentIndex].live && (
                <a href={projects[currentIndex].live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>

        <button className="carousel-button next" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </PageLayout>
  );
}

export default Work;