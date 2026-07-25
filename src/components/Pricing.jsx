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
    <section
      className="pricing"
      id="pricing"
      aria-labelledby="pricing-heading"
    >
      <div className="container">
        <div className="section-heading">
          <span>PRICING</span>

          <h2 id="pricing-heading">
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
            <article
              key={index}
              className={`pricing-card ${
                plan.featured ? "featured" : ""
              }`}
              aria-labelledby={`plan-title-${index}`}
            >
              {plan.featured && (
                <div
                  className="popular"
                  aria-label="Most popular plan"
                >
                  MOST POPULAR
                </div>
              )}

              <h3 id={`plan-title-${index}`}>{plan.name}</h3>

              <p className="price">
                <strong>{plan.price}</strong>
              </p>

              <p className="description">
                {plan.description}
              </p>

              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>

              <button
                type="button"
                aria-label={`Choose the ${plan.name} plan`}
              >
                Get Started
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;