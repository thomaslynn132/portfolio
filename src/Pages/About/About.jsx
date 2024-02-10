import React, { useState } from "react";
import SkillImgs from "../skillImages/skillImgs";
import ContactImgs from "./Contact";
import { FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <section className="about-section">
        <div className="portfolio-container">
          <div className="aboutContainer about fadedIn">
            <h2>About Me</h2>
            <div>
              <p className="p fadedIn">
                {showMore
                  ? "Hello there! I'm Thant Lynn Naing, a passionate 23-year-old frontend developer on an exhilarating journey since January 2023. Specializing in crafting engaging and responsive user interfaces, I have honed my skills in HTML5, CSS3, Bootstrap 5, ReactJS, Firebase, and GitHub. My commitment to creating seamless and visually appealing web experiences drives my dedication to staying at the forefront of web development trends. With a keen eye for design and a knack for problem-solving, I thrive on transforming concepts into polished, user-friendly interfaces. Join me on this exciting ride through the ever-evolving world of frontend development!"
                  : "Hello there! I'm Thant Lynn Naing, a passionate 23-year-old frontend developer on an exhilarating journey since January 2023. Specializing in crafting engaging and responsive user interfaces..."}
                <span
                  style={{
                    color: "blue",
                    cursor: "pointer",
                    textDecoration: "underLine",
                  }}
                  onClick={toggleReadMore}>
                  {showMore ? " See Less" : " See More"}
                </span>
              </p>
              <a href="https://drive.google.com/file/d/1Sv3566a5IJHxTSI9ES_FQ3Wx_ylt9PbL/view?usp=drivesdk">
                <p
                  style={{
                    color: "cyan",
                    WebkitTextStroke: "1px black 0.3",
                    margin: "15px",
                  }}>
                  <FaFileDownload />
                  Download My CV
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
      <SkillImgs />
      <ContactImgs />
      <div className="rdrs ">
        <div className="redirects fadedIn">
          <Link to="/">Home Page</Link>
        </div>
        <div className="redirects fadedIn">
          <Link to="/projects">My Projects</Link>
        </div>
      </div>
    </>
  );
};

export default About;
