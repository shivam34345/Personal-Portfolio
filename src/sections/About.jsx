import { motion } from 'framer-motion'

const About = () => {
    return (
        <section id="about" className="min-h-screen py-20 px-4 flex justify-center items-center">

            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">

                {/* 1. Main Profile Card - Top Left (Spans 2 cols, 2 rows) */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden border border-white/10 group"
                >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-black opacity-90" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

                    <div className="relative z-10 w-full h-full p-8 md:p-12 flex flex-col justify-center items-start">
                        <div className="w-full flex justify-between items-center mb-8">
                            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
                                Hi, I'm Shivam Jayaswal
                            </h2>
                            {/* Animated Robot/Avatar Placeholder */}
                            <div className="text-6xl md:text-8xl animate-bounce-slow">
                                🤖
                            </div>
                        </div>

                        <p className="text-lg md:text-xl text-blue-100 max-w-lg leading-relaxed mb-6">
                            A Full Stack Developer currently pursuing my Bachelors in Engineering in Computer Science from Don Bosco Institute of Technology, Mumbai.
                        </p>

                        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/30 transition-colors" />
                    </div>
                </motion.div>


                {/* 2. Principles Card - Top Right */}
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm flex flex-col justify-center gap-4 hover:border-white/20 transition-colors"
                >
                    <h3 className="text-gray-400 font-medium ml-1">Focus Items</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Design Principles', 'SRP', 'SOLID', 'Student', 'Full Stack Developer ⚛️'].map((tag, i) => (
                            <span key={i} className={`px-4 py-2 rounded-xl text-sm font-semibold border ${i === 0 ? 'bg-gray-200 text-black border-transparent' :
                                i === 4 ? 'bg-white text-black border-transparent w-full text-center mt-2' :
                                    'bg-transparent text-gray-300 border-gray-600'
                                }`}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>


                {/* 3. Time Zone Card - Middle Right */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover opacity-10 blur-[1px] group-hover:opacity-20 transition-opacity" />

                    <h3 className="text-xl font-bold text-white mb-2 relative z-10">Time Zone</h3>
                    <p className="text-gray-400 text-sm relative z-10">
                        I'm based in Mars, and open to remote work worldwide
                    </p>
                    <div className="mt-4 text-3xl animate-pulse">
                        🌏 🇮🇳
                    </div>
                </motion.div>


                {/* 4. CTA / Connect Card - Bottom Left (Spans 2 cols) */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="md:col-span-2 rounded-3xl bg-indigo-900 border border-indigo-700/50 p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-900 to-indigo-900 z-0" />

                    <div className="relative z-10 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">Do you want to start a project?</h3>
                        <p className="text-indigo-200">Let's collaborate and bring your ideas to life 🚀</p>
                    </div>

                    <button
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        className="relative z-10 px-8 py-3 bg-white text-indigo-900 font-bold rounded-xl shadow-lg hover:scale-105 transition-transform"
                    >
                        Let's Connect
                    </button>

                    {/* Decorative Circle */}
                    <div className="absolute -left-10 -bottom-20 w-40 h-40 bg-purple-500 rounded-full blur-[60px] opacity-50" />
                </motion.div>


                {/* 5. Tech Stack Card - Bottom Right */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="rounded-3xl bg-black/40 border border-white/10 p-6 flex flex-col justify-between"
                >
                    <div className="text-center">
                        <h3 className="text-lg font-bold text-white mb-2">Tech Stack</h3>
                        <p className="text-xs text-gray-500 mb-6">
                            I specialize in a variety of languages, frameworks, and tools.
                        </p>
                    </div>

                    <div className="grid grid-cols-4 gap-4 place-items-center">
                        {/* Mock Tech Icons */}
                        <span className="text-2xl p-2 bg-yellow-400/10 rounded-lg text-yellow-400">JS</span>
                        <span className="text-2xl p-2 bg-blue-400/10 rounded-lg text-blue-400 animate-spin-slow">⚛️</span>
                        <span className="text-2xl p-2 bg-green-400/10 rounded-lg text-green-400">🟢</span>
                        <span className="text-2xl p-2 bg-orange-400/10 rounded-lg text-orange-400">🟧</span>
                        <span className="text-2xl p-2 rounded-lg grayscale opacity-50">TS</span>
                        <span className="text-2xl p-2 rounded-lg grayscale opacity-50">Py</span>
                        <span className="text-2xl p-2 rounded-lg grayscale opacity-50">Db</span>
                        <span className="text-2xl p-2 rounded-lg grayscale opacity-50">Gi</span>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default About
