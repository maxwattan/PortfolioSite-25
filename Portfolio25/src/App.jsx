// import logo from "./assets/mwlogo.png"
// import meditate from "./assets/Meditate.jpg"
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
        </div>
      </section>

      <section className="about" id="about">
        <video
          className="about-background-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            // src="https://videos.pexels.com/video-files/9484987/9484987-uhd_1440_2560_25fps.mp4"
            src="https://videos.pexels.com/video-files/5336203/5336203-uhd_2732_1440_30fps.mp4"
            type="video/mp4"
          ></source>
        </video>
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
              fast-paced environment. This led me to transition my skills into
              tech. As a full stack web developer, I am passionate about
              creating platforms that enhance our lives, benefit our communities
              and support our environment. I bring a unique perspective and a
              commitment to making a positive impact through technology.
            </p>

            <p className="hobbies">
              Outside of coding some of my hobbies includes: cooking, baking,
              fishing, and light exercising/stretching.
            </p>

            <p className="fun-fact">
              Fun Fact About Me: I was a monk twice in my life.
            </p>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <h1 className="projects-title" id="projects">
          Projects
        </h1>
        <div className="projects-container">
          <div className="project-card">
            <img src={projectOne} alt="projectOne"></img>
            <div className="project-content">
              <p className="project-description">
                This is the first app I created when I first learned to code.
                It’s a recipe finder that suggests kitchen food ideas along with
                a list of ingredients and cooking instructions. The app
                integrates an API and includes some basic CSS styling. It’s a
                great reminder of how I first got started and how far I have
                come.
              </p>
              <button className="project-button">
                <a
                  href="https://zippy-horse-6f8f0e.netlify.app/"
                  className="recipe-finder"
                >
                  {" "}
                  Live Site!{" "}
                </a>
              </button>
            </div>
          </div>

          <div className="project-card">
            <img src={projecttwo} alt="projectTwo"></img>
            <div className="project-content">
              <p className="project-description">
                Care Village is a four-person capstone team with a mission to
                empower parents and caregivers on their unique parenting
                journeys while fostering a compassionate and supportive
                community. We provide a platform that seamlessly connects
                individuals with diverse parenting methods and offers a
                dedicated space for the generosity of giving to children in
                need. We believe in the power of knowledge-sharing and
                collaboration among parents, grandparents, guardians, and loved
                ones.
              </p>
              <button className="project-button">
                <a
                  href="https://carevillage.netlify.app/"
                  className="care-village"
                >
                  Live Site!
                </a>
              </button>
            </div>
          </div>

          <div className="project-card">
            <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjNjYW5vaTNvNzZlaHlmdzlwb2swYzcybW5jZmNydGlubTFycHVzdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l397abq3tzY5HpTCE/giphy.gif"></img>
            <div className="project-content">
              <p className="project-description"> More projects to come...</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h1 className="contact-title"> Contact </h1>
        <h3 className="contact-email">
          {" "}
          Email : <a> MWDevStudios@icloud.com</a>
        </h3>
      </section>

      <footer className="footer" id="footer">
        <h5> © MW Studios 2025</h5>
      </footer>
    </div>
  );
}

export default App
