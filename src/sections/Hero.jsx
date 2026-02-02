import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import resume from '../assets/shivam-resume-final-updated-4.pdf'

const Hero = () => {
    const [text, setText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(150)

    const titles = ["Web Developer", "UI/UX Developer", "ML Enthusiast"]

    useEffect(() => {
        const handleType = () => {
            const i = loopNum % titles.length
            const fullText = titles[i]

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            )

            setTypingSpeed(isDeleting ? 30 : 150)

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500)
            } else if (isDeleting && text === '') {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
            }
        }

        const timer = setTimeout(handleType, typingSpeed)
        return () => clearTimeout(timer)
    }, [text, isDeleting, loopNum, typingSpeed, titles])

    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-8 md:px-10 pointer-events-none w-full">

            {/* Social Media Sidebar */}
            <div className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 z-20 pointer-events-auto">
                <a href="https://www.instagram.com/s.r.j_.28/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                </a>
                <a href="https://github.com/shivam34345" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/shivam-jayaswal-a67730288/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                </a>
            </div>

            {/* Container for 3 columns on Desktop, Stack on Mobile */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl pointer-events-auto z-10 gap-10 md:gap-12">

                {/* 1. Left Content: Text */}
                <div className="w-full md:w-[60%] text-center md:text-left space-y-4 order-2">
                    <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-white to-purple-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-pulse-slow">
                        Shivam Jayaswal
                    </h1>
                    <p className="text-lg md:text-xl text-blue-200/80 font-light tracking-[0.2em] uppercase min-h-[28px]">
                        {text}
                        <span className="w-[3px] h-[24px] bg-blue-400 inline-block ml-1 animate-blink"></span>
                    </p>

                    {/* Download CV Button */}
                    <div className="pt-4">
                        <a
                            href={resume}
                            download="Shivam_Jayaswal_Resume.pdf"
                            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(37,99,235,0.8)] transition-all duration-300 transform hover:scale-105"
                        >
                            Download CV
                        </a>
                    </div>
                </div>

                {/* 2. Center Content: Astronaut Spacer (Now handled by ScrollAstronaut) */}
                <div className="w-96 md:h-96 md:w-1/3 flex justify-center items-start order-3 -mt-20 md:mt-0">
                    {/* Global Astronaut floats here initially */}
                </div>

                {/* 3. Right Content: Profile Image with Blob */}
                <div className="w-full md:w-1/3 flex justify-center md:justify-end order-1 relative">
                    {/* Animated Blob Background */}
                    {/* Layer 1 - Back Blob (Lighter/Larger) */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none -z-20 opacity-30 mix-blend-screen">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 0.9, 1],
                                rotate: [0, -60, 60, 0],
                                borderRadius: [
                                    "40% 60% 70% 30% / 40% 40% 60% 50%",
                                    "60% 40% 30% 70% / 70% 30% 70% 40%",
                                    "40% 60% 70% 30% / 40% 40% 60% 50%"
                                ]
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-full h-full bg-gradient-to-tr from-indigo-600 via-purple-500 to-blue-400 blur-2xl"
                        />
                    </div>

                    {/* Layer 2 - Front Blob (Vibrant) */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none -z-10 mix-blend-screen">
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 0.95, 1],
                                rotate: [0, 45, -30, 0],
                                borderRadius: [
                                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                                    "30% 60% 70% 40% / 50% 60% 30% 60%",
                                    "60% 40% 30% 70% / 60% 30% 70% 40%"
                                ]
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-full h-full bg-gradient-to-bl from-blue-500 via-violet-500 to-indigo-400 blur-xl opacity-50"
                        />
                    </div>

                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        {/* Profile Image - Vertical Oval with Border-2 */}
                        <div className="relative w-72 h-96 md:w-[350px] md:h-[450px] flex items-center justify-center rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
                            <img
                                src="/shivam.png"
                                alt="Shivam Jayaswal"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>

            </div>

        </section>
    )
}

export default Hero
