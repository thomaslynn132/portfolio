import React, { useState, useEffect } from "react";
import "./clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getRotationDegrees = (value, total) => {
    const ratio = value / total;
    return ratio * 360;
  };

  const getHourRotation = () => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    return getRotationDegrees(hours * 60 + minutes, 720);
  };

  const getMinuteRotation = () => {
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return getRotationDegrees(minutes * 60 + seconds, 3600);
  };

  const getSecondRotation = () => {
    const seconds = time.getSeconds();
    return getRotationDegrees(seconds, 60);
  };

  return (
    <>
      <div className="clock">
        <div className="numbers">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="number"
              style={{
                transform: `translate(-50%, -50%) rotate(${
                  index * 30
                }deg) translate(0, -85px)`,
              }}>
              {index === 0 ? 12 : index}
            </div>
          ))}
        </div>
        <div
          className="hour-hand"
          style={{
            transform: `translate(-50%, -100%) rotate(${getHourRotation()}deg)`,
          }}></div>
        <div
          className="minute-hand"
          style={{
            transform: `translate(-50%, -100%) rotate(${getMinuteRotation()}deg)`,
          }}></div>
        <div
          className="second-hand"
          style={{
            transform: `translate(-50%, -100%) rotate(${getSecondRotation()}deg)`,
          }}></div>
        <div className="center-dot"></div>
      </div>
    </>
  );
};

export default Clock;
