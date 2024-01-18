import React from "react";
import {
  englishGrammar,
  homePage,
  alyMyanmar,
  ToDoList,
  Portfolio,
} from "../../Assets/imageExport";

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
      liveDemo: null,
    },
    {
      name: "A Linn Yaung Myanmar co.ltd",
      img: alyMyanmar,
      gitHub: null,
      liveDemo:
        "https://aly-myanmar-6dv00e9w9-thomaslynn132s-projects.vercel.app/",
    },
    {
      name: "To Do List",
      img: ToDoList,
      gitHub: "https://github.com/thomaslynn132/todolistapp",
      liveDemo: "https://delightful-donut-b6d2ea.netlify.app/",
    },
    {
      name: "My Portfolio",
      img: Portfolio,
      gitHub: "https://github.com/thomaslynn132/portfolio",
      liveDemo: null,
    },
  ];

  return (
    <>
      <div className="projects">
        {projects.map((project, Index) => (
          <div className="project" key={Index}>
            <a href={project.liveDemo} key={Index}>
              <img
                src={project.img}
                alt={project.name}
                className="projectImage"
                height={200}
                width={300}
              />
            </a>
            <div className="contentText" key={Index}>
              <h3>{project.name}</h3>
              {project.gitHub ? (
                <>
                  <a href={project.gitHub} key={Index}>
                    Check the GitHub Repo here
                  </a>
                  <br />
                </>
              ) : (
                <p style={{ fontSize: "12px" }}>
                  Sorry this repo can't be shared.
                  <br />
                </p>
              )}
              {project.liveDemo && (
                <a href={project.liveDemo} key={Index}>
                  View Live Demo Here
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
