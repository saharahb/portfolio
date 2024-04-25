export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get in Touch</p>
        <h2>Contact Me</h2>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="subject" className="contact--label">
            <span className="text-md">Subject</span>
            <input
              type="text"
              className="contact--input text-md"
              name="subject"
              id="subject"
              required
            />
          </label>
        </div>
        <div className="bottom--container">
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              id="message"
              cols="30"
              rows="8"
              placeholder="Type your message..."
            />
          </label>
          <div className="contact--form--btn--container">
            <button className="btn btn-primary contact--form--btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
