import React, { useState, useEffect } from "react";
import DayOrNightMode from "./DayOrNightMode";
import { NavLink } from "react-router-dom";
import { BiHome } from "react-icons/bi";
import { GrContact } from "react-icons/gr";
import { GoProject } from "react-icons/go";
import { HiInformationCircle } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";

const navLinks = [
  {
    to: "/",
    label: "Home",
    icon: <BiHome size={20} className="redirectIcon" />,
  },
  {
    to: "/about",
    label: "About",
    icon: <HiInformationCircle size={20} className="redirectIcon" />,
  },
  {
    to: "/contact",
    label: "Contact",
    icon: <GrContact size={20} className="redirectIcon" />,
  },
  {
    to: "/projects",
    label: "Projects",
    icon: <GoProject size={20} className="redirectIcon" />,
  },
];

function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "skyblue" : "transparent",
      border: "10px 20px",
    };
  };

  const renderNavLinks = (onClick) =>
    navLinks.map(({ to, label, icon }) => (
      <NavLink
        key={to}
        to={to}
        style={navLinkStyles}
        className="redirects"
        onClick={onClick}>
        <div className="fadedIn">
          {icon}
          <p className="redirectTitle">{label}</p>
        </div>
      </NavLink>
    ));

  const renderMobileNavLinks = (onClick) =>
    navLinks.map(({ to, label }) => (
      <NavLink
        key={to}
        to={to}
        style={navLinkStyles}
        className="redirects"
        onClick={onClick}>
        <div className="fadedIn">
          <p className="redirectTitle" style={{ display: "block" }}>
            {label}
          </p>
        </div>
      </NavLink>
    ));

  return (
    <>
      <div className="rdrs" style={{ width: "100vw" }}>
        {isDesktop ? (
          <div style={{ display: "flex", flexDirection: "row" }}>
            {renderNavLinks(null)}
          </div>
        ) : isMobileMenuOpen ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {renderMobileNavLinks(toggleMobileMenu)}
          </div>
        ) : (
          <div onClick={toggleMobileMenu}>
            <FiMenu
              size={30}
              style={{
                color: "black",
                border: "3px solid",
                borderRadius: "20%",
              }}
            />
          </div>
        )}
        <div>
          <DayOrNightMode />
        </div>
      </div>
    </>
  );
}

export default NavBar;
