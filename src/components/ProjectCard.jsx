import { motion } from 'framer-motion'
import { memo } from 'react'

const ProjectCard = memo(({ project }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            onClick={() => project.link && window.open(project.link, "_blank")}
            className="group relative p-4 rounded-2xl bg-gray-900/50 border border-white/10 overflow-hidden hover:border-purple-500/50 transition-colors duration-300 cursor-pointer"
        >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10">
                <div className="aspect-video w-full mb-6 rounded-xl bg-gray-900 border border-white/5 overflow-hidden flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(125,95,255,0.3)] transition-shadow">
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                    ) : (
                        <span className="text-6xl">🚀</span>
                    )}
                </div>

                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-md bg-white/5 text-purple-200 border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    )
})

export default ProjectCard
