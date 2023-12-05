import html5 from "./html5.png";
import css3 from "./css3.png";
import bootstrap from "./Bootstrap.png";
import javascript from "./javascript.png";
import reactjs from "./react.png";
export default function SkillImgs() {
  return (
    <>
      <div className="ImgHolder">
        <img src={html5} height="50" width="50" alt="HTML 5" />
        <img src={css3} height="50" width="50" alt="css3" />
        <img src={bootstrap} height="50" width="50" alt="Bootstrap" />
        <img src={javascript} height="50" width="50" alt="Javascript ES6" />
        <img src={reactjs} height="50" width="50" alt="React.js" />
      </div>
    </>
  );
}
