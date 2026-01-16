import { footerIconsList } from '@/constants'
import React from 'react'

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
                    © 2025 Garv Singhal. All rights reserved.
                </p>

                {/* Icons */}
                <div className="flex items-center gap-6 md:gap-10">
                    {footerIconsList.map((icon, index) => (
                        <a
                            key={index}
                            href={icon.href || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <img
                                src={icon.icon}
                                alt={icon.name}
                                className="w-7 md:w-9 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:scale-110 group-hover:drop-shadow-[0_5px_15px_rgba(89,142,255,0.5)]"
                            />
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    )
}

export default Footer
