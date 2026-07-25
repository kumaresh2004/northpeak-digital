import { lazy, Suspense } from "react";
import "./styles/global.css";

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const Services = lazy(() => import("./components/Services"));
const TrustedBy = lazy(() => import("./components/TrustedBy"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Pricing = lazy(() => import("./components/Pricing"));
const Contact = lazy(() => import("./components/Contact"));
const CTA = lazy(() => import("./components/CTA"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="loading">
          Loading NorthPeak Digital...
        </div>
      }
    >
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
    </Suspense>
  );
}

export default App;