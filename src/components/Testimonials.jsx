import "../styles/testimonials.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechNova",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "NorthPeak Digital completely transformed our online presence. The new website is fast, modern, and has significantly improved our lead generation.",
  },
  {
    name: "David Wilson",
    role: "Founder, BrightLabs",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "Amazing experience from start to finish. The team delivered exactly what we needed with outstanding communication.",
  },
  {
    name: "Emily Carter",
    role: "Marketing Manager",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "Our conversion rate improved after launching the redesigned website. Highly recommended for any growing business.",
  },
];

function Testimonials() {
  return (
    <section
      className="testimonials"
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <div className="section-heading">
          <span>TESTIMONIALS</span>

          <h2 id="testimonials-heading">
            What Our Clients
            <br />
            Say About Us
          </h2>

          <p>
            Trusted by startups, entrepreneurs, and businesses worldwide.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <article
              className="testimonial-card"
              key={index}
              aria-labelledby={`client-name-${index}`}
            >
              <div
                className="stars"
                aria-hidden="true"
              >
                ⭐⭐⭐⭐⭐
              </div>

              <p className="review">
                "{item.review}"
              </p>

              <div className="client">
                <img
                  src={item.image}
                  alt={`${item.name}, ${item.role}`}
                  width="80"
                  height="80"
                  loading="lazy"
                  decoding="async"
                />

                <div>
                  <h3 id={`client-name-${index}`}>
                    {item.name}
                  </h3>

                  <p>{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;