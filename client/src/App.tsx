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
      <div className="info">
        <div className= "info__image">
          <img src={"/Photos/NICK.jpg"}/>
        </div>
        <div className="info__box">
          <div className="box__text">
            <div className="text__title">
              <span>About Me</span>
            </div>
            <div className="text__body">
              <span> Hi, I'm Nick! I am a second year Computer Science major at the University of Florida and I have a passion for building a asdas khasdklj hasdkljahsdkljahsdklahs kjahsdklja hsdkljahsdkljahs kljashdlk jahsdkj ahsd kjahsdl </span>
            </div>
          </div>
          <div className="info__links">
            <div className="links__icons">
              <a href="https://linkedin.com/in/Nicholas-S-Gaudio" target="_blank" rel="noopener noreferrer">
                <img src={"/Photos/LI.png"}/>
              </a>
              <a href="https://github.com/NicholasGaudio" target="_blank" rel="noopener noreferrer">
                <img src={"/Photos/github.webp"}/>
              </a>
              <a href="https://drive.google.com/file/d/15_ZFpPe2x3VFW_xWNKFHOjq7evkMWTdE/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <img src={"/Photos/RESUME.jpg"}/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='project__banner'>
        <span> Projects </span>
      </div>
      <div className = "Projects">
        <div className="ProjectContent">
          {projects.map((project) => (
            <a key={project.id} className="ProjectItem" href= {project.projectLink} target="_blank" rel="noopener noreferrer">
              <div className="project__image">
                <img src = {project.imagePath}/>
              </div>
              <div className='project__content'>
                <div className="content__title">
                  <h2>{project.name}: {project.timeFrame}</h2>
                </div>
                <div className="content__description">
                  <p>{project.description}</p>
                </div>
                <div className="content__tools">
                  {project.projectTools.map((tool, index) => (
                    <img key={index} src={tool} alt={`Tool ${index}`} className="tool__image"/>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
