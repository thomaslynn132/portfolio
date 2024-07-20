import DayOrNightMode from "./DayOrNightMode";
import { NavLink } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { GrContact } from "react-icons/gr";
import { GoProject } from "react-icons/go";
import { HiInformationCircle } from "react-icons/hi";

function NavBar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "skyblue" : "transparent",
      border: "10px 20px",
    };
  };

  return (
    <>
      <div
        className="rdrs"
        style={{ width: "100vw", marginTop: "0px", marginBottom: "auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}>
          <NavLink style={navLinkStyles} className="redirects" to="/">
            <div className="fadedIn">
              <BiHome size={20} className="redirectIcon" />
              <p className="redirectTitle">Home</p>
            </div>
          </NavLink>
          <NavLink to="/about" className="redirects" style={navLinkStyles}>
            <div className="fadedIn">
              <HiInformationCircle size={20} className="redirectIcon" />
              <p className="redirectTitle">About</p>
            </div>
          </NavLink>
          <NavLink to="/contact" className="redirects" style={navLinkStyles}>
            <div className="fadedIn">
              <GrContact size={20} className="redirectIcon" />
              <p className="redirectTitle">Contact</p>
            </div>
          </NavLink>
          <NavLink to="/projects" className="redirects" style={navLinkStyles}>
            <div className="fadedIn">
              <GoProject size={20} className="redirectIcon" />
              <p className="redirectTitle">Projects</p>
            </div>
          </NavLink>
        </div>
        <DayOrNightMode />
      </div>
    </>
  );
}

export default NavBar;
