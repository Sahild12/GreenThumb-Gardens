import React from "react";
import Main1 from "../assets/Mainplant.png";
import SmallPlant from "../assets/page2-4.png";
import BannerBg from "../assets/PlantCard-Base.jpg";
import LeafBg from "../assets/leaf.png";

function Contact({ onNavigate }) {
  const handleGo = (targetId) => {
    if (onNavigate) {
      onNavigate(targetId);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="page-section w-full min-h-screen h-auto md:h-screen bg-[#F8F9FA] relative flex flex-col justify-between overflow-visible md:overflow-hidden pt-16 md:pt-0">
      <div className="w-full flex-1 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 h-auto md:h-full flex items-end justify-center px-3 md:px-8 relative py-2 md:py-0 mt-2 md:mt-0">
          <div className="w-full max-w-[200px] sm:max-w-[270px] md:max-w-[340px] h-[210px] sm:h-[270px] md:h-[82%] bg-[#508B63] rounded-t-[140px] sm:rounded-t-[200px] flex items-center justify-center relative shadow-sm translate-y-0 md:translate-y-[6vh] border-[3px] sm:border-[4px] border-[#508B63]">
            <img src={Main1} alt="Native Organic Plant Showcase" className="absolute bottom-0 w-[105%] sm:w-[125%] max-w-none z-10 pointer-events-none" />
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col z-10 items-center md:items-start">
          <div className="w-full flex justify-end pt-2 pr-2 md:pt-8 md:pr-8 relative">
            <img src={LeafBg} alt="Decorative Organic Leaf Background" className="absolute top-0 right-0 w-[140px] sm:w-[240px] md:w-[420px] -z-10 pointer-events-none opacity-80" />
          </div>

          <div className="max-w-[480px] px-4 sm:px-6 md:pl-8 md:pr-12 mt-2 md:mt-16 z-0 relative text-center md:text-left">
            <h2 className="text-2xl sm:text-4xl md:text-[44px] font-bold text-gray-900 leading-[1.15] mb-3 sm:mb-4 tracking-tight relative inline-block">
              Why Our Plants Are <br className="hidden sm:inline" /> Special
              <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#4A7A3C] transform translate-y-2 hidden sm:block" style={{ width: 'calc(100% + 15px)' }}></span>
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm leading-[1.6] sm:leading-[1.7] mb-5 mt-2">
              We proudly feature a wide variety of native plants that are well-suited to the local climate. These plants are not only hardy and low-maintenance but also help conserve water—perfect for sustainable gardening.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-5 mb-5 md:mb-0">
              <button
                onClick={() => handleGo('plants')}
                className="bg-black text-white px-5 sm:px-7 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm flex items-center gap-1.5 hover:bg-gray-800 transition-colors cursor-pointer shadow-md"
              >
                Shop Now <span className="text-xs sm:text-sm leading-none">→</span>
              </button>
              <button
                onClick={() => handleGo('nature-video')}
                className="border border-black text-black px-5 sm:px-7 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm hover:bg-black hover:text-white transition-colors cursor-pointer"
              >
                Nature Story —
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative lg:absolute bottom-0 left-0 w-full z-20 shadow-2xl mt-4 lg:mt-0">
        <div
          className="w-full py-5 sm:py-8 px-4 sm:px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-8 md:gap-10 relative bg-cover bg-center lg:h-30"
          style={{ backgroundImage: `url(${BannerBg})` }}
        >
          <div className="absolute inset-0 bg-[#06180F]/60 z-0"></div>

          <div className="relative z-10 basis-1/2 text-center md:text-left">
            <h3 className="text-white text-xl sm:text-3xl md:text-[38px] tracking-tight leading-[1.15] font-bold">
              Grown with Love, <br className="hidden sm:inline" /> Not Chemicals!
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 relative z-10 basis-1/2 justify-center md:justify-end">
            <div className="w-[55px] h-[70px] sm:w-[85px] sm:h-[105px] bg-[#E8EAE6] rounded-t-[25px] sm:rounded-t-[40px] rounded-b-md flex-shrink-0 flex items-center justify-center pt-2 sm:pt-3 pb-2 shadow-md overflow-hidden relative">
              <img src={SmallPlant} alt="Organic Plant Icon" className="w-[85%] h-[85%] object-contain" />
            </div>

            <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2 sm:gap-3 max-w-[320px]">
              <p className="text-white/90 text-xs sm:text-[14px] leading-relaxed">
                Our plants bloom beautifully all year round — from vibrant spring flowers to lush winter greens.
              </p>
              <button
                onClick={() => handleGo('about')}
                className="bg-white text-black px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-[13px] font-semibold hover:bg-gray-200 transition-colors cursor-pointer shadow-md"
              >
                About Us —
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;