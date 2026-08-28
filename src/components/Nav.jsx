import React from "react";

function Nav({ activeSection = "home", onNavigate, className = "" }) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "plants", label: "Plants" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
    { id: "nature-video", label: "Nature Story" },
  ];

  const handleScroll = (id, e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const targetEl = document.getElementById(id);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav aria-label="Main Navigation" className={`py-1.5 px-3 sm:px-4 md:py-2 md:px-6 bg-white/40 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.12)] w-auto max-w-[92vw] overflow-x-auto flex gap-1.5 sm:gap-3 md:gap-6 items-center justify-center rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${className}`}>
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleScroll(item.id, e)}
            className={`nav-pill px-2.5 sm:px-3.5 py-1 md:px-4 md:py-1.5 rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap ${
              isActive
                ? "bg-[#4A7A3C] text-white shadow-md font-semibold scale-105"
                : "text-gray-800 hover:text-[#4A7A3C] hover:bg-white/40"
            }`}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}

export default Nav;

