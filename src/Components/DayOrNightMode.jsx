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
        style={{ marginRight: "15px" }}>
        {nightMode ? (
          <BsCloudSunFill
            size={50}
            style={{
              marginRight: "15px",
              marginTop: "15px",
            }}
          />
        ) : (
          <GiNightSky
            size={50}
            style={{
              marginRight: "15px",
              marginTop: "15px",
            }}
          />
        )}
      </div>
    </>
  );
};

export default DayOrNightMode;
