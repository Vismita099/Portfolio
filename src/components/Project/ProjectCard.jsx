import React from "react";
import "./Project.css";
function ProjectCard({ project }) {
  return (
    <div class="project-card">
      <img
        class="proj-img"
        src={project["proj-img"]}
        alt={"Image of project"}
      ></img>

      <div class="project-layer">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.source}>
          <img src={project["link-img"]} class="icon"></img>
        </a>
      </div>
    </div>
  );
}
export default ProjectCard;
