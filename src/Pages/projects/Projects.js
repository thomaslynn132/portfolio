import React from "react";
import { englishGrammar, homePage } from "../../Assets/imageExport";
export default function Projects() {
  const projects = [
    {
      name: "EnglishGrammar",
      img: englishGrammar,
      gitHub: "https://github.com/thomaslynn132/English-Grammar",
      liveDemo: "https://learn-english-with-thoma-3bd6e.web.app",
    },
    {
      name: "Homepage design for freelancers.com contest",
      img: homePage,
      gitHub: "https://github.com/thomaslynn132/homepage-design",
      liveDemo: "#",
    },
  ];

  return (
    <>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img
              src={project.img}
              alt={project.name}
              className="projectImage"
            />
            <h3 className="contentText">{project.name}</h3>
            <a href={project.gitHub}>Check the code here</a> <br />
            <a href={project.liveDemo}>View Live Demo Here</a>
            <div className="lineBreak"></div>
          </div>
        ))}
      </div>
    </>
  );
}
