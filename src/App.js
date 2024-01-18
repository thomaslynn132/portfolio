import "./App.css";
import ContactImgs from "./Pages/Contact/Contact";
import Projects from "./Pages/projects/Projects";
import SkillImgs from "./Pages/skillImages/skillImgs";
import About from "./Pages/About/About";
import { Background } from "./Assets/imageExport";
function App() {
  return (
    <>
      <div className="App">
        <div
          className="App-header"
          style={{ backgroundImage: `url(${Background})` }}>
          <div className="portfolio-container">
            <p>I am</p>
            <h1 className="myName">Thomas Lynn</h1>
            <a href="https://drive.google.com/file/d/1oiRDlTUVEq-8dr0Z1jiOCDQXgNkykka2/view?usp=drive_link">
              <p>You can download my personal resume by clicking here.</p>
            </a>
          </div>
        </div>

        <div className="forBgImg">
          <section className="about-section">
            <div className="portfolio-container">
              <h2>About Me</h2>
              <About />
              <p>
                Hello! I'm Thant Lynn Naing and a passionate web developer with
                expertise in React.js, JavaScript, and now I'm learning
                tailwind.css, typescript and angularjs.
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
      </div>
    </>
  );
}

export default App;
