import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import welcome from '../assets/Wellcome.png';

function Welcome({ onComplete }) {
  gsap.registerPlugin(useGSAP);
  const container = useRef();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    tl.fromTo(container.current,
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    )
    .to(container.current, { opacity: 0, duration: 0.8, delay: 0.5, ease: "power2.inOut" });

  }, { scope: container });

  return (
    <div
      ref={container}
      className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-50 flex items-center justify-center p-4 sm:p-8"
      style={{ backgroundImage: `url(${welcome})` }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xs"></div>
      <div className="content relative z-10 w-full max-w-2xl border-t-2 sm:border-t-4 border-b-2 sm:border-b-4 border-white text-white flex flex-col items-center justify-center gap-3 sm:gap-8 py-8 sm:py-12 md:py-16 px-4 text-center my-auto">
        <p className="text-xl sm:text-3xl md:text-4xl font-normal font-serif opacity-90">Welcome to</p>
        <div className="flex flex-col items-center gap-0.5 sm:gap-1">
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-light tracking-tight leading-none">GreenThumb</h1>
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-light tracking-tight leading-none mt-1 sm:mt-2">Gardens</h1>
        </div>
        <p className="text-xs sm:text-lg md:text-xl font-normal tracking-wide opacity-90 max-w-md">Where Nature Greets You with a Smile.</p>
      </div>
    </div>
  );
}

export default Welcome;