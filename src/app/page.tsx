import About from "@/components/About";
import { Clients } from "@/components/Client";
import { Footer } from "@/components/Footer";
import HomeComponent from "@/components/Home";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Service from "@/components/Service";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <section id="nav">
        <Navbar />
      </section>
      <section id="home">
        <HomeComponent />
      </section>
      <section id="aboutcivicad">
        <About />
      </section>
      <section id="services">
        <Service />
      </section>
      <section id="clients">
        <Separator className="my-10" />
        <Clients />
      </section>
      <section id="projects">
        <Separator className="my-20" />
        <Projects />
      </section>
      <section>
        <Separator className="my-20" />
        <Footer />
      </section>
    </>
  );
}
