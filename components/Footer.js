import { footerIconsList } from "@/constants";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-6 py-8 backdrop-blur-md bg-white/5 shadow-[0_0_40px_rgba(89,142,255,0.15)] border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between md:gap-6 gap-3 text-white">
        {/* Name */}
        <div className="text-xl md:text-2xl font-semibold text-white/90 hover:text-blue-400 transition duration-300 gradient-title">
          Garv Singhal
        </div>

        {/* Copyright */}
        <p className="text-xs md:text-sm text-white/60 tracking-wide aeonik-regular text-center md:text-right">
          © 2026 Garv Singhal. All rights reserved.
        </p>

        {/* Icons */}
        <div className="flex items-center gap-6 md:gap-8">
          {footerIconsList.map((icon, index) => (
            <div key={index} className="relative group">
              <a
                href={icon.href || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={icon.icon}
                  alt={icon.name}
                  className="w-8 md:w-10 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:scale-110 group-hover:drop-shadow-[0_5px_15px_rgba(89,142,255,0.5)]"
                />
              </a>

              {/* Tooltip */}
              <span
                className="absolute -top-8 left-1/2 -translate-x-1/2 
        whitespace-nowrap px-3 py-1 text-xs rounded-md 
        bg-white/10 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 
        transition-all duration-300 pointer-events-none"
              >
                {icon.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
