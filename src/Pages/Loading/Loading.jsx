import React from "react";
import { Logo } from "../../Assets/imageExport";
import "./Loading.scss"; // Assuming you have a separate CSS file for styling

const Loading = () => {
  const text = "Just a second";
  const textArray = text.split(" ");

  const renderSpans = () => {
    return textArray.map((word, index) => (
      <span key={index}>
        {Array.from(word).map((char, charIndex) => (
          <span key={charIndex}>{char}</span>
        ))}
        {index < textArray.length - 1 && <span>&nbsp;</span>}
      </span>
    ));
  };

  return (
    <div className="Loading">
      <img
        src={Logo}
        alt="Logo"
        className="loading-img"
        height={200}
        width={200}
      />
      <div className="loading-text">{renderSpans()}</div>
    </div>
  );
};

export default Loading;
