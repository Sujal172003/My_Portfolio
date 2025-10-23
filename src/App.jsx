import React, { useEffect, useRef, useState } from "react";
import "./styles/App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Detect which section is visible
  useEffect(() => {
    const sections = [
      { id: "home", ref: homeRef },
      { id: "about", ref: aboutRef },
      { id: "skills", ref: skillsRef },
      { id: "projects", ref: projectsRef },
      { id: "contact", ref: contactRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // visible at least 50%
    );

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col overflow-x-hidden w-full h-full items-center justify-center bg-gradient-to-tl from-black via-[#091122] via-[#2c3243] via-[#091122] to-[#000000] text-white">
      <div className="fixed w-full top-0 h-[10%] flex z-10">
        <Navbar
          scrollToSection={scrollToSection}
          refs={{ homeRef, aboutRef, skillsRef, projectsRef, contactRef }}
          activeSection={activeSection}
        />
      </div>

      <section id="home" ref={homeRef}>
        <Home />
      </section>
      <section id="about" ref={aboutRef}>
        <About />
      </section>
      <section id="skills" ref={skillsRef}>
        <Skills />
      </section>
      <section id="projects" ref={projectsRef}>
        <Projects />
      </section>
      <section id="contact" ref={contactRef}>
        <Contact />
      </section>
    </div>
  );
}

export default App;
