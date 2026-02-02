const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-center py-6">
            <div className="flex items-center gap-8 px-8 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-lg shadow-purple-500/10">
                <a href="#home" className="text-white/80 hover:text-white transition-colors text-sm font-light tracking-widest uppercase">Home</a>
                <a href="#projects" className="text-white/80 hover:text-white transition-colors text-sm font-light tracking-widest uppercase">Projects</a>
                <a href="#about" className="text-white/80 hover:text-white transition-colors text-sm font-light tracking-widest uppercase">About</a>
                <a href="#skills" className="text-white/80 hover:text-white transition-colors text-sm font-light tracking-widest uppercase">Skills</a>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors text-sm font-light tracking-widest uppercase">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar
