import React, { useState, useEffect } from "react";
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
  tapNumberGame,
} from "../../Assets/imageExport";
import "./projects.css";
import NavBar from "../../Components/NavBar";
export default function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: 1,
  };

  const buttonVariants = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.7,
      transition: {
        duration: 0.2,
      },
    },
  };

  const projects = [
    {
      name: "Tap Number Game",
      img: tapNumberGame,
      gitHub: "https://github.com/thomaslynn132/tap-number-game",
      liveDemo: "https://tap-number-game.vercel.app/",
      usedTech:
        "HTML5 for structure, CSS3 for styling, Javascript for interactivity, ReactJs for user interface",
    },
    {
      name: "The WPPOOL Index",
      img: Books,
      gitHub: "https://github.com/thomaslynn132/wppoolindex",
      liveDemo: "https://wppoolindex.vercel.app/",
      usedTech:
        "HTML5 for structure, CSS3 for styling, Javascript for interactivity, ReactJs for user interface, Chart Js for data visualization",
    },
    {
      name: "Pi Vaping",
      img: PiVaping,
      gitHub: "https://github.com/thomaslynn132/pi_vaping_store",
      liveDemo: "https://pi-vaping-store.vercel.app/",
      usedTech:
        "HTML5 for structure, CSS for styling, Javascript for interactivity, ReactJs for user interface, Bootstrap for layout and customization",
    },
    {
      name: "EnglishGrammar",
      img: englishGrammar,
      gitHub: "https://github.com/thomaslynn132/EnglishGrammar",
      liveDemo: "https://learn-english-with-thomas132.web.app/",
      usedTech:
        "HTML5 for structure, CSS3 for styling, Javascript for interactivity, ReactJs for user interface",
    },
    {
      name: "A Linn Yaung Myanmar co.ltd",
      img: alyMyanmar,
      gitHub: null,
      liveDemo: "https://aly-myanmar.vercel.app/",
      usedTech:
        "HTML5 for structure, CSS3 for styling, Javascript for interactivity, ReactJs for user interface",
    },
    {
      name: "To Do List",
      img: ToDoList,
      gitHub: "https://github.com/thomaslynn132/todolistapp",
      liveDemo: "https://delightful-donut-b6d2ea.netlify.app/",
      usedTech:
        "HTML5 for structure, CSS3 for styling, Javascript for interactivity, ReactJs for user interface",
    },
    {
      name: "My Portfolio",
      img: Portfolio,
      gitHub: "https://github.com/thomaslynn132/portfolio",
      liveDemo: null,
      usedTech:
        "HTML5 for structure, CSS3 for styling, Javascript for interactivity, ReactJs for user interface, Framer Motion for animations",
    },
    {
      name: "Homepage design for contest",
      img: homePage,
      gitHub: "https://github.com/thomaslynn132/homepage-design",
      liveDemo: null,
      usedTech: "HTML5 for structure, CSS3 for styling",
    },
    {
      name: "Shal Kyi Movie App (Still Developing)",
      img: ShalKyi,
      gitHub: null,
      liveDemo: "https://movies-app-wine-seven.vercel.app/",
      usedTech:
        "HTML5 for structure, CSS3 for styling,React for user interface, Bootstrap for layout and customization, NextCloud for movie files cloud storage, Video Js for video player, GSAP for animations",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const chooseProject = (index) => {
    setSelectedProject(projects[index]);

    setActiveProjectIndex(index);
  };

  const ProjectDescription = () => {
    const [techs, setTechs] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
      if (selectedProject) {
        const techArray = selectedProject.usedTech.split(",");
        setTechs(techArray);
      }
    }, []);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 700);

      return () => clearInterval(intervalId);
    }, []);

    return (
      <>
        <motion.section
          className="portfolio-container"
          variants={sectionVariants}
          initial="hidden"
          animate="visible">
          <h1>Used Technologies</h1>
          {techs.slice(0, index).map((tech, i) => (
            <span key={i}>
              {tech}
              <br />
            </span>
          ))}
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
            <motion.button
              className="buttons fadedIn"
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap">
              GitHub
            </motion.button>
          </a>
          <a href={selectedProject.liveDemo}>
            <motion.button
              className="buttons fadedIn"
              variants={buttonVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap">
              Live Demo
            </motion.button>
          </a>
        </div>
      </div>
    );
  };

  return (
    <>
      <NavBar />
      <motion.section
        className="projects-section portfolio-container"
        style={{ margin: "15px", padding: "15px" }}
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
                    className="projectNames buttons"
                    whileHover={{ scale: 1.05, color: "#007BFF" }}
                    whileTap={{ scale: 0.9 }}
                    animate={
                      activeProjectIndex === index
                        ? { backgroundColor: "#007BFF", color: "#FFFFFF" }
                        : {}
                    }>
                    <button
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                      }}>
                      {project.name}
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
        <ProjectDescription />
      </motion.section>{" "}
    </>
  );
}
