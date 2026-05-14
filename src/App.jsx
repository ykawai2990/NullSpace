import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import ParticleField from './components/ParticleField'

export default function App() {
  return (
    <div className="relative min-h-screen" style={{ background: '#010105' }}>
      <ParticleField />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="text-center py-8 text-sm font-mono border-t border-white/5" style={{ color: 'rgba(255,255,255,0.2)' }}>
        <span className="text-gradient-static">NULLSPACE</span>
        {' '}© 2026 — crafted with precision
      </footer>
    </div>
  )
}

