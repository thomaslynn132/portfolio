import React from "react";
import { Logo } from "../../Assets/imageExport";
const Loading = () => {
  return (
    <>
      <div className="Loading">
        <img src={Logo} alt="Logo" height={400} width={400} />
        <label className="loading-text">
          Please Wait a second while loading the contents.
        </label>
      </div>
    </>
  );
};
export default Loading;
