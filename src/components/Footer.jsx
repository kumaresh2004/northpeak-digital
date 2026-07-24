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

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

          </div>

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

          <a href="#">Website Development</a>
          <a href="#">UI / UX Design</a>
          <a href="#">SEO Optimization</a>
          <a href="#">Maintenance</a>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>📧 hello@northpeakdigital.com</p>

          <p>📞 (Available upon Request) 123-4567</p>

          <p>📍 Remote services worldwide</p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 NorthPeak Digital. All Rights Reserved.
        </p>

        <p>
          Designed & Developed by Kumaresh | Internship Submission 2026
        </p>

      </div>

    </footer>
  );
}

export default Footer;