import Socials from "./Socials";
import MobileHeroImg from "../assets/image-profile-mobile.webp";
import TabletHeroImg from "../assets/image-profile-tablet.webp";
import DesktopHeroImg from "../assets/image-profile-desktop.webp";
import Portrait from "../assets/portrait-bw.jpg";
export default function Hero() {
  const handleClickScroll = () => {
    const element = document.getElementById('Projects');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-nav">
      <Socials />
      </div>
      
      {/* <img className="portrait" src={Portrait} alt="" /> */}
      {/* <img className="mobile-hero-img" src={MobileHeroImg} alt="" /> */}
      {/* <img className="tablet-hero-img" src={TabletHeroImg} alt="" />
      <img className="desktop-hero-img" src={DesktopHeroImg} alt="" /> */}

      <div className="hero-content">
        <div className="hero-title">
          <p>Nice to meet you! I'm <span className="underline">Kelechukwu Nwaji</span>.
          </p>
        </div>

        <p className="hero-text">
        A backend engineer with over 2 years of experience, skilled at building scalable and efficient systems that power web applications. My expertise lies in designing and developing REST APIs. I take great pride in my attention to detail, my ability to write clean and organized code.
        </p>
        
        <a onClick={handleClickScroll} className="btn">My Projects</a>
      </div>
     
    </section>
  );
}
