import { useEffect, useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import "./Header.css";
import ContactImgs from "../About/Contact";
import NavBar from "../../Components/NavBar";
const Header = () => {
  const words = [
    "Thomas Lynn",
    "A Front End Developer",
    "23 Years Old",
    "very pleased to work with you",
  ];
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
      <div className="App-header">
        <NavBar />
        <div
          style={{
            width: "100vw",
            height: "auto",
            display: "flex",
            flexDirection: "row",
          }}>
          <div>
            <p style={{ fontSize: "30px" }} className="fadedIn">
              I am
            </p>
            <h1 className={fade} style={{ fontSize: "40px" }}>
              {words[currentWordIndex]}
            </h1>
            <a href="https://drive.google.com/file/d/1cyHSKsL7t06IPm-Y0Dq11IKlRBSLGQy5/view?usp=sharing">
              <p
                style={{
                  color: "blue",
                  WebkitTextStroke: "1px black 0.3",
                  margin: "15px",
                  fontSize: "23px",
                }}>
                <FaFileDownload size={25} className="fadedIn" />
                Download My CV
              </p>
            </a>
          </div>
        </div>
        <ContactImgs />
      </div>
    </>
  );
};

export default Header;
