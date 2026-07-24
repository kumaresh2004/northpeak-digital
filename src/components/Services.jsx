import "../styles/services.css";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaMobileAlt,
  FaSearch,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    desc: "Fast, scalable and responsive websites built using the latest technologies.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI / UX Design",
    desc: "Modern interfaces focused on user experience and business conversion.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    desc: "Perfect experience across desktop, tablet and mobile devices.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Optimization",
    desc: "Improve visibility and attract more customers through search engines.",
  },
  {
    icon: <FaRocket />,
    title: "Performance",
    desc: "Lightning-fast websites optimized for Core Web Vitals and Lighthouse.",
  },
  {
    icon: <FaHeadset />,
    title: "Support",
    desc: "Reliable maintenance and technical support whenever you need it.",
  },
];

function Services() {
  return (
    <section className="services" id="services" data-aos="fade-up">

      <div className="container">

        <div className="section-heading">

          <span>OUR SERVICES</span>

          <h2>
            Everything You Need To Build
            <br />
            Your Online Presence
          </h2>

          <p>
            From design to deployment, we create high-performing digital
            experiences that help businesses grow faster.
          </p>

        </div>

        <div className="services-grid">

          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

              <a href="#contact">
                Learn More →
              </a>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;