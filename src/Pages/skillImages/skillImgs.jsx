import {
  html5,
  Css3,
  javascript,
  Bootstrap,
  react,
} from "../../Assets/imageExport";
export default function SkillImgs() {
  const skillImgs = [
    {
      name: "HTML 5",
      src: html5,
    },
    {
      name: "CSS 3",
      src: Css3,
    },
    {
      name: "JavaScript",
      src: javascript,
    },
    {
      name: "Bootstrap",
      src: Bootstrap,
    },
    {
      name: "React Js",
      src: react,
    },
  ];
  return (
    <>
      <div className="ImgHolder">
        {skillImgs.map((skillImg, Index) => (
          <img
            src={skillImg.src}
            height="50"
            width="50"
            alt={skillImg.name}
            className="img"
            key={Index}
          />
        ))}
      </div>
    </>
  );
}
