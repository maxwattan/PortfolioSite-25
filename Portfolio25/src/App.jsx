import meditate from "./assets/Meditate.jpg"
import me from "./assets/profile.jpg"
import projectOne from "./assets/projectOne.png"
import projecttwo from "./assets/projectTwo.png";
import './App.css'

function App() {
 

  return (
    <div className="App">
      <nav className="nav">
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
        <h1>Welcome</h1>
        <img src={meditate} alt="meditate" className="meditate"></img>
      </section>

      <section className="about" id="about">
        <h1 className="about"> Max W </h1>
        <img src={me} alt="me" className="me" height="500" width="500"></img>
        <br></br>
        <a className="linked" href="https://www.linkedin.com/in/maxwattana/">
          LinkedIn
        </a>
        <a className="git" href="https://github.com/maxwattan">
          Github
        </a>
        <h2>About</h2>
        <p>name About Me – Short background, skills, and interests</p>
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
