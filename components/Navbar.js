'use client'

import { navItems } from '@/constants'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)
    const timeoutRef = useRef(null)
    const navRef = useRef(null)
    const isHovering = useRef(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowNavbar(true)

            // Clear previous timeout
            if (timeoutRef.current) clearTimeout(timeoutRef.current)

            // Start new timeout to hide after 3s of scroll inactivity
            timeoutRef.current = window.setTimeout(() => {
                if (!isHovering.current) {
                    setShowNavbar(false)
                }
            }, 3000)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [])

    return (
        <nav
            ref={navRef}
            onMouseEnter={() => (isHovering.current = true)}
            onMouseLeave={() => (isHovering.current = false)}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-5 w-full max-w-[90vw] md:max-w-3xl transition-all duration-500 ${showNavbar
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-10 pointer-events-none'
                }`}
        >
            <div className="flex items-center justify-center">
                <div className="flex items-center gap-6 md:gap-10 px-6 py-4 bg-[#0b062030] border border-white/10 rounded-full backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="relative text-white/90 text-sm md:text-base gradient-title transition-colors duration-300 hover:text-blue-400 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-white/50 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
