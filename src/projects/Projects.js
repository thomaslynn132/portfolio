import React from "react";
import { EnglishGrammar } from "./EnglishGrammar";
import { HomePage } from "./HomePage";
import "../App.css";

export default function Projects() {
  const projects = [
    { name: "EnglishGrammar", component: <EnglishGrammar /> },
    { name: "HomePageContest", component: <HomePage /> },
  ];

  return (
    <>
      {projects.map((project, index) => (
        <div key={index}>{project.component}</div>
      ))}
    </>
  );
}
