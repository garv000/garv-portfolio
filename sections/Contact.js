import ContactExperience from '@/components/ContactExperience'
import ContactForm from '@/components/ContactForm'
import TitleHeader from '@/components/TitleHeader'
import React from 'react'
import GradientSphere from '@/components/GradientSphere'

const Contact = () => {
    return (
        <section id='contact' className='overflow-hidden flex justify-center items-center relative px-5 md:p-0'>
            <div className='w-full h-full container md:my-40 my-20'>
                <TitleHeader title={'Contact Me'} text={"Let's collaborate on tailored, sustainable solutions"} number={'04'} />
                <div className='mt-20'>
                    <div className='grid grid-cols-12 gap-20'>
                        <div className='md:col-span-5 col-span-12 max-w-[92vw]'>
                            <ContactForm />
                        </div>
                        <div className='md:col-span-7 col-span-12 max-w-[92vw] md:block hidden'>
                            <div className='w-full h-full relative flex justify-center items-center rounded-3xl backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all duration-500 hover:shadow-[0_10px_60px_rgba(89,142,255,0.3)]'>
                                <ContactExperience />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
