import "../styles/pricing.css";

const plans = [
  {
    name: "Starter",
    price: "$299",
    description: "Perfect for startups and personal brands.",
    features: [
      "1 Landing Page",
      "Responsive Design",
      "Basic SEO",
      "1 Week Support",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "$699",
    description: "Best choice for growing businesses.",
    features: [
      "Up to 5 Pages",
      "Advanced SEO",
      "Performance Optimization",
      "Contact Form",
      "1 Month Support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$1499",
    description: "Custom solution for large businesses.",
    features: [
      "Unlimited Pages",
      "Custom Features",
      "Premium UI/UX",
      "Priority Support",
      "Maintenance",
    ],
    featured: false,
  },
];

function Pricing() {
  return (
    <section className="pricing" id="pricing" data-aos="fade-up">
      <div className="container">

        <div className="section-heading">
          <span>PRICING</span>

          <h2>
            Flexible Pricing
            <br />
            For Every Business
          </h2>

          <p>
            Transparent pricing with no hidden charges.
          </p>
        </div>

        <div className="pricing-grid">

          {plans.map((plan, index) => (
            <div
              className={`pricing-card ${
                plan.featured ? "featured" : ""
              }`}
              key={index}
            >

              {plan.featured && (
                <div className="popular">
                  MOST POPULAR
                </div>
              )}

              <h3>{plan.name}</h3>

              <h1>{plan.price}</h1>

              <p className="description">
                {plan.description}
              </p>

              <ul>

                {plan.features.map((feature, i) => (
                  <li key={i}>
                    ✓ {feature}
                  </li>
                ))}

              </ul>

              <button>
                Get Started
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Pricing;