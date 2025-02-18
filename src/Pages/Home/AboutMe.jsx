export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/headshot.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="skills--section--heading">About Me</h1>
          <p className="about--section-description">
            I'm a computer science student located in Vancouver, BC who is
            seeking software or data internships. I currently work as a Data
            Coordinator for the UBC Faculty of Medicine Digital Solutions team,
            where I develop data collection tools and perform data analysis. I
            also have professional experience in web development, creating a
            custom website for a small business using React. I am studying to
            complete my second Bachelor's Degree in Computer Science at the
            University of British Columbia, in the BCS program. I graduated with
            a Bachelor of Science in Biology in May of 2023 and I worked in
            genetics research for over a year before deciding to follow my
            passion for tech. I have a love for lifelong learning and I look
            forward to making meaningful contributions to the tech industry!
          </p>
          <p className="about--section-description">
            Outside of academics, I enjoy attending hackathons and building cool
            projects. In my free time you can either find me with my nose in a
            book, on a run, or in the front row at a concert!
          </p>
          <p className="about--section-description">
            Thanks for checking out my website!
          </p>
        </div>
      </div>
    </section>
  );
}
