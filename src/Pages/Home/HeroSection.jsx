import { Button } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hi, I'm </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Saharah</span> <br />
            Bains
          </h1>
          <p className="hero--section-description">
            Computer Science Student at UBC
            <br /> Bachelor of Science in Biology
          </p>
        </div>
        <a
          href="./resume.pdf"
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/headshot2.png" alt="Hero Section" />
      </div>
    </section>
  );
}
