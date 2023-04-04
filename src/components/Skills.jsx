import BgImage from "../assets/pattern-rings.svg";
export default function Skills() {
  return (
    <section className="skills">
      <img className="skills-bg" src={BgImage} alt="" />
      <div className="skill">
        <h1 className="skill-name">HTML</h1>
        {/* <p className="experience">4 Years Experience</p> */}
      </div>

      <div className="skill">
        <h1 className="skill-name">CSS</h1>
        {/* <p className="experience">4 Years Experience</p> */}
      </div>

      <div className="skill">
        <h1 className="skill-name">Bootstrap</h1>
        {/* <p className="experience">4 Years Experience</p> */}
      </div>

      <div className="skill">
        <h1 className="skill-name">Javascript</h1>
        {/* <p className="experience">4 Years Experience</p> */}
      </div>

      <div className="skill">
        <h1 className="skill-name">React.js</h1>
        {/* <p className="experience">1 Year Experience</p> */}
      </div>

      <div className="skill">
        <h1 className="skill-name">Node.js</h1>
        {/* <p className="experience">1 Year Experience</p> */}
      </div>

      <div className="skill">
        <h1 className="skill-name">Express</h1>
        {/* <p className="experience">1 Year Experience</p> */}
      </div>

      <div className="skill">
        <h1 className="skill-name">MongoDB</h1>
        {/* <p className="experience">1 Year Experience</p> */}
      </div>

      <div className="skill">
        <h1 className="skill-name">Tailwind</h1>
        {/* <p className="experience">1 Year Experience</p> */}
      </div>
    </section>
  );
}
