import React, { useState, useRef } from "react";
import aboutbg from "../assets/bg-about.jpg";
import img2 from "../assets/page2-2.png";
import Bleft from "../assets/video-thumnel.jpg";
import Bright from "../assets/bootom-banner.jpg";
import Video1 from "../assets/Plant-Cinematic-Video.mp4";

function About({ onNavigate }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayClick = (e) => {
    e.stopPropagation();
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleStoryClick = () => {
    if (onNavigate) {
      onNavigate('nature-video');
    } else {
      const el = document.getElementById('nature-video');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="page-section main w-full min-h-screen h-auto md:h-screen bg-white overflow-visible md:overflow-hidden flex flex-col justify-between">
      <div
        className="top w-full min-h-[32vh] md:h-[40%] bg-cover bg-center pt-16 md:pt-10 px-6 md:px-12 flex flex-col justify-between relative"
        style={{ backgroundImage: `url(${aboutbg})` }}
      >
        <div className="flex justify-between relative">
          <div>
            <h2 className="font-black text-2xl sm:text-3xl leading-tight text-[#4A7A3C] inline">
              GreenThumb Gardens
            </h2>
            <img className="h-8 sm:h-10 inline-block align-top" src={img2} alt="GreenThumb Decorative Icon" />
          </div>
        </div>
        <div className="relative group flex items-center gap-4 sm:gap-6 w-fit mb-4">
          <h1
            onClick={handleStoryClick}
            className="text-white text-3xl sm:text-4xl uppercase font-bold tracking-wider cursor-pointer hover:text-green-100 hover:scale-105 transition-all duration-300 origin-left m-0"
          >
            About Us
          </h1>
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-15px] group-hover:translate-x-0 pointer-events-none hidden sm:block">
            <span className="bg-black/60 backdrop-blur-md text-white text-xs sm:text-sm px-4 py-2 rounded-full whitespace-nowrap shadow-lg border border-white/30 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Click to scroll to Nature Story
            </span>
          </div>
        </div>
      </div>

      <div className="bottom w-full flex-1 p-6 md:p-12 flex flex-col justify-between gap-6">
        <div className="bootom-top flex flex-col lg:flex-row gap-4 lg:gap-24 justify-between">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold opacity-85 tracking-normal leading-tight text-gray-900">
            <h2>Where Every Leaf</h2>
            <h2>Tells A Story.</h2>
          </div>
          <div className="text-xs sm:text-sm lg:text-base leading-relaxed tracking-wide opacity-75 text-gray-800 max-w-xl">
            <p>Welcome to our garden — a peaceful green escape where nature is celebrated, nurtured, and shared with everyone who walks in. What started as a small idea rooted in love for plants has grown into a space filled with beauty, learning, and joy. Our goal is simple: to help people reconnect with nature, one plant and one moment at a time.</p>
          </div>
        </div>

        <div className="bootom-bootom flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2">
          <div className="Bleft h-44 sm:h-48 md:h-55 overflow-hidden rounded-xl w-full sm:w-80 md:w-90 relative bg-black cursor-pointer shadow-lg flex-shrink-0" onClick={handleVideoClick}>
            {!isPlaying && (
              <>
                <img className="absolute inset-0 w-full h-full object-cover" src={Bleft} alt="Video Thumbnail" />
                <button
                  onClick={handlePlayClick}
                  aria-label="Play About Us Cinematic Video"
                  className="absolute inset-0 m-auto w-fit h-fit bg-white/90 hover:bg-white rounded-full p-3.5 sm:p-4 hover:scale-110 transition-all shadow-xl z-20 cursor-pointer"
                >
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-black fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </>
            )}

            <video ref={videoRef} className="w-full h-full object-cover" onEnded={() => setIsPlaying(false)}>
              <source src={Video1} type="video/mp4" />
            </video>
          </div>

          <div className="Brigth h-44 sm:h-48 md:h-55 overflow-hidden rounded-xl w-full flex-1 shadow-lg">
            <img className="w-full h-full object-cover" src={Bright} alt="Bottom Banner Garden Landscape" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
