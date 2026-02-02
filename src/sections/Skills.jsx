import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const SkillCard = ({ title, percentage, color }) => {
    const radius = 50
    const circumference = 2 * Math.PI * radius
    const strokeDashoffset = circumference - (percentage / 100) * circumference

    return (
        <div className="flex flex-col items-center justify-center p-6 w-64">
            <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Background Circle */}
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="80"
                        cy="80"
                        r={radius}
                        stroke="currentColor"
                        strokeWidth="10"
                        fill="transparent"
                        className="text-gray-700/50 block"
                    />
                    {/* Foreground Circle (Progress) */}
                    <motion.circle
                        cx="80"
                        cy="80"
                        r={radius}
                        stroke={color}
                        strokeWidth="10"
                        fill="transparent"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset }}
                        viewport={{ once: false }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        strokeLinecap="round"
                        className="block"
                    />
                </svg>
                {/* Text in Center */}
                <div className="absolute flex items-center justify-center">
                    <span style={{ color }} className="text-2xl font-bold">
                        {percentage}%
                    </span>
                </div>
            </div>

            <h3 style={{ color }} className="mt-6 text-xl font-bold tracking-wide uppercase text-center">
                {title}
            </h3>
        </div>
    )
}

const Skills = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const skills = [
        { title: "JavaScript", percentage: 80, color: "#f7df1e" }, // Yellow
        { title: "Python", percentage: 65, color: "#3776ab" },    // Blue
        { title: "Java", percentage: 70, color: "#f89820" },      // Orange
        { title: "HTML & CSS", percentage: 95, color: "#e34f26" }, // Red/Orange
        { title: "Machine Learning", percentage: 55, color: "#ff69b4" } // Pink
    ]

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % skills.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length)
    }

    const getVisibleSkills = () => {
        const visible = []
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % skills.length
            visible.push(skills[index])
        }
        return visible
    }

    return (
        <section id="skills" className="min-h-screen flex flex-col items-center justify-center py-20 px-4 z-10 relative">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <div className="inline-block px-10 py-3 border-2 border-purple-500/30 rounded-full bg-purple-500/10 backdrop-blur-sm mb-6">
                    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                        Skills
                    </h2>
                </div>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text.
                </p>
            </motion.div>

            <div className="flex items-center justify-center w-full max-w-6xl gap-4 md:gap-12">
                {/* Previous Button */}
                <button
                    onClick={prevSlide}
                    className="p-4 rounded-full border border-gray-600 hover:border-white text-gray-400 hover:text-white transition-all bg-black/50 hover:bg-white/10 z-20 group"
                    aria-label="Previous Skill"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:-translate-x-1 transition-transform">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>

                {/* Skills Carousel */}
                <div className="flex justify-center items-center gap-4 md:gap-8 overflow-hidden py-10">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {getVisibleSkills().map((skill, index) => (
                            <motion.div
                                key={`${skill.title}-${index}`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                                className="transform transition-transform"
                            >
                                <SkillCard
                                    title={skill.title}
                                    percentage={skill.percentage}
                                    color={skill.color}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    className="p-4 rounded-full border border-gray-600 hover:border-white text-gray-400 hover:text-white transition-all bg-black/50 hover:bg-white/10 z-20 group"
                    aria-label="Next Skill"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default Skills
