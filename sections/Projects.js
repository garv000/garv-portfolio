"use client"
import TitleHeader from '@/components/TitleHeader'
import GradientSphere from '@/components/GradientSphere'
import React from 'react'
import { PinContainer } from '@/components/3d-pin'
import { projects } from '@/constants'

const Projects = () => {
    return (
        <section id='projects' className='w-full h-full overflow-hidden md:overflow-visible flex items-center justify-center relative'>
            <GradientSphere sphere1Class={'projects-gradient-sphere projects-sphere-1'} sphere2Class={'projects-gradient-sphere projects-sphere-2'} />

            <div className='w-full md:my-40 my-20 relative z-10'>
                <div className='container mx-auto md:p-0 px-5'>
                    <TitleHeader title={'MY PROJECTS'} number={'03'} text={'Check my recent project below for your goal'} />
                </div>
                <div className='md:mt-20 mt-10 container mx-auto md:p-0 px-5'>
                    <div className='flex flex-wrap justify-center gap-20'>

                        {projects.map((item) => (
                            <div key={item.id} className='my-20'>
                                <PinContainer title={item.title} href={item.link} >
                                    <div className='rounded-2xl p-7 md:w-110 w-96 h-full bg-[#0b0620]/50 flex flex-col backdrop-blur-md'>
                                        <div className='rounded-2xl md:h-60 h-50 bg-[url(/images/bg.png)] bg-cover bg-[#13162d] p-1 overflow-hidden'>
                                            <img src={item.img} alt={item.title} className='object-cover rotate-2 rounded-2xl mt-2' />
                                        </div>
                                        <div className="mt-10">
                                            <h1 className='text-white/80 text-3xl aeonik-bold line-clamp-1 tracking-wide'>{item.heading}</h1>
                                            <p className='text-xl mt-2 aeonik-medium line-clamp-2'>{item.des}</p>
                                            <div className='flex justify-between items-center mt-8'>
                                                <div className='flex items-center'>
                                                    {item.iconLists.map((icon, index) => (
                                                        <div key={index} className='bg-black rounded-full border border-white/20 p-2 -mr-1'>
                                                            <img src={icon} alt="icon" className='w-6' />
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <span className='aeonik-medium text-xl'>Check Live Site</span>
                                                    <img src="/images/navigation.png" alt="navigation" className='pt-1 w-3' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </PinContainer>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
