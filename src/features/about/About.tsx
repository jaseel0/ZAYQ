import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import AboutHero from "./components/AboutHero";
import ModelGrid from "./components/ModelGrid";
import AboutStory from "./components/AboutStory";
import CoreFeatures from "./components/CoreFeatures";
import FeatureGrid from "./components/FeatureGrid";
import BrandPromise from "./components/BrandPromise";
import Testimonials from "./components/Testimonials";
function AboutContent() {
  return (
    <div className="bg-white font-sans selection:bg-blue-100">
      <AboutHero />
      <ModelGrid />
      <AboutStory />
      <CoreFeatures />
      <FeatureGrid />
      <BrandPromise />
      <Testimonials />

      <section className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-semibold mb-8 leading-tight">
            Ready to Protect Your iPhone?
          </h2>
          <p className="text-2xl mb-12 text-blue-100">
            Shop our collection of premium iPhone cases designed for every model
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all shadow-xl"
            >
              Shop iPhone Cases
              <ChevronRight size={22} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AboutContent;