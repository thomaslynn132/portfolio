import "./App.css";
import ContactImgs from "./Contact/Contact";
import Projects from "./projects/Projects";
import SkillImgs from "./skillImages/skillImgs";
function App() {
  return (
    <>
      <div className="App">
        <div className="App-header">
          <div className="portfolio-container">
            <p id="Iam">I am</p>
            <h1 className="myName">Thomas Lynn</h1>
            <a href="https://drive.google.com/file/d/1bqQiV4_MuKB99Sm7FewWT2Pi_udwOYPe/view?usp=drive_link">
              <p>You can download my personal resume by clicking here.</p>
            </a>
          </div>
        </div>
        <section className="about-section">
          <div className="portfolio-container">
            <h2>About Me</h2>
            <p>
              Hello! I'm a passionate web developer with expertise in React.js,
              JavaScript, and now I'm learning tailwind.css, typescript and
              angularjs.
            </p>
          </div>
        </section>
        <section className="projects-section">
          <div className="portfolio-container">
            <h2>Projects</h2>
            <div className="projectsContainer">
              <Projects />
            </div>
          </div>
        </section>
        <section className="skills-section">
          <div className="portfolio-container">
            <h2>Skills</h2>
            <SkillImgs />
          </div>
        </section>
        <section className="contact-section">
          <div className="portfolio-container">
            <h2>Contact Me</h2>
            <ContactImgs />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
