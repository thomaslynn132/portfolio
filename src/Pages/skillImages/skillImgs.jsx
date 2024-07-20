import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
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
      name: "JavaScript",
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
  ];
  return (
    <>
      <section className="skills-section skills">
        <div className="portfolio-container">
          <h1>Skills</h1>

          <div className="ImgHolder" style={{ height: "auto" }}>
            {skillImgs.map((skillImg, Index) => (
              <div
                className="skillImgs redirects"
                key={Index}
                style={{ width: "30vw", border: "none", background: "none" }}>
                {skillImg.src}
                <div className="redirectTitle"> {skillImg.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
