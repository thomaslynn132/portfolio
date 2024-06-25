import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  englishGrammar,
  homePage,
  alyMyanmar,
  ToDoList,
  Portfolio,
  PiVaping,
  myPhoto,
  Books,
  ShalKyi,
} from "../../Assets/imageExport";
import "./projects.css";
export default function Projects() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const projects = [
    {
      name: "Pi Vaping",
      img: PiVaping,
      gitHub: "https://github.com/thomaslynn132/pi_vaping_store",
      liveDemo: "https://pi-vaping-store.vercel.app/",
      usedTech: "HTML, CSS, Javascript, ReactJs, Boostrap ",
    },
    {
      name: "EnglishGrammar",
      img: englishGrammar,
      gitHub: "https://github.com/thomaslynn132/English-Grammar",
      liveDemo: "https://learn-english-with-thoma-3bd6e.web.app",
      usedTech: "HTML, CSS3, Javascript, ReactJs",
    },
    {
      name: "My Library App(Still developing, currently paused)",
      img: Books,
      gitHub: "https://github.com/thomaslynn132/my-library-app",
      liveDemo:
        "https://my-library-app-omega.vercel.app/books/MndnMPstRVjbAVAQSu0F",
      usedTech: "HTML5, CSS3, Javascript, ReactJs, Firebase",
    },
    {
      name: "A Linn Yaung Myanmar co.ltd",
      img: alyMyanmar,
      gitHub: null,
      liveDemo: "https://aly-myanmar.vercel.app/",
      usedTech: "HTML, CSS3, Javascript, ReactJs",
    },
    {
      name: "To Do List",
      img: ToDoList,
      gitHub: "https://github.com/thomaslynn132/todolistapp",
      liveDemo: "https://delightful-donut-b6d2ea.netlify.app/",
      usedTech: "HTML, CSS3, Javascript, ReactJs",
    },
    {
      name: "My Portfolio",
      img: Portfolio,
      gitHub: "https://github.com/thomaslynn132/portfolio",
      liveDemo: null,
      usedTech: "HTML, CSS3, Javascript, ReactJs, Framer Motion",
    },
    {
      name: "Homepage design for contest",
      img: homePage,
      gitHub: "https://github.com/thomaslynn132/homepage-design",
      liveDemo: null,
      usedTech: "HTML5, CSS3",
    },
    {
      name: "Shal Kyi Movie App(Still Developing)",
      img: ShalKyi,
      gitHub: null,
      liveDemo: "https://movies-app-wine-seven.vercel.app/",
      usedTech: "HTML5, CSS3, Firebase, Boostrap, React Router, Video.js, GSAP",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const chooseProject = (index) => {
    setSelectedProject(projects[index]);
  };

  const ProjectDescription = () => {
    // Assuming you have a suitable motion variant defined

    if (!selectedProject) {
      return (
        <>
          <motion.div
            className="fadedIn"
            style={{ padding: "10px" }}
            variants={sectionVariants}
            initial="hidden"
            animate="visible">
            These projects showcase my latest work as a React.js developer in my
            professional career background.
          </motion.div>
        </>
      );
    }

    return (
      <>
        <motion.section
          className="projects-section portfolio-container"
          variants={sectionVariants}
          initial="hidden"
          animate="visible">
          <h1>Used Skills</h1>
          <motion.p className="fadedIn">{selectedProject.usedTech}</motion.p>
        </motion.section>
      </>
    );
  };

  const ProjectDetails = () => {
    if (!selectedProject) {
      return (
        <>
          <motion.img
            src={myPhoto}
            alt="My Face"
            height={320}
            className="fadedIn"
            style={{ border: "3px solid", borderRadius: "5%" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </>
      );
    }

    return (
      <div className="project ">
        <img
          src={selectedProject.img}
          alt={selectedProject.name}
          height={200}
          width={300}
          className="fadedIn"
          style={{ transition: "1s", borderRadius: "15px" }}
        />
        <br />
        <div>
          <a href={selectedProject.gitHub}>
            <button className="buttons fadedIn">GitHub</button>
          </a>
          <a href={selectedProject.liveDemo}>
            <button className="buttons fadedIn">Live Demo</button>
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      <motion.section
        className="projects-section portfolio-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <div style={{ width: "auto" }}>
          <h2>Projects</h2>
          <div className="projects">
            <div>
              <ProjectDetails />
            </div>
            <motion.div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "auto",
                height: "auto",
                margin: "10px",
                padding: "10px",
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}>
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                {projects.map((project, index) => (
                  <motion.li
                    key={index}
                    onClick={() => chooseProject(index)}
                    style={{ textAlign: "start" }}
                    className="projectNames"
                    whileHover={{ scale: 1.1, color: "#007BFF" }}
                    whileTap={{ scale: 0.9 }}>
                    {project.name}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
          <ProjectDescription />
        </div>
      </motion.section>

      <div className="rdrs">
        <div className="redirects fadedIn">
          <Link to="/about">About Me</Link>
        </div>
        <div className="redirects fadedIn">
          <Link to="/">Home Page</Link>
        </div>
      </div>
    </>
  );
}
