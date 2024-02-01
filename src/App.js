import React, { useState, useEffect, Suspense } from "react";
import "./App.css";
import ContactImgs from "./Pages/Contact/Contact";
import Projects from "./Pages/projects/Projects";
import SkillImgs from "./Pages/skillImages/skillImgs";
import About from "./Pages/About/About";
import { Background } from "./Assets/imageExport";
import Loading from "./Pages/Loading/Loading";

function App() {
  return (
    <>
      <div className="App">
        <Suspense fallback={<Loading />}>
          <div
            className="App-header"
            style={{ backgroundImage: `url(${Background})` }}>
            <div className="portfolio-container">
              <p>I am</p>
              <h1 className="myName">Thomas Lynn</h1>
              <a href="https://drive.google.com/file/d/1mbGLlRlxmxBShDw_miLVtW77X0kDfiY7/view?usp=drive_link">
                <p>You can download my personal resume by clicking here.</p>
              </a>
            </div>
          </div>
          <div className="forBgImg">
            <section className="about-section">
              <div className="portfolio-container">
                <h2>About Me</h2>
                <About />
                <p>
                  Hello! I'm Thant Lynn Naing and a passionate web developer
                  with expertise in React.js, JavaScript, and now I'm learning
                  tailwindCSS and nextJS.
                </p>
              </div>
            </section>
            <section className="projects-section">
              <div className="portfolio-container">
                <h2>Projects</h2>
                <div className="projectsContainer">
                  <Projects />
                </div>
              </div>
            </section>
            <section className="skills-section">
              <div className="portfolio-container">
                <h2>Skills</h2>
                <SkillImgs />
              </div>
            </section>
            <section className="contact-section">
              <div className="portfolio-container">
                <h2>Contact Me</h2>
                <ContactImgs />
              </div>
            </section>
          </div>
        </Suspense>
      </div>
    </>
  );
}

export default App;
