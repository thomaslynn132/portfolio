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
        <p style={{ fontSize: "30px" }} className="fadedIn">
          I am
        </p>
        <h1 className={fade} style={{ fontSize: "40px" }}>
          {words[currentWordIndex]}
        </h1>
        <a href="https://drive.google.com/file/d/1Sv3566a5IJHxTSI9ES_FQ3Wx_ylt9PbL/view?usp=drivesdk">
          <p
            style={{
              color: "cyan",
              WebkitTextStroke: "1px black 0.3",
              margin: "15px",
            }}>
            <FaFileDownload
              size={15}
              className="fadedIn"
              style={{ color: "yellow" }}
            />
            Download My CV
          </p>
        </a>

        <div className="rdrs">
          <div className="redirects fadedIn">
            <Link to="/about">About Me</Link>
          </div>
          <div className="redirects fadedIn">
            <Link to="/projects">My Projects</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
