import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <div className="container contact-wrapper">

        <div className="contact-left">

          <span>GET IN TOUCH</span>

          <h2>
            Let's Build Something
            Amazing Together
          </h2>

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
              <p>Available upon Request 123-4567</p>
            </div>

            <div>
              <h4>Working Hours</h4>
              <p>Mon - Fri | 9 AM - 6 PM</p>
            </div>

          </div>

        </div>

        <div className="contact-right">

          <form>

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              required
            />

            <input
              type="text"
              placeholder="Company Name"
            />

            <textarea
              rows="6"
              placeholder="Tell us about your project..."
              required
            ></textarea>

            <button type="submit">
              Request Free Consultation
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;