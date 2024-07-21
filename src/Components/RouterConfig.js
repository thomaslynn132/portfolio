import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../Pages/Loading/Loading";

// Lazy-load components
const Header = lazy(() => import("../Pages/Header/Header"));
const About = lazy(() => import("../Pages/About/About"));
const Projects = lazy(() => import("../Pages/projects/Projects"));
const Error = lazy(() => import("../Pages/Error/ErrorPage"));
const Contact = lazy(() => import("../Pages/Contact/Contact"));
const Messages = lazy(() => import("../Pages/Messages/Messages"));

const RouterConfig = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Error />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/receivedMessages" element={<Messages />} />
      </Routes>
    </Suspense>
  );
};

export default RouterConfig;
