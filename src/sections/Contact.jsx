import { useState } from 'react'
import ContactModal from '../components/ContactModal'

const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <section id="contact" className="min-h-[50vh] flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-t from-black to-transparent relative z-20">
            <h2 className="text-4xl font-thin tracking-widest mb-8 text-white">READY TO LAUNCH?</h2>
            <p className="text-gray-400 mb-10 max-w-lg text-center">
                I'm currently available for freelance projects and collaborations. Let's build something interstellar together.
            </p>

            <button
                onClick={() => setIsModalOpen(true)}
                className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-none hover:bg-purple-500 hover:text-white transition-all duration-300 overflow-hidden cursor-pointer"
            >
                <span className="relative z-10">Start a Project</span>
                <div className="absolute inset-0 bg-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out -z-0"></div>
            </button>

            <div className="mt-20 flex gap-8 text-gray-500">
                <a href="https://www.instagram.com/s.r.j_.28/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
                <a href="https://github.com/shivam34345" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                <a href="https://www.linkedin.com/in/shivam-jayaswal-a67730288/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            </div>

            <footer className="mt-20 text-xs text-gray-700">
                © 2026 SHIVA. All rights reserved.
            </footer>

            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}

export default Contact
