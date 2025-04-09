import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />      
        <h2 className="project-title">{project.title}</h2>
        <p className="project-description">{project.subtitle}</p>      
      <a href={project.link} className="project-link" target="_blank">
        View Work <ArrowTopRightOnSquareIcon className="icon" />
      </a>
    </div>
  );
};

export default ProjectCard;
