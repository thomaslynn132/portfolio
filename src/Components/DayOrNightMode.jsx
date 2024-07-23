import React, { useState, useEffect } from "react";
import { BsCloudSunFill } from "react-icons/bs";
import { GiNightSky } from "react-icons/gi";
const DayOrNightMode = () => {
  const [nightMode, setNightMode] = useState(true);

  const toggleNightMode = () => {
    setNightMode(!nightMode);
  };

  useEffect(() => {
    if (nightMode) {
      document.body.classList.add("night");
    } else {
      document.body.classList.remove("night");
    }
  }, [nightMode]);

  return (
    <>
      <div
        className="dayOrNightImg"
        onClick={toggleNightMode}
        style={{ top: "10px" }}>
        {nightMode ? (
          <BsCloudSunFill
            size={50}
            style={{
              marginLeft: "15px",
            }}
          />
        ) : (
          <GiNightSky
            size={50}
            style={{
              marginLeft: "15px",
            }}
          />
        )}
      </div>
    </>
  );
};

export default DayOrNightMode;
