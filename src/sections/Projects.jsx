import { useRef } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'

const projectsData = [
    {
        title: "Collaborative Gifting Platform",
        description: "A MERN stack platform for group gifting. Create groups, invite members via codes, vote on gifts, and track contributions with role-based access control.",
        tags: ["React", "Node.js", "MongoDB", "JWT", "Express"],
        link: "https://collaborative-gifting-platform.web.app/",
        image: "/projects/gifting.png"
    },
    {
        title: "Gamified Legal Awareness Platform",
        description: "A gamified learning platform for legal awareness using quizzes, levels, and leaderboards. Features auth, progress tracking, and RESTful APIs.",
        tags: ["React", "Node.js", "Express", "MongoDB"],
        link: "https://gamified-awarness-platform.vercel.app/",
        image: "/projects/legal.png"
    },
    {
        title: "Resume Matching & Screening Tool",
        description: "Flask-based NLP application for matching resumes to job descriptions using TF-IDF similarity scoring. Features PDF parsing and real-time skill comparison.",
        tags: ["Flask", "NLP", "Python", "TF-IDF"],
        link: "https://srj28.pythonanywhere.com/",
        image: "/projects/resume.png"
    },

]

const Projects = () => {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"])

    return (
        <section ref={targetRef} id="projects" className="relative h-[300vh] bg-transparent">
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">

                {/* Horizontal Scroll Content */}
                <motion.div style={{ x, willChange: "transform" }} className="flex gap-12 px-20">

                    {/* Title Card / Section Header as part of the flow */}
                    <div className="flex-shrink-0 w-[400px] flex flex-col justify-center">
                        <h2 className="text-8xl md:text-6xl font-light tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200 leading-tight">
                            SELECTED <br />
                            <span className="font-bold text-white">WORKS</span>
                        </h2>
                        <p className="mt-8 text-xl text-gray-400 max-w-sm">
                            Scroll to explore a collection of interstellar digital experiences and experiments.
                        </p>
                    </div>

                    {/* Project Cards */}
                    {projectsData.map((project, index) => (
                        <div key={index} className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] min-w-[500px]">
                            <ProjectCard project={project} />
                        </div>
                    ))}

                </motion.div>
            </div>
        </section>
    )
}

export default Projects
