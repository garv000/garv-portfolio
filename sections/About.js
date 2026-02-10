"use client"
import GradientSphere from '@/components/GradientSphere'
import TitleHeader from '@/components/TitleHeader'
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import Link from 'next/link'
import { BackgroundGradientAnimation } from '@/components/background-gradient-animation'
import { GlobeDemo } from '@/components/GlobeDemo'

const About = () => {

    useGSAP(() => {
        gsap.from("#card", {
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power3.inOut',
            scrollTrigger: {
                trigger: "#about",
                start: 'top top'
            }
        })

        gsap.from(".animated-text", {
            opacity: 0,
            y: 20,
            stagger: 0.15,
            duration: 0.6,
            ease: 'power3.inOut',
            scrollTrigger: {
                trigger: "#about",
                start: 'top top'
            }
        })
    }, [])

    return (
        <section id='about' className='flex justify-center items-center relative px-5 md:p-0'>
            <GradientSphere sphere1Class={'about-gradient-sphere about-sphere-1'} sphere2Class={'about-gradient-sphere about-sphere-2'} />
            <div className='container w-full h-full md:my-40 my-20 relative z-10'>
                <TitleHeader title={'About Me'} text={'Passionate Creator, Lifelong Learner'} number={'01'} />
                <div className='md:mt-20 mt-10'>
                    {/* banto grid */}
                    <div className='grid grid-cols-12 md:grid-rows-10 gap-8'>
                        <div className='md:col-span-7 col-span-12 row-span-5'>
                            <div className='rounded-2xl p-7 w-full h-full bg-[url(/images/b1.svg)] bg-cover border border-white/20 flex flex-col justify-end'>
                                {/* <div>
                                    <img src="/images/flower.svg" alt="flower" className='md:w-32 w-16 flower' />
                                </div> */}
                                <div className="mt-16 sm:max-w-108 max-w-10/12 hover:translate-x-5 transition-all duration-300">
                                    {/* <h1 className='animated-text text-white/80 md:text-5xl text-3xl aeonik-bold'>Garv Singhal</h1> */}
                                    <p className='animated-text md:text-2xl aeonik-medium'> I&apos;m a Creative Developer skilled in crafting interactive and dynamic websites and applications. My expertise lies in <em>MERN Stack</em> and <em>Next.js</em>. I&apos;m always learning and exploring new tools and technologies.</p>
                                </div>
                            </div>
                        </div>
                        <div className='md:col-span-5 col-span-12 row-span-3 overflow-hidden'>
                            <div className='rounded-2xl hover:cursor-grab w-full h-full border border-white/20 bg-[#0b0620]/20 backdrop-blur-md'>
                                <div className="w-full h-full overflow-hidden pt-7">
                                    <GlobeDemo />
                                </div>
                            </div>
                        </div>
                        <div id='card' className='md:col-span-5 col-span-12 row-span-2'>
                            <div className='rounded-2xl p-7 w-full h-full bg-[url(/images/grid.svg)] bg-cover border border-white/20 flex items-center relative overflow-hidden bg-[#0b0620]/20 backdrop-blur-md'>
                                <div className="hover:translate-x-5 transition-all duration-300">
                                    <h1 className='animated-text md:text-4xl text-2xl aeonik-bold'>I constantly try to improve My tech stack</h1>
                                </div>
                                <div className='absolute bottom-[-25] right-0'>
                                    <img src="/images/b4.svg" alt="b4" className='w-50' />
                                </div>
                            </div>
                        </div>
                        <div id='card' className='md:col-span-5 col-span-12 row-span-2'>
                            <div className='rounded-2xl p-7 w-full h-full bg-[url(/images/grid.svg)] bg-cover border border-white/20 flex items-center relative overflow-hidden bg-[#0b0620]/20 backdrop-blur-md'>
                                <div className="hover:translate-x-5 transition-all duration-300">
                                    <h1 className='animated-text md:text-4xl text-2xl aeonik-bold'>Tech enthusiast with a passion for development.</h1>
                                </div>
                                <div className='absolute bottom-[-25] right-0'>
                                    <img src="/images/b4.svg" alt="b4" className='w-50' />
                                </div>
                            </div>
                        </div>
                        <div id='card' className='md:col-span-7 col-span-12 row-span-5'>
                            <div className='rounded-2xl w-full h-full bg-[url(/images/grid.svg)] bg-cover border border-white/20 flex items-center relative overflow-hidden bg-[#0b0620]/20 backdrop-blur-md'>
                                <div className="w-1/2 p-7 hover:translate-x-5 transition-all duration-300">
                                    <h1 className='animated-text md:text-4xl text-2xl aeonik-bold'>
                                        <div className='md:text-xl text-sm'>The Inside Scoop</div>
                                        Currently learning Three.js</h1>
                                </div>
                                <div className='absolute bottom-0 right-0'>
                                    <img src="/images/b5.svg" alt="b5" className='md:w-120 w-50' />
                                </div>
                            </div>
                        </div>
                        <div id='card' className='md:col-span-5 col-span-12 row-span-3'>
                            <div className='rounded-2xl w-full h-full border border-white/20 overflow-hidden'>
                                <div className='w-full h-full overflow-hidden'>
                                    <BackgroundGradientAnimation>
                                        <div className='text-center pt-14'>
                                            <h1 className='animated-text md:text-4xl text-2xl aeonik-bold'>I am available right now</h1>
                                        </div>
                                        <div className='flex justify-center p-7'>
                                            <Link href={'mailto:garvsinghal.work@gmail.com'} className='bg-black-300 gradient-border md:px-10 px-6 p-4 text-center md:text-lg marquee-item flex items-center justify-center gap-2 z-100 text-white/80'><span>Let&apos;s Connect</span><img src="/images/navigation.png" alt="navigation" className='pt-1' /></Link>
                                        </div>
                                    </BackgroundGradientAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
