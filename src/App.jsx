import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Welcome from "./components/Welcome";
import Home from "./components/Home";
import PlantCarousel from "./components/PlantCarousel";
import About from "./components/About";
import Contact from "./components/Contact";
import NatureVideo from "./components/NatureVideo";
import Nav from "./components/Nav";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function MainSinglePage() {
  const [activeSection, setActiveSection] = useState("home");
  const lenisRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".page-section");

      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => setActiveSection((prev) => (prev !== section.id ? section.id : prev)),
          onEnterBack: () => setActiveSection((prev) => (prev !== section.id ? section.id : prev)),
        });
      });

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        sections.forEach((section, i) => {
          if (i < sections.length - 1) {
            gsap.timeline({
              scrollTrigger: {
                trigger: section,
                start: "bottom bottom",
                end: "bottom top",
                scrub: 0.5,
              },
            })
            .to(section, {
              yPercent: -15,
              opacity: 0.9,
              ease: "none",
            });
          }
        });
      });
    },
    { scope: mainRef }
  );

  const handleNavigate = (id) => {
    const target = document.getElementById(id);
    if (target && lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={mainRef} className="relative w-full bg-[#0c261b]">
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
        <Nav activeSection={activeSection} onNavigate={handleNavigate} />
      </header>

      <main className="w-full relative">
        <Home onNavigate={handleNavigate} />
        <PlantCarousel />
        <About onNavigate={handleNavigate} />
        <Contact onNavigate={handleNavigate} />
        <NatureVideo />
      </main>
    </div>
  );
}

function App() {
  const [isWelcomeVisible, setIsWelcomeVisible] = useState(true);

  if (isWelcomeVisible) {
    return <Welcome onComplete={() => setIsWelcomeVisible(false)} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainSinglePage />} />
        <Route path="/plants" element={<MainSinglePage />} />
        <Route path="/about" element={<MainSinglePage />} />
        <Route path="/contact" element={<MainSinglePage />} />
        <Route path="/nature-video" element={<MainSinglePage />} />
      </Routes>
    </Router>
  );
}

export default App;