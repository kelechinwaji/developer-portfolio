import Socials from "./Socials";
export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
      <div className="contact-info">
        <h1>Contact</h1>
        <p>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
      </div>

      <div className="contact-form">
        <input type="text" placeholder="NAME" />
        <input type="text" placeholder="EMAIL" />
        <textarea placeholder="Message" type="text" />
        <button className="btn">Send Message</button>
      </div>
</div>
      <div className="social-container">
        <Socials />
      </div>
    </section>
  );
}
