import "../styles/trustedby.css";

const industries = [
  "E-commerce",
  "Healthcare",
  "Education",
  "Finance",
  "Startups",
];

function TrustedBy() {
  return (
    <section
      className="trusted"
      aria-labelledby="trusted-heading"
    >
      <div className="container">
        <h2 id="trusted-heading" className="trusted-title">
          Trusted by startups, agencies, and growing businesses
        </h2>

        <ul className="trusted-grid">
          {industries.map((industry) => (
            <li key={industry} className="brand-card">
              {industry}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TrustedBy;