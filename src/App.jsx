import Hero from "./components/Hero";
import Socials from "./components/Socials";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
export default function App() {
  return (
    <div>
      <div className="container">
        <Hero />
        <Skills />
        <Projects />
        </div>
      {/* <Contact /> */}
    </div>
  );
}
