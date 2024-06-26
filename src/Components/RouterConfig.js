// RouterConfig.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Pages/Header/Header";
import About from "../Pages/About/About";
import Projects from "../Pages/projects/Projects";
import Error from "../Pages/Error/ErrorPage";
import Contact from "../Pages/Contact/Contact";

const RouterConfig = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Error />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default RouterConfig;
