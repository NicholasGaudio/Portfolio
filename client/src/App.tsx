import React, {useEffect, useState} from 'react';
import './App.css';
import project from './types/projects';


function App() {
  const [projects, setProjects] = useState<project[]>([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API + "/projects/")
      .then(response => {
        if (!response.ok) {
          throw new Error("Response failed");
        }
        return response.json();
      })
      .then(data => {
        console.log("API Response:", data);
        if (data && Array.isArray(data.projects)) {
          setProjects(data.projects); 
        } else {
          console.error("Unexpected response format:", data);
        }
      })
  }, []);

  return (
    <div className="App">
      <div className='banner'>
        <span> Nicholas Gaudio's Digital Portfolio </span>
      </div>
      <div className="flexy2">
        <img src={"/Photos/NICK.jpg"}/>
        <div className="links">
          <div className="image-container">
            <a href="https://linkedin.com/in/Nicholas-S-Gaudio" target="_blank" rel="noopener noreferrer">
              <img src={"/Photos/LI.png"}/>
            </a>
            <div className="hover-text">LinkedIn</div>
          </div>
          <div className="image-container">
            <a href="https://github.com/NicholasGaudio" target="_blank" rel="noopener noreferrer">
              <img src={"/Photos/github.webp"}/>
            </a>
            <div className="hover-text">GitHub</div>
          </div>
          <div className="image-container">
            <a href="https://drive.google.com/file/d/15_ZFpPe2x3VFW_xWNKFHOjq7evkMWTdE/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <img src={"/Photos/RESUME.jpg"}/>
            </a>
            <div className="hover-text">Resume</div>
          </div>
        </div> 
        <div className="AboutMe">
          <span>i like women</span>
        </div>
      </div>
      <header className="App-~header">
        <div className = "Projects">
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <h2>{project.name}</h2>
                <p>{project.description} : {project.timeFrame} </p>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
