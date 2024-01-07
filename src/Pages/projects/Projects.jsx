import React from "react";
import {
  englishGrammar,
  homePage,
  alyMyanmar,
  ToDoList,
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
              height={200}
              width={300}
            />

            <div className="contentText">
              <h3>{project.name}</h3>
              <a href={project.gitHub} key={index}>
                Check the gitHub Repo here
              </a>
              <br />
              <a href={project.liveDemo} key={index}>
                View Live Demo Here
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
