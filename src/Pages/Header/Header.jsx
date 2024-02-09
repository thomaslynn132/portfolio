import { useEffect, useState } from "react";
import { Background } from "../../Assets/imageExport";
import { Link } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import "./Header.css";
const Header = () => {
  const words = ["Thomas Lynn", "A Front End Developer", "23 Years Old"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState("myName fade-in");
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setFade("myName fade-out");
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFade("myName fade-in");
      }, 500);
    }, 4000);
    return () => clearInterval(wordInterval);
  }, [words.length, setCurrentWordIndex, setFade]);

  return (
    <>
      <div
        className="App-header"
        style={{ backgroundImage: `url(${Background})` }}>
        <p style={{ fontSize: "30px" }}>I am</p>
        <h1 className={fade} style={{ fontSize: "40px" }}>
          {words[currentWordIndex]}
        </h1>
        <a href="https://drive.google.com/file/d/1mbGLlRlxmxBShDw_miLVtW77X0kDfiY7/view?usp=drive_link">
          <p
            style={{
              color: "cyan",
              WebkitTextStroke: "1px black 0.3",
              margin: "15px",
            }}>
            <FaFileDownload style={{ color: "yellow" }} />
            Download My CV
          </p>
        </a>

        <div className="rdrs">
          <div className="redirects">
            <Link to="about">Have a look about me</Link>
          </div>
          <div className="redirects">
            <Link to="projects">Check my projects</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
