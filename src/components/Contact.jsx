import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const socials = [
  { label: 'GitHub', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Dribbble', href: '#' },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [focused, setFocused] = useState(null)

  const inputStyle = (name) => ({
    width: '100%',
    background: 'rgba(255,255,255,0.03)',
    border: `1px solid ${focused === name ? 'rgba(0,212,255,0.5)' : 'rgba(255,255,255,0.08)'}`,
    boxShadow: focused === name ? '0 0 20px rgba(0,212,255,0.1)' : 'none',
    padding: '12px 16px',
    color: '#fff',
    outline: 'none',
    transition: 'all 0.3s',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.875rem',
    display: 'block',
  })

  return (
    <section id="contact" style={{ position: 'relative', padding: '128px 24px' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, background: 'rgba(177,74,237,0.05)', filter: 'blur(120px)' }} />
      </div>

      <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 64 }}
        >
          <span style={{ fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.3em', color: '#ff2d78', textTransform: 'uppercase', display: 'block', marginBottom: 16 }}>
            04 / Contact
          </span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(2.5rem,5vw,3.5rem)', color: '#fff', lineHeight: 1.1 }}>
            Let&apos;s build something{' '}
            <span className="text-gradient">incredible.</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }} onSubmit={e => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <input type="text" placeholder="Name" style={inputStyle('name')} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} />
                <input type="email" placeholder="Email" style={inputStyle('email')} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} />
              </div>
              <input type="text" placeholder="Subject" style={inputStyle('subject')} onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)} />
              <textarea
                rows={6}
                placeholder="Tell me about your project..."
                style={{ ...inputStyle('message'), resize: 'none' }}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(0,212,255,0.25)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%', padding: '16px',
                  background: 'linear-gradient(135deg, #00d4ff, #b14aed)',
                  color: '#000', fontWeight: 700,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  fontSize: '0.8rem', border: 'none', cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
              >
                Send Message →
              </motion.button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
          >
            <div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 40 }}>
                Currently open to new opportunities — freelance, contract, or full-time.
                Let's create something that pushes the boundaries of what's possible on the web.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  { label: 'Email', value: 'hello@nullspace.dev', color: null },
                  { label: 'Location', value: 'Tokyo, Japan', color: null },
                  { label: 'Status', value: '● Available', color: '#00d4ff' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '16px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', fontFamily: 'monospace', letterSpacing: '0.15em', width: 80, flexShrink: 0 }}>{item.label}</span>
                    <span style={{ color: item.color || 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 40 }}>
              <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: 16 }}>Find me on</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                {socials.map(s => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    whileHover={{ scale: 1.05 }}
                    className="glass"
                    style={{
                      padding: '8px 16px', fontSize: '0.875rem',
                      color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  >
                    {s.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

