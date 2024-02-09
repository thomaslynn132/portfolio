// RouterConfig.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Pages/Header/Header";
import About from "../Pages/About/About";
import Projects from "../Pages/projects/Projects";

const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default RouterConfig;
