import CanvasContainer from './components/CanvasContainer'
import Navbar from './components/Navbar'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Hero from './sections/Hero'
import About from './sections/About'
import Contact from './sections/Contact'

import ScrollAstronaut from './components/ScrollAstronaut'

function App() {
  return (
    <main className="relative w-full min-h-screen text-white">
      <Navbar />
      <ScrollAstronaut />
      <CanvasContainer>
        {/* The 3D element */}
      </CanvasContainer>

      {/* HTML Content Overlay */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  )
}

export default App
