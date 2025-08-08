import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import TechStack from "@/sections/TechStack";
import { Toaster } from 'react-hot-toast'

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
