import React from "react";
import NeturalVideo from "../assets/Netural30sec.mp4";

function NatureVideo() {
  return (
    <section id="nature-video" className="page-section w-full min-h-screen h-auto md:h-screen flex flex-col bg-[#F8F9FA] overflow-visible md:overflow-hidden">
      <div className="w-full h-[45vh] sm:h-[55vh] md:h-[60vh] relative">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={NeturalVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center pointer-events-none px-4">
          <h2 className="text-white text-3xl sm:text-5xl md:text-7xl font-bold uppercase tracking-wider drop-shadow-2xl text-center">
            Our Nature Story
          </h2>
        </div>
      </div>

      <div className="w-full flex-1 p-6 sm:p-8 md:p-12 flex flex-col justify-center items-center text-center bg-white">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#4A7A3C] mb-3 sm:mb-4">
          Where Every Leaf Tells A Story.
        </h3>
        <p className="text-gray-600 max-w-4xl text-xs sm:text-base md:text-lg leading-relaxed">
          Welcome to our garden — a peaceful green escape where nature is celebrated,
          nurtured, and shared with everyone who walks in. What started as a small idea
          rooted in love for plants has grown into a space filled with beauty, learning, and
          joy. Our goal is simple: to help people reconnect with nature, one plant and one
          moment at a time.
        </p>
      </div>
    </section>
  );
}

export default NatureVideo;
