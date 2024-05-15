import React, { useState } from "react";
import projects from "../../../database/database";
import "./carrossel.css";
export default function Carrossel() {

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const goToNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="portfolio">
        <h2>{currentProject.name}</h2>
        <img className="image" src={currentProject.imageUrl} alt={currentProject.name} />

        <div className="controls">
            <button onClick={goToPreviousProject}>Anterior</button>
            <a href={currentProject.projectUrl} target="_blank" rel="noopener noreferrer">
              Ver Projeto
            </a>
            <button onClick={goToNextProject}>Próximo</button>

        </div>
    </div>
  );
};
 
