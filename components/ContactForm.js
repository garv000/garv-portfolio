"use client"
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

const ContactForm = () => {
    const initialValues = {
        name: "",
        email: "",
        subject: "",
        message: "",
    }
    const contactFormSchema = Z.object({
        name: Z.string().nonempty('Name is required'),
        email: Z.email('Invalid email').nonempty('Email is required'),
        subject: Z.string().nonempty('Subject is required'),
        message: Z.string().nonempty('Message is required'),
    })
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: initialValues,
        resolver: zodResolver(contactFormSchema)
    })
    const [loading, setloading] = useState(false)
    const onSubmit = async (data) => {
        setloading(true)
        try {
            const payload = {
                title: data.subject,
                name: data.name,
                email: data.email,
                message: data.message,
                time: new Date().toLocaleString(),
            }
            const serviceID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID
            const templateID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID
            const userID = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY

            await emailjs.send(serviceID, templateID, payload, {
                publicKey: userID,
            })
            toast.success('Message sent successfully!')
        } catch (error) {
            console.log("FAILED...", error)
            toast.error('Failed to send message, please try again.')
        } finally {
            setloading(false)
            reset(initialValues)
        }
    }
    useEffect(() => {
        console.log(errors)
    }, [errors])

    return (
        <div className="relative flex justify-center items-center p-8 md:p-12 rounded-3xl backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all duration-500 hover:shadow-[0_10px_60px_rgba(89,142,255,0.3)]">
            <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 w-full max-w-xl text-white/80 flex flex-col gap-6">
                <div>
                    <label htmlFor="name" className="block text-xl md:text-2xl font-semibold mb-2">Name</label>
                    <input
                        {...register("name")}
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        className="w-full p-4 rounded-xl bg-black/30 border border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                    />
                    {errors.name && (<span className='text-red-500'>{errors.name.message}</span>)}
                </div>
                <div>
                    <label htmlFor="email" className="block text-xl md:text-2xl font-semibold mb-2">Email</label>
                    <input
                        {...register("email")}
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full p-4 rounded-xl bg-black/30 border border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                    />
                    {errors.email && (<span className='text-red-500'>{errors.email.message}</span>)}
                </div>
                <div>
                    <label htmlFor="subject" className="block text-xl md:text-2xl font-semibold mb-2">Subject</label>
                    <input
                        {...register("subject")}
                        type="text"
                        id="subject"
                        placeholder="Enter your subject"
                        className="w-full p-4 rounded-xl bg-black/30 border border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                    />
                    {errors.subject && (<span className='text-red-500'>{errors.subject.message}</span>)}
                </div>
                <div>
                    <label htmlFor="message" className="block text-xl md:text-2xl font-semibold mb-2">Message</label>
                    <textarea
                        {...register("message")}
                        id="message"
                        rows={5}
                        placeholder="Enter your message"
                        className="w-full p-4 rounded-xl bg-black/30 border border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                    />
                    {errors.message && (<span className='text-red-500'>{errors.message.message}</span>)}
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="disabled:opacity-70 mt-2 py-4 rounded-xl bg-gradient-to-r from-[#598eff] to-blue-600 text-white font-semibold text-lg tracking-wide hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
