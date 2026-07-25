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
    icon: <FaLaptopCode aria-hidden="true" />,
    title: "Web Development",
    desc: "Fast, scalable and responsive websites built using the latest technologies.",
  },
  {
    icon: <FaPaintBrush aria-hidden="true" />,
    title: "UI / UX Design",
    desc: "Modern interfaces focused on user experience and business conversion.",
  },
  {
    icon: <FaMobileAlt aria-hidden="true" />,
    title: "Responsive Design",
    desc: "Perfect experience across desktop, tablet and mobile devices.",
  },
  {
    icon: <FaSearch aria-hidden="true" />,
    title: "SEO Optimization",
    desc: "Improve visibility and attract more customers through search engines.",
  },
  {
    icon: <FaRocket aria-hidden="true" />,
    title: "Performance Optimization",
    desc: "Lightning-fast websites optimized for Core Web Vitals and Lighthouse.",
  },
  {
    icon: <FaHeadset aria-hidden="true" />,
    title: "Maintenance & Support",
    desc: "Reliable maintenance and technical support whenever you need it.",
  },
];

function Services() {
  return (
    <section
      className="services"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="container">
        <div className="section-heading">
          <span>OUR SERVICES</span>

          <h2 id="services-heading">
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
            <article
              className="service-card"
              key={index}
              aria-labelledby={`service-title-${index}`}
            >
              <div className="service-icon">
                {service.icon}
              </div>

              <h3 id={`service-title-${index}`}>
                {service.title}
              </h3>

              <p>{service.desc}</p>

              <a
                href="#contact"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;