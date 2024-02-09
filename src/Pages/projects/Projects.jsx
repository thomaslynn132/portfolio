import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  englishGrammar,
  homePage,
  alyMyanmar,
  ToDoList,
  Portfolio,
  PiVaping,
  myPhoto,
} from "../../Assets/imageExport";
import "./projects.css";
export default function Projects() {
  const projects = [
    {
      name: "Pi Vaping",
      img: PiVaping,
      gitHub: "https://github.com/thomaslynn132/pi_vaping_store",
      liveDemo: "https://pi-vaping-store.vercel.app/",
      usedTech: "HTML,CSS,Javascript,ReactJs,Boostrap ",
    },
    {
      name: "EnglishGrammar",
      img: englishGrammar,
      gitHub: "https://github.com/thomaslynn132/English-Grammar",
      liveDemo: "https://learn-english-with-thoma-3bd6e.web.app",
      usedTech: "HTML,CSS3,Javascript,ReactJs",
    },
    {
      name: "A Linn Yaung Myanmar co.ltd",
      img: alyMyanmar,
      gitHub: null,
      liveDemo: "https://aly-myanmar.vercel.app/",
      usedTech: "HTML,CSS3,Javascript,ReactJs",
    },
    {
      name: "To Do List",
      img: ToDoList,
      gitHub: "https://github.com/thomaslynn132/todolistapp",
      liveDemo: "https://delightful-donut-b6d2ea.netlify.app/",
      usedTech: "HTML,CSS3,Javascript,ReactJs",
    },
    {
      name: "My Portfolio",
      img: Portfolio,
      gitHub: "https://github.com/thomaslynn132/portfolio",
      liveDemo: null,
      usedTech: "HTML,CSS3,Javascript,ReactJs",
    },
    {
      name: "Homepage design for freelancers.com contest",
      img: homePage,
      gitHub: "https://github.com/thomaslynn132/homepage-design",
      liveDemo: null,
      usedTech: "HTML5, CSS3",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const chooseProject = (index) => {
    setSelectedProject(projects[index]);
  };
  const ProjectDescription = () => {
    if (!selectedProject) {
      return (
        <>
          <p>
            These projects show my late works as a react js developer as a
            professional carrer background.
          </p>
        </>
      );
    }

    return (
      <>
        <h1>Used Skills</h1>
        <p>{selectedProject.usedTech}</p>
      </>
    );
  };

  const ProjectDetails = () => {
    if (!selectedProject) {
      return (
        <>
          <img src={myPhoto} alt="My Face" height={320} />
        </>
      );
    }

    return (
      <div className="project">
        <img
          src={selectedProject.img}
          alt={selectedProject.name}
          height={200}
          width={300}
          style={{ transition: "1s" }}
        />
        <br />
        <div>
          <a href={selectedProject.gitHub}>
            <button className="buttons">GitHub</button>
          </a>
          <a href={selectedProject.liveDemo}>
            <button className="buttons">Live Demo</button>
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      {" "}
      <section className="projects-section portfolio-container">
        <div className="">
          <h2>Projects</h2>
          <div className="projects">
            <div>
              <ProjectDetails />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "300px",
                height: "auto",
                margin: "15px",
                padding: "10px",
              }}>
              <ul>
                {projects.map((project, index) => (
                  <li
                    key={index}
                    onClick={() => chooseProject(index)}
                    style={{ textAlign: "start", cursor: "pointer" }}>
                    {project.name}
                  </li>
                ))}
              </ul>
              <ProjectDescription />
            </div>
          </div>
        </div>
      </section>
      <section className="projects-section portfolio-container">
        <div className="rdrs">
          <div className="redirects">
            <Link to="about">Have a look about me</Link>
          </div>
          <div className="redirects">
            <Link to="projects">Check my projects</Link>
          </div>
        </div>
      </section>
    </>
  );
}
