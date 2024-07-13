import React, { Suspense } from "react";
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
      backgroundColor: isActive ? "skyblue" : "transparent",
    };
  };

  return (
    <>
      <div className="App">
        <div className="rdrs">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}>
            <NavLink style={navLinkStyles} to="/">
              <div className="redirects fadedIn">
                <BiHome size={20} />
                <p className="redirectTitle">Home</p>
              </div>
            </NavLink>
            <NavLink to="/about" style={navLinkStyles}>
              <div className="redirects fadedIn">
                <HiInformationCircle size={20} />
                <p className="redirectTitle">About</p>
              </div>
            </NavLink>
            <NavLink to="/contact" style={navLinkStyles}>
              <div className="redirects fadedIn">
                <GrContact size={20} />
                <p className="redirectTitle">Contact</p>
              </div>
            </NavLink>
            <NavLink to="/projects" style={navLinkStyles}>
              <div className="redirects fadedIn">
                <GoProject size={20} />
                <p className="redirectTitle">Projects</p>
              </div>
            </NavLink>
          </div>
          <DayOrNightMode />
        </div>
        <Suspense fallback={<Loading />}>
          <RouterConfig />
          <AnimatedCursor
            innerSize={20}
            outerSize={30}
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
