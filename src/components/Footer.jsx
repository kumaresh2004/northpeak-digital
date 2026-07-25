import "../styles/footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" data-aos="fade-up">
      <div className="container footer-top">
        <div className="footer-brand">
          <h2>
            NorthPeak<span>Digital</span>
          </h2>

          <p>
            Building modern websites that help businesses attract more
            customers, increase conversions, and grow with confidence.
          </p>

          <nav
            className="social-icons"
            aria-label="NorthPeak Digital social media links"
          >
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
            >
              <FaFacebookF aria-hidden="true" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram page"
            >
              <FaInstagram aria-hidden="true" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our LinkedIn page"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Twitter page"
            >
              <FaTwitter aria-hidden="true" />
            </a>
          </nav>
        </div>

        <div className="footer-links">
          <h3>Company</h3>

          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-links">
          <h3>Services</h3>

          <a href="#services">Website Development</a>
          <a href="#services">UI / UX Design</a>
          <a href="#services">SEO Optimization</a>
          <a href="#services">Maintenance</a>
        </div>

        <address className="footer-contact">
          <h3>Contact</h3>

          <p>📧 hello@northpeakdigital.com</p>
          <p>📞 +1 (555) 123-4567</p>
          <p>📍 Remote services worldwide</p>
        </address>
      </div>

      <div className="footer-bottom">
        <p>© 2026 NorthPeak Digital. All Rights Reserved.</p>

        <p>
          Built for{" "}
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Digital Heroes Training Task
          </a>{" "}
          | Developed by Kumaresh
        </p>
      </div>
    </footer>
  );
}

export default Footer;