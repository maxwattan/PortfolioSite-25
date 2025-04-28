// import logo from "./assets/mwlogo.png"
import meditate from "./assets/Meditate.jpg"
import me from "./assets/profile.jpg"
import projectOne from "./assets/projectOne.png"
import projecttwo from "./assets/projectTwo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './App.css'

function App() {
 

  return (
    <div className="App">
      <nav className="nav">
        {/* <div className="nav-logo">
        <img src={logo} alt="logo" className="logo"></img>
        </div> */}
        <ul>
          <li>
            <a href="#welcome"> Home </a>
          </li>

          <li>
            <a href="#about"> About </a>
          </li>

          <li>
            <a href="#projects"> Projects </a>
          </li>

          <li>
            <a href="#contact"> Contact </a>
          </li>
        </ul>
      </nav>

      <section className="welcome" id="welcome">
        <div className="welcome-content">
          <h1> Welcome </h1>
          <h2>Take a Deep Breath...</h2>
          <h3> and Exhale...</h3>
          <img src={meditate} alt="meditate" className="meditate"></img>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-content">
          <h1 className="about-title">Hello, My name is Max!</h1>

          <p className="about-description">
            I am a full stack web developer experience with JavaScript, HTML,
            CSS, Node, Express, React, PostgreSQL, APIs, Git, Data Structures,
            Algorithms, sprints, Agile, code reviews, and pair programming.
          </p>
          <img src={me} alt="me" className="about-image"></img>

          <div className="social-links">
            <a
              className="linked"
              href="https://www.linkedin.com/in/maxwattana/"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2xl"
                fade
                style={{ color: "#74c0fc" }}
              />
            </a>

            <a className="git" href="https://github.com/maxwattan">
              <FontAwesomeIcon
                icon={faGithub}
                size="2xl"
                style={{ color: "#FFD43B" }}
                fade
              />
            </a>
          </div>

          <div className="background-content">

          <h2 className="background-title"> Background </h2>

          <p className="background-description">
            Before entering the tech world, I pursued a career in hospitality
            with my Bachelor's in Hospitality Management. Due to physical
            injuries, I found it challenging to physically keep up with the
            fast-paced enviornment. This led me to transition my skills into
            tech. As a full stack web developer, I am passionate about creating
            platforms that enhance our lives, benefit our communities and
            support our environment. I bring a unique perspective and a
            commitment to making a positive impact through technology.
          </p>

          <p className="hobbies">
            Outside of coding some of my hobbies includes: cooking, baking,
            fishing, and exercising.
          </p>

          <p className="fun-fact">
            Fun Fact About Me: I was a monk twice in my life.
          </p>
          </div>

        </div>
      </section>

      <section className="projects" id="projects">
        <h1 className="projects" id="projects">
          Projects
        </h1>
        <img
          src={projectOne}
          alt="projectOne"
          className="projectOne"
          height="500"
          width="500"
        ></img>
        <p>
          Projects – A placeholder or sample project card (you'll add more here
          throughout the program)
        </p>
        <img
          src={projecttwo}
          alt="projectTwo"
          className="projectTwo"
          height="500"
          width="500"
        ></img>
        <p>
          Projects – A placeholder or sample project card (you'll add more here
          throughout the program)
        </p>
      </section>

      <section className="contact" id="contact">
        <h1 className="contact"> Contact </h1>
        <p>Contact – Email or form (does not need to be functional)</p>
      </section>

      <footer className="footer" id="footer"></footer>
    </div>
  );
}

export default App
