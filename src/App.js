import React, { Suspense, useState } from "react";
import "./App.css";
import Loading from "./Pages/Loading/Loading";
import RouterConfig from "./Components/RouterConfig";
import AnimatedCursor from "react-animated-cursor";
import DayOrNightMode from "./Components/DayOrNightMode";
import { NavLink } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { GrContact } from "react-icons/gr";
import { GoProject } from "react-icons/go";
import { HiInformationCircle } from "react-icons/hi";
function App() {
  const navLinkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "skyblue" : "none",
    };
  };
  return (
    <>
      <div className="App">
        <div className="rdrs ">
          <div className="rdrs ">
            <NavLink style={navLinkStyles} to="/">
              <div className="redirects fadedIn">
                <BiHome size={25} />
              </div>{" "}
            </NavLink>

            <NavLink to="/about" style={navLinkStyles}>
              <div className="redirects fadedIn">
                <HiInformationCircle size={25} />
              </div>{" "}
            </NavLink>

            <NavLink to="/contact" style={navLinkStyles}>
              <div className="redirects fadedIn">
                <GrContact size={25} />
              </div>{" "}
            </NavLink>

            <NavLink to="/projects" style={navLinkStyles}>
              <div className="redirects fadedIn">
                <GoProject size={25} />
              </div>{" "}
            </NavLink>
          </div>
          <DayOrNightMode />
        </div>
        <Suspense fallback={<Loading />}>
          <RouterConfig />
          <AnimatedCursor
            innerSize={40}
            outerSize={50}
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={3}
          />
        </Suspense>
      </div>
    </>
  );
}

export default App;
