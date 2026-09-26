import useScrollFx from "./hooks/useScrollFx";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Symptoms from "./components/Symptoms";
import About from "./components/About";
import Video from "./components/Video";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function App() {
  useScrollFx();
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}
