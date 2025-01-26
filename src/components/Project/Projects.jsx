import React from "react";
import "./Project.css";
import projects from "../../data/projects.json";
import ProjectCard from "./projectCard";
function Project() {
  return (
    <div class="container">
      <h2 class="heading">
        Latest <span>Projects</span>
      </h2>

      <div class="project-container">
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project}></ProjectCard>;
        })}
      </div>
    </div>
  );
}
export default Project;
