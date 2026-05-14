import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  { title: 'Frontend', color: '#00d4ff', skills: ['React', 'Next.js', 'TypeScript', 'Three.js', 'WebGL', 'Framer Motion'] },
  { title: 'Backend', color: '#b14aed', skills: ['Node.js', 'Go', 'Python', 'GraphQL', 'REST APIs', 'Microservices'] },
  { title: 'Infrastructure', color: '#ff2d78', skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'PostgreSQL', 'Redis'] },
  { title: 'Design', color: '#00d4ff', skills: ['Figma', 'Design Systems', 'Motion Design', 'WebGL', 'GSAP', '3D/Blender'] },
]

const marqueeItems = ['React', 'TypeScript', 'Next.js', 'Go', 'Docker', 'AWS', 'Three.js', 'GraphQL', 'PostgreSQL', 'Figma', 'Python', 'Kubernetes']

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="skills" style={{ position: 'relative', padding: '128px 24px', overflow: 'hidden' }}>
      {/* Background accents */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: 0, width: 384, height: 384, background: 'rgba(177,74,237,0.05)', filter: 'blur(120px)', transform: 'translateY(-50%)' }} />
        <div style={{ position: 'absolute', top: '50%', right: 0, width: 384, height: 384, background: 'rgba(0,212,255,0.05)', filter: 'blur(120px)', transform: 'translateY(-50%)' }} />
      </div>

      <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 64 }}
        >
          <span style={{ fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.3em', color: '#00d4ff', textTransform: 'uppercase', display: 'block', marginBottom: 16 }}>
            03 / Skills
          </span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(2.5rem,5vw,3.5rem)', color: '#fff', lineHeight: 1.1 }}>
            Tech <span className="text-gradient">arsenal.</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: gi * 0.1 + 0.2 }}
              className="glass glass-hover"
              style={{ padding: 24 }}
            >
              <div style={{
                fontSize: '0.7rem', fontFamily: 'monospace', letterSpacing: '0.3em',
                textTransform: 'uppercase', color: group.color,
                marginBottom: 16, paddingBottom: 16,
                borderBottom: `1px solid ${group.color}20`,
              }}>
                {group.title}
              </div>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {group.skills.map((skill, si) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: gi * 0.1 + si * 0.05 + 0.4 }}
                    style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'rgba(255,255,255,0.6)', cursor: 'default', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: group.color, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{skill}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <div style={{ marginTop: 80, overflow: 'hidden', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '16px 0' }}>
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'flex', gap: 48, whiteSpace: 'nowrap' }}
          >
            {[...marqueeItems, ...marqueeItems].map((s, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "'Space Grotesk',sans-serif",
                  fontWeight: 700, fontSize: '1.5rem',
                  letterSpacing: '0.2em', color: 'rgba(255,255,255,0.06)',
                  textTransform: 'uppercase',
                }}
              >
                {s}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

