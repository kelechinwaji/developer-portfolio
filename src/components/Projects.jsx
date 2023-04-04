import Planets from "../assets/the-planets-preview.jpg";
import AroundTheWorld from "../assets/countries-preview.jpg";
import Splitter from "../assets/splitter-preview.jpg";
import ClockApp from "../assets/clock-preview.jpg";
import RPSPreview from "../assets/rps-preview.jpg";
import Galleria from "../assets/galleria-preview.jpg";
export default function Projects() {
  return (
    <section id="Projects" className="projects">
      <div className="projects-header">
        <h1 className="projects-title">Projects</h1>
        {/* <button className="btn">Contact Me</button> */}
      </div>
      <div className="card-container">
        <div className="card">
          <img src={Planets} alt="Project 1" className="thumbnail" />
          <div className="card-content">
            <h3 className="project-title">The Planets</h3>
            <div className="tech">
              <span>Node.js</span>
              <span>EJS</span>
            </div>
            <p class="project-desc">This project is a informational site about the planets. No, Pluto isn't a planet. (Render.com free tier apps load slowly, please be patient). Data taken from JSON file.</p>
            <div className="card-btn">
            <a target="_blank" href="https://all-about-the-planets.onrender.com/"><button className="btn">View Project</button></a>
            <a target="_blank" href="https://github.com/GuyNamedEJ/planets-fact-site"><button className="btn">View Code</button></a>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={AroundTheWorld} alt="Project 1" className="thumbnail" />
          <div className="card-content">
            <h3 className="project-title">Around The World</h3>
            <div className="tech">
              <span>React</span>
              <span>Tailwind</span>
              <span>Material UI</span>
              <span>Countries REST API</span>
            </div>
            <p class="project-desc">This site will give you information on every country in the world</p>
            <div className="card-btn">
            <a target="_blank" href="https://project-globetrotter.netlify.app/"><button className="btn">View Project</button></a>
            <a target="_blank" href="https://github.com/GuyNamedEJ/Where-in-the-world-react"><button className="btn">View Code</button></a>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={Splitter} alt="Project 1" className="thumbnail" />
          <div className="card-content">
            <h3 className="project-title">Splitter Calculator</h3>
            <div className="tech">
              <span>HTML</span>
              <span>Bootstrap 5</span>
              <span>Javascript</span>
            </div>
            <p class="project-desc">A tool to help you splitter the bill when you go out to eat with friends! Also useful if you eat out solo.</p>
            <div className="card-btn">
            <a target="_blank" href="https://tip-calculator-app-main-jade.vercel.app"><button className="btn">View Project</button></a>
            <a target="_blank" href="https://github.com/GuyNamedEJ/tip-calculator-app-main"><button className="btn">View Code</button></a>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={ClockApp} alt="Project 1" className="thumbnail" />
          <div className="card-content">
            <h3 className="project-title">Clock App</h3>
            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>REST APIs</span>
            </div>
            <p class="project-desc">A simple app that displays the time in your location, as well as a random quote. (Note: Random Quote does not work since Heroku no longer has a free tier)</p>
            <div className="card-btn">
            <a target="_blank" href="https://clock-app-main.vercel.app/"><button className="btn">View Project</button></a>
            <a target="_blank" href="https://github.com/GuyNamedEJ/clock-app-main"><button className="btn">View Code</button></a>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={RPSPreview} alt="Project 1" className="thumbnail" />
          <div className="card-content">
            <h3 className="project-title">Rock, Paper, Scissors</h3>
            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
            </div>
            <p class="project-desc">A simple game of rock paper scissors</p>
            <div className="card-btn">
            <a target="_blank" href="https://rock-paper-scissors-guynamedej.vercel.app/"><button className="btn">View Project</button></a>
            <a target="_blank" href="https://github.com/GuyNamedEJ/rock-paper-scissors-master"><button className="btn">View Code</button></a>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={Galleria} alt="Project 1" className="thumbnail" />
          <div className="card-content">
            <h3 className="project-title">Art Galleria</h3>
            <div className="tech">
              <span>React</span>
              <span>Tailwind</span>
            </div>
            <p class="project-desc">Art Gallery slideshow site that gives information on different paintings. Data taken from a JSON file</p>
            <div className="card-btn">
            <a target="_blank" href="https://ej-galleria.netlify.app/"><button className="btn">View Project</button></a>
            <a target="_blank" href="https://github.com/GuyNamedEJ/rock-paper-scissors-master"><button className="btn">View Code</button></a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
