import React, { Suspense } from "react";
import "./App.css";
import Loading from "./Pages/Loading/Loading";
import RouterConfig from "./Components/RouterConfig";
import AnimatedCursor from "react-animated-cursor";
import DayOrNightMode from "./Components/DayOrNightMode";
import { NavLink } from "react-router-dom";
function App() {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "cyan" : "white",
      fontWeight: isActive ? "bolder" : "normal",
      textDecoration: isActive ? "none" : "underline",
      backgroundColor: isActive ? "skyblue" : "none",
    };
  };
  return (
    <>
      <div className="App">
        <div className="rdrs ">
          <div className="rdrs ">
            <NavLink style={navLinkStyles} to="/">
              <div className="redirects fadedIn">Home</div>{" "}
            </NavLink>

            <NavLink to="/about" style={navLinkStyles}>
              <div className="redirects fadedIn">About</div>{" "}
            </NavLink>

            <NavLink to="/contact" style={navLinkStyles}>
              <div className="redirects fadedIn">Contact</div>{" "}
            </NavLink>

            <NavLink to="/projects" style={navLinkStyles}>
              <div className="redirects fadedIn">Projects</div>{" "}
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
