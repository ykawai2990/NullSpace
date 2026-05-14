import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '60+', label: 'Projects Shipped' },
  { value: '12+', label: 'Happy Clients' },
  { value: '∞', label: 'Lines of Code' },
]

function StatCard({ value, label, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
      className="glass glass-hover"
      style={{ padding: 24, textAlign: 'center' }}
    >
      <div className="text-gradient-static" style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '2.5rem', marginBottom: 4 }}>{value}</div>
      <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{label}</div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" style={{ position: 'relative', padding: '128px 24px' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          {/* Text */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span style={{ fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.3em', color: '#00d4ff', textTransform: 'uppercase', display: 'block', marginBottom: 16 }}>
                01 / About
              </span>
              <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(2.5rem,5vw,3.5rem)', lineHeight: 1.1, marginBottom: 24, color: '#fff' }}>
                Building the{' '}
                <span className="text-gradient">future</span>
                <br />one commit at a time.
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 24, fontWeight: 300 }}>
                I'm a full-stack developer and creative technologist obsessed with crafting
                immersive digital experiences. I bridge the gap between cutting-edge technology
                and stunning visual design.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.35)', lineHeight: 1.7 }}>
                With expertise spanning from systems architecture to pixel-perfect UI,
                I bring a holistic perspective to every project — ensuring both technical
                excellence and aesthetic mastery coexist.
              </p>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1', maxWidth: 360, margin: '0 auto' }}>
              <div className="animate-rotate-slow" style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid rgba(0,212,255,0.2)' }} />
              <div className="animate-rotate-slow" style={{ position: 'absolute', inset: 16, borderRadius: '50%', border: '1px solid rgba(177,74,237,0.15)', animationDirection: 'reverse', animationDuration: '15s' }} />
              <div className="animate-rotate-slow" style={{ position: 'absolute', inset: 32, borderRadius: '50%', border: '1px solid rgba(0,212,255,0.1)', animationDuration: '25s' }} />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className="glass glow-blue" style={{ width: 192, height: 192, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="text-gradient" style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: '3rem' }}>NS</span>
                </div>
              </div>
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="animate-rotate-slow"
                  style={{
                    position: 'absolute', width: 12, height: 12, borderRadius: '50%',
                    background: '#00d4ff',
                    boxShadow: '0 0 20px rgba(0,212,255,0.4)',
                    top: '50%', left: '50%',
                    transformOrigin: `${80 + i * 20}px 0`,
                    marginTop: -6, marginLeft: -6,
                    animationDuration: `${8 + i * 4}s`,
                    animationDelay: `${i * -2}s`,
                    opacity: 0.6,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, marginTop: 80 }}>
          {stats.map((s, i) => <StatCard key={s.label} {...s} index={i} />)}
        </div>
      </div>
    </section>
  )
}

