import { useEffect, useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";
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
    }, 5000);
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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ duration: 1.5 }}
              style={{ fontSize: "30px" }}
              className="fadedIn">
              I am
            </motion.p>
            <motion.h1
              initial={{ opacity: 0.5, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 5, repeat: Infinity, reverse: true }}
              className={fade}
              style={{ fontSize: "40px" }}>
              {words[currentWordIndex]}
            </motion.h1>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              href="https://drive.google.com/file/d/1DO6Xe-MGVhX4VNAkZt_vperH1Ifv8Se2/view?usp=drive_link">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  color: "blue",
                  WebkitTextStroke: "1px black 0.3",
                  margin: "15px",
                  fontSize: "23px",
                }}>
                <FaFileDownload size={25} className="fadedIn" />
                Download My CV
              </motion.p>
            </motion.a>
          </div>
        </div>
        <ContactImgs />
      </div>
    </>
  );
};

export default Header;
