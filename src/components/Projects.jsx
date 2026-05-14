import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    id: '01', title: 'Aether OS', category: 'Product Design · React',
    description: 'A next-generation operating system interface built for the spatial computing era. Reimagining human-computer interaction.',
    tags: ['React', 'WebGL', 'Three.js'], color: '#00d4ff', featured: true,
  },
  {
    id: '02', title: 'Void Protocol', category: 'Web3 · Solidity',
    description: 'Decentralized finance infrastructure with a focus on transparency and user sovereignty. Dark mode by default.',
    tags: ['Solidity', 'Next.js', 'Web3'], color: '#b14aed', featured: true,
  },
  {
    id: '03', title: 'Phantom API', category: 'Backend · Go',
    description: 'High-performance REST/GraphQL API gateway handling millions of requests with sub-millisecond latency.',
    tags: ['Go', 'PostgreSQL', 'Redis'], color: '#ff2d78', featured: false,
  },
  {
    id: '04', title: 'Nebula UI', category: 'Design System',
    description: 'A comprehensive component library with 200+ components designed for dark-mode-first enterprise products.',
    tags: ['TypeScript', 'Storybook', 'CSS'], color: '#00d4ff', featured: false,
  },
]

function ProjectCard({ project, index, isFeatured }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="glass glass-hover"
      style={{
        position: 'relative', overflow: 'hidden', cursor: 'pointer',
        gridColumn: isFeatured ? 'span 2' : 'span 1',
      }}
    >
      <div style={{ padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
          <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.2)' }}>{project.id}</span>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1.2rem' }}>→</span>
        </div>
        <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', letterSpacing: '0.2em', textTransform: 'uppercase', color: project.color, display: 'block', marginBottom: 12 }}>
          {project.category}
        </span>
        <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(1.5rem,3vw,2.2rem)', color: '#fff', marginBottom: 16, lineHeight: 1.1 }}>
          {project.title}
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: 24, maxWidth: '36rem' }}>
          {project.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              padding: '4px 12px', fontSize: '0.7rem', fontFamily: 'monospace', letterSpacing: '0.1em',
              color: project.color,
              background: `${project.color}15`,
              border: `1px solid ${project.color}30`,
            }}>{tag}</span>
          ))}
        </div>
      </div>
      {/* Hover top accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
        opacity: 0, transition: 'opacity 0.3s',
      }} className="project-accent" />
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="projects" style={{ position: 'relative', padding: '128px 24px' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 64 }}
        >
          <span style={{ fontFamily: 'monospace', fontSize: '0.7rem', letterSpacing: '0.3em', color: '#b14aed', textTransform: 'uppercase', display: 'block', marginBottom: 16 }}>
            02 / Projects
          </span>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 'clamp(2.5rem,5vw,3.5rem)', color: '#fff', lineHeight: 1.1 }}>
            Selected <span className="text-gradient">work.</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }} className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} isFeatured={project.featured} />
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .projects-grid { grid-template-columns: 1fr !important; }
          .projects-grid > * { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  )
}

