import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { motion } from "framer-motion";

export default function SkillImgs() {
  const skillImgs = [
    {
      name: "HTML 5",
      src: <FaHtml5 size={50} />,
    },
    {
      name: "CSS 3",
      src: <FaCss3Alt size={50} />,
    },
    {
      name: "JavaScript(ES6)",
      src: <IoLogoJavascript size={50} />,
    },
    {
      name: "Bootstrap",
      src: <FaBootstrap size={50} />,
    },
    {
      name: "React Js",
      src: <FaReact size={50} />,
    },
    {
      name: "GitHub",
      src: <FaGithub size={50} />,
    },
    { name: "Framer Motion", src: <FiFramer size={50} /> },
    { name: "Firebase", src: <IoLogoFirebase size={50} /> },
  ];

  return (
    <>
      <section className="skills-section skills">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="portfolio-container">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            Skills
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="ImgHolder"
            style={{ height: "auto" }}>
            {skillImgs.map((skillImg, Index) => (
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="skillImgs redirects"
                key={Index}
                style={{
                  minWidth: "110px",
                  border: "none",
                  background: "none",
                }}>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  style={{ backgroundColor: "transparent", border: "none" }}>
                  {skillImg.src}{" "}
                </motion.button>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="redirectTitle">
                  {skillImg.name}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
