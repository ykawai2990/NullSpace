import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const orbRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!orbRef.current) return
      const x = (e.clientX / window.innerWidth - 0.5) * 30
      const y = (e.clientY / window.innerHeight - 0.5) * 30
      orbRef.current.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {/* Background gradient orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div
          ref={orbRef}
          style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 900, height: 900,
            transition: 'transform 0.7s ease-out',
          }}
        >
          <div className="animate-pulse-glow" style={{ position: 'absolute', top: 0, left: '25%', width: 384, height: 384, borderRadius: '50%', background: 'rgba(0,212,255,0.1)', filter: 'blur(120px)' }} />
          <div className="animate-pulse-glow" style={{ position: 'absolute', bottom: 0, right: '25%', width: 384, height: 384, borderRadius: '50%', background: 'rgba(177,74,237,0.1)', filter: 'blur(120px)', animationDelay: '1.5s' }} />
          <div className="animate-pulse-glow" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 256, height: 256, borderRadius: '50%', background: 'rgba(255,45,120,0.05)', filter: 'blur(80px)', animationDelay: '3s' }} />
        </div>

        {/* Grid */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.03,
          backgroundImage: `linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '72rem', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass neon-border"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 16px', marginBottom: 32,
            fontSize: '0.7rem', fontFamily: 'monospace',
            letterSpacing: '0.2em', color: '#00d4ff', textTransform: 'uppercase',
          }}
        >
          <span className="animate-pulse" style={{ width: 6, height: 6, borderRadius: '50%', background: '#00d4ff', display: 'inline-block' }} />
          Available for work · 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            lineHeight: 0.9,
            marginBottom: 24,
            fontSize: 'clamp(4rem, 12vw, 10rem)',
          }}
        >
          <span style={{ display: 'block', color: '#fff' }}>NULL</span>
          <span className="text-gradient" style={{ display: 'block' }}>SPACE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.125rem', maxWidth: '40rem', margin: '0 auto 48px', lineHeight: 1.7, fontWeight: 300 }}
        >
          Crafting digital experiences at the intersection of{' '}
          <span style={{ color: 'rgba(255,255,255,0.8)' }}>design</span> and{' '}
          <span style={{ color: 'rgba(255,255,255,0.8)' }}>engineering</span>.
          Where code becomes art.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', alignItems: 'center' }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0,212,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '16px 32px',
              background: 'linear-gradient(135deg, #00d4ff, #b14aed)',
              color: '#000',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              display: 'block',
              transition: 'all 0.3s',
            }}
          >
            View Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass neon-border"
            style={{
              padding: '16px 32px',
              color: 'rgba(255,255,255,0.8)',
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              display: 'block',
              transition: 'all 0.3s',
            }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          style={{ position: 'absolute', bottom: -80, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
        >
          <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontFamily: 'monospace' }}>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, rgba(0,212,255,0.6), transparent)' }}
          />
        </motion.div>
      </div>
    </section>
  )
}

