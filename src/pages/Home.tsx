import Hero from "../components/Hero";
import Symptoms from "../components/Symptoms";
import About from "../components/About";
import Video from "../components/Video";
import Services from "../components/Services";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <Symptoms />
      <About />
      <Video />
      <Services />
      <Benefits />
      <Testimonials />
      <Faq />
    </main>
  );
}
