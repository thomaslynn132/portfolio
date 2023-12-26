import React from "react";
import { myPhoto } from "../../Assets/imageExport";
const About = () => {
  return (
    <>
      <div className="aboutContainer">
        <div className="image">
          <img src={myPhoto} alt="MyPhoto" height={400} width={400} />
        </div>
        <div className="lineBreak"></div>
      </div>
    </>
  );
};
export default About;
