import "./styles/global.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <Testimonials />
        <Pricing />
        <Contact />
        <CTA />
      </main>

      <Footer />
    </>
  );
}

export default App;