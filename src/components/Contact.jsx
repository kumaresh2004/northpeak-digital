import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <div className="container contact-wrapper">
        <div className="contact-left">
          <span>GET IN TOUCH</span>

          <h2>Let's Build Something Amazing Together</h2>

          <p>
            Whether you're launching a new startup or upgrading your existing
            website, our team is here to help you create a modern digital
            experience that drives results.
          </p>

          <div className="contact-box">
            <div>
              <h4>Email</h4>
              <p>hello@northpeakdigital.com</p>
            </div>

            <div>
              <h4>Phone</h4>
              <p>+1 (555) 123-4567</p>
            </div>

            <div>
              <h4>Working Hours</h4>
              <p>Mon - Fri | 9 AM - 6 PM</p>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form noValidate>
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              autoComplete="name"
              required
            />

            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email Address"
              autoComplete="email"
              required
            />

            <label htmlFor="company">Company Name</label>
            <input
              id="company"
              type="text"
              name="company"
              placeholder="Company Name"
              autoComplete="organization"
            />

            <label htmlFor="message">Project Details</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell us about your project..."
              minLength="20"
              required
            ></textarea>

            <button
              type="submit"
              aria-label="Request a free consultation"
            >
              Request Free Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;