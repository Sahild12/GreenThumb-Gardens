import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import img2 from "../assets/page2-2.png";
import img3 from "../assets/page2-3.png";
import img4 from "../assets/page2-4.png";
import img5 from "../assets/page2-5.png";
import logo from "../assets/logo.png";
import LeafBg from "../assets/leaf.png";
import "../index.css";
import { FaArrowRightLong } from "react-icons/fa6";
import Nav from "./Nav";

function Home({ onNavigate, showNav = false }) {
  gsap.registerPlugin(useGSAP);
  const container = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        ".Home_left",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out", clearProps: "all" }
      );
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.15, ease: "power3.out", clearProps: "all" }
      );  
    },
    { scope: container }
  );

  const handleGo = (targetId) => {
    if (onNavigate) {
      onNavigate(targetId);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={container}
      className="page-section Home_main w-full min-h-screen h-auto md:h-screen pt-20 md:pt-16 flex flex-col md:flex-row relative overflow-visible md:overflow-hidden bg-gradient-to-br from-[#FAF9F5] via-[#F4F7F2] to-[#EAF2E8] justify-between items-center px-4 sm:px-8 md:px-12 lg:px-16"
    >
      {/* Organic Leaf Background Textures */}
      <img
        src={LeafBg}
        alt="Leaf Texture"
        className="absolute top-0 right-0 w-[300px] sm:w-[480px] md:w-[620px] opacity-20 pointer-events-none z-0"
      />
      <img
        src={LeafBg}
        alt="Leaf Texture"
        className="absolute bottom-10 -left-20 w-[250px] sm:w-[380px] opacity-15 pointer-events-none z-0 rotate-180"
      />

      {/* Left Hero Column */}
      <div className="Home_left w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-4 sm:gap-6 z-10 py-4 md:py-8">
        <div className="H-left-Hedline flex flex-col items-center md:items-start w-full">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center md:justify-start">
            <img src={logo} alt="GreenThumb Gardens Logo" className="h-9 w-9 sm:h-11 sm:w-11 object-contain rounded-full shadow-sm" />
            <h2 className="font-black text-xl sm:text-2xl md:text-3xl leading-tight text-[#4A7A3C] inline">
              GreenThumb Gardens
            </h2>
            <img className="h-7 sm:h-9 inline-block align-top" src={img2} alt="" />
          </div>
          <input
            type="text"
            placeholder="Search workshops, plants & tips..."
            className="border border-gray-300 rounded-full py-2 px-4 w-full max-w-xs sm:max-w-sm focus:outline-none mt-4 bg-white/90 shadow-sm backdrop-blur-sm text-xs sm:text-sm focus:ring-2 focus:ring-[#4A7A3C]/40"
          />
        </div>

        <div className="H-left-info flex flex-col gap-4 sm:gap-6">
          <div className="H_info-H1">
            <h1 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-semibold leading-tight text-gray-900">
              Your <span className="text-[#4A7A3C] font-black">GARDEN</span>,
              <img className="h-8 sm:h-11 inline-block align-middle ml-2" src={img2} alt="" />
            </h1>
            <h1 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-black text-gray-900 mt-1">reimagined.</h1>
          </div>
          <p className="info-p text-xs sm:text-base lg:text-lg font-light leading-relaxed opacity-80 max-w-lg text-gray-700">
            Each gardening task is approached with creativity and a dedication to excellence, inspired by nature's timeless beauty.
          </p>

          <div className="Home_left-btn flex flex-wrap gap-3 sm:gap-5 justify-center md:justify-start mt-2">
            <button
              onClick={() => handleGo("plants")}
              className="cursor-pointer py-2.5 px-6 sm:px-8 bg-[#4A7A3C] hover:bg-[#3d6531] text-white text-xs sm:text-sm font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 flex items-center gap-2"
            >
              Shop Now <FaArrowRightLong className="text-xs sm:text-sm" />
            </button>
            <button
              onClick={() => handleGo("about")}
              className="cursor-pointer py-2.5 px-6 sm:px-8 border border-gray-400 hover:border-black text-black text-xs sm:text-sm font-medium rounded-full transition-all duration-300 hover:bg-black/5"
            >
              About Us
            </button>
          </div>
        </div>
      </div>

      {/* Right Column - Feature Workshop & Event Cards */}
      <div className="Home_Right w-full md:w-1/2 z-10 flex flex-col items-center justify-center py-6 md:py-0">
        {showNav && <Nav className="hidden md:flex absolute text-black top-6 right-10 z-20" />}

        <div className="Home_Right_info flex flex-col gap-4 sm:gap-5 w-full max-w-md">
          {/* Feature Card 1 */}
          <div className="feature-card p-4 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-2xl text-left flex items-center justify-between bg-white/85 backdrop-blur-md border border-white/80 hover:-translate-y-1.5 transition-all duration-300 group">
            <div className="flex flex-col gap-1 pr-3">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#4A7A3C] bg-green-100/80 px-2.5 py-0.5 rounded-full w-fit">
                Featured Workshop
              </span>
              <h3 className="font-bold text-sm sm:text-base tracking-tight text-gray-900 mt-1">
                Organic Gardening Workshop
              </h3>
              <p className="text-xs font-extralight text-gray-600 leading-relaxed">
                Learn natural composting and organic planting techniques with our master gardeners.
              </p>
            </div>
            <img className="h-12 sm:h-14 w-fit object-contain transition-transform duration-300 group-hover:scale-110" src={img3} alt="Workshop" />
          </div>

          {/* Feature Cards Row */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            {/* Feature Card 2 */}
            <div className="feature-card p-4 bg-white/85 backdrop-blur-md flex-1 rounded-2xl border border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300 group">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#4A7A3C] bg-green-100/80 px-2 py-0.5 rounded-full w-fit">
                Seasonal Event
              </span>
              <h3 className="font-bold text-xs sm:text-sm tracking-tight text-gray-900 mt-1.5">
                Flower Festival
              </h3>
              <div className="flex items-center justify-between gap-2 mt-2">
                <p className="text-[11px] font-extralight text-gray-600 leading-snug">
                  Discover seasonal blooming tips & creative arrangements.
                </p>
                <img className="h-9 sm:h-10 w-fit object-contain transition-transform duration-300 group-hover:scale-110" src={img5} alt="Flower Festival" />
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="feature-card p-4 bg-white/85 backdrop-blur-md flex-1 rounded-2xl border border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-300 group">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#4A7A3C] bg-green-100/80 px-2 py-0.5 rounded-full w-fit">
                Harvest Special
              </span>
              <h3 className="font-bold text-xs sm:text-sm tracking-tight text-gray-900 mt-1.5">
                Crop Festival
              </h3>
              <div className="flex items-center justify-between gap-2 mt-2">
                <p className="text-[11px] font-extralight text-gray-600 leading-snug">
                  Learn creative crop care with certified florists.
                </p>
                <img className="h-9 sm:h-10 w-fit object-contain transition-transform duration-300 group-hover:scale-110" src={img4} alt="Crop Festival" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Accent */}
      <div className="Home_bootm rounded-tl-[924px] h-12 sm:h-16 md:h-20 w-full absolute bg-[#67A657]/80 bottom-0 left-0 pointer-events-none z-0"></div>
    </section>
  );
}

export default Home;
