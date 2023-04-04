import Speak from "../assets/speak.jpeg";
import Afri from "../assets/afri.jpeg";
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
          <img src={Speak} alt="Project 1" className="thumbnail" />
          <div className="card-content">
            <h3 className="project-title">SpeakBetter</h3>
            <div className="tech">
              <span>Node.js</span>
              <span>EJS</span>
            </div>
            <p class="project-desc">AI-powered grammar checker backed by an automatic speech recognition system trained with over 650,000 hours of multilingual speech data collected from all over the internet.</p>
            <div className="card-btn">
            <a target="_blank" href="https://speakbetter.fun/"><button className="btn">View Project</button></a>
            <a target="_blank" href="https://github.com/workshopapps/grammarcheckerai.web/tree/feat/BAC-12-user-profile"><button className="btn">View Code</button></a>
            </div>
          </div>
        </div>

        <div className="card">
          <img src={Afri} alt="Project 1" className="thumbnail" />
          <div className="card-content">
            <h3 className="project-title">AfriBook</h3>
            <div className="tech">
              <span>NodeJs</span>
              <span>Typscript</span>
            </div>
            <p class="project-desc">AfriBook is an E-commerce market place for African authors to publish books and readers can buy.</p>
            <div className="card-btn">
            <a target="_blank" href="https://afribook.netlify.app/"><button className="btn">View Project</button></a>
            <a target="_blank" href="https://github.com/AfriBooks/Backend_api"><button className="btn">View Code</button></a>
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
