import React, { useState } from "react";
import SkillImgs from "../skillImages/skillImgs";
import { FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import NavBar from "../../Components/NavBar";
const About = () => {
  const [showLess, setShowMore] = useState(
    "Hello there! I'm Thant Lynn Naing, a passionate 23-year-old frontend developer on an exhilarating journey since January 2023. Specializing in crafting engaging and responsive user interfaces..."
  );
  const toggleReadMore = () => {
    setShowMore((prevContent) =>
      prevContent ===
      "Hello there! I'm Thant Lynn Naing, a passionate 23-year-old frontend developer on an exhilarating journey since January 2023. Specializing in crafting engaging and responsive user interfaces..."
        ? "Hello there! I'm Thant Lynn Naing, a passionate 23-year-old frontend developer on an exhilarating journey since January 2023. Specializing in crafting engaging and responsive user interfaces, I have honed my skills in HTML5, CSS3, Bootstrap 5, ReactJS, Firebase, and GitHub. My commitment to creating seamless and visually appealing web experiences drives my dedication to staying at the forefront of web development trends. With a keen eye for design and a knack for problem-solving, I thrive on transforming concepts into polished, user-friendly interfaces. Join me on this exciting ride through the ever-evolving world of frontend development!"
        : "Hello there! I'm Thant Lynn Naing, a passionate 23-year-old frontend developer on an exhilarating journey since January 2023. Specializing in crafting engaging and responsive user interfaces..."
    );
  };

  const wordVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <>
      <NavBar />
      <div className="portfolio-container">
        <div className="aboutContainer about fadedIn">
          <section className="about-section">
            <h2>About Me</h2>
            <div>
              <motion.p className="p fadedIn" onClick={toggleReadMore}>
                {showLess.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    variants={wordVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    style={{ height: "auto" }}>
                    {word + " "}
                  </motion.span>
                ))}
              </motion.p>
              <a href="https://drive.google.com/file/d/1cyHSKsL7t06IPm-Y0Dq11IKlRBSLGQy5/view?usp=sharing">
                <p
                  style={{
                    color: "red",
                    WebkitTextStroke: "1px black 0.3",
                    margin: "15px",
                  }}>
                  <FaFileDownload />
                  Download My CV
                </p>
              </a>
            </div>
          </section>
        </div>
      </div>
      <SkillImgs />
    </>
  );
};

export default About;
