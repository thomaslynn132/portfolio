import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import "./Header.css";
import ContactImgs from "../About/Contact";
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
      <div
        className="App-header"
        style={{
          alignItems: "center",
        }}>
        <div
          style={{
            width: "100vw",
            height: "auto",
            display: "flex",
            flexDirection: "row",
          }}>
          <div>
            <ContactImgs />
            <p style={{ fontSize: "30px" }} className="fadedIn">
              I am
            </p>
            <h1 className={fade} style={{ fontSize: "40px" }}>
              {words[currentWordIndex]}
            </h1>
            <a href="https://drive.google.com/file/d/1U_26wq6bljuFrHZH2L9JOXxxqrJp7f0-/view?usp=drive_link">
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
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Header;
