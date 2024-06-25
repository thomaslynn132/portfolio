import React, { useState, useEffect } from "react";
import { GiNightSky } from "react-icons/gi";
import { WiDayCloudy } from "react-icons/wi";

const DayOrNightMode = () => {
  const [nightMode, setNightMode] = useState(false);

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
      <div className="dayOrNightImg" onClick={toggleNightMode}>
        {nightMode ? <GiNightSky /> : <WiDayCloudy />}
      </div>
    </>
  );
};

export default DayOrNightMode;
