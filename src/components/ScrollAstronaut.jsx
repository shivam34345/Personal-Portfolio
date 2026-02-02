import { motion, useScroll } from 'framer-motion'
import { useState, useEffect } from 'react'

const variants = {
    hero: {
        top: "22vh",
        left: "85%",
        x: "-50%",
        scale: 1,
        rotate: 0,
        transition: { type: "spring", stiffness: 50, damping: 20 }
    },
    projects: {
        top: "70vh", // Fixed position on screen (Bottom Leftish)
        left: "20%",
        x: "-50%",
        scale: 0.6,
        rotate: -15,
        transition: { type: "spring", stiffness: 40, damping: 20 }
    },
    about: {
        top: "70vh",
        left: "95%",
        x: "-50%",
        scale: 0.6,
        rotate: 15,
        transition: { type: "spring", stiffness: 40, damping: 20 }
    },
    skills: {
        top: "30%",
        left: "87%", // Left side positioning
        x: "-50%",
        scale: 0.7,
        rotate: 15,
        transition: { type: "spring", stiffness: 40, damping: 20 }
    },
    contact: {
        top: "30vh",
        left: "20%",
        x: "-50%",
        scale: 0.8,
        rotate: 0,
        transition: { type: "spring", stiffness: 50, damping: 20 }
    }
}

const ScrollAstronaut = () => {
    const { scrollY } = useScroll()
    const [section, setSection] = useState('hero')

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            const vh = window.innerHeight

            // Thresholds aligned with section order: Hero -> About -> Projects -> Contact
            // Hero (0-100vh), About (100-200vh), Projects (200-500vh because of sticky scroll), Skills (500-600vh), Contact (600vh+)
            if (latest < vh * 0.8) {
                setSection('hero')
            } else if (latest < vh * 1.8) {
                setSection('about')
            } else if (latest < vh * 4.8) {
                setSection('projects')
            } else if (latest < vh * 5.8) {
                setSection('skills')
            } else {
                setSection('contact')
            }
        })
    }, [scrollY])

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 overflow-hidden">

            <motion.div
                initial="hero"
                animate={section}
                variants={variants}
                className="absolute w-64 md:w-[400px] will-change-transform"
            >
                <motion.div
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, 3, -3, 0]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="w-full h-full"
                >
                    <img
                        src="/astronaut.png"
                        alt="Traveling Astronaut"
                        className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(125,95,255,0.3)]"
                    />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default ScrollAstronaut
