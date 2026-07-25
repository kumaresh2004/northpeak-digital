import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero" data-aos="fade-up">
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-tag">
            🚀 Trusted by Startups & Growing Businesses
          </span>

          <h1>
            We Build <span>Modern Websites</span> That Turn Visitors Into
            Customers
          </h1>

          <p>
            NorthPeak Digital helps startups, creators, and businesses build
            beautiful, responsive, and high-performing websites that generate
            leads, improve brand credibility, and increase revenue.
          </p>

          <div className="hero-buttons">
            <a
              href="#contact"
              className="btn-primary"
              aria-label="Book a free strategy call"
            >
              Book Free Strategy Call
            </a>

            <a
              href="#services"
              className="btn-secondary"
              aria-label="View our services"
            >
              View Our Services
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-card">
              <h2>250+</h2>
              <span>Projects Delivered</span>
            </div>

            <div className="stat-card">
              <h2>98%</h2>
              <span>Happy Clients</span>
            </div>

            <div className="stat-card">
              <h2>6+</h2>
              <span>Years Experience</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80"
            alt="NorthPeak Digital team discussing a website project"
            width="800"
            height="600"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;