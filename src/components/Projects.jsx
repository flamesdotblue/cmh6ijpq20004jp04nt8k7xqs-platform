import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Voltage — Experimental Landing',
    desc: 'High-contrast hero with kinetic type and reactive particles.',
    tags: ['React', 'Framer Motion', 'WebGL'],
    live: '#',
    repo: '#',
    accent: 'from-red-600/30 to-transparent',
  },
  {
    title: 'Monolith — Portfolio System',
    desc: 'Modular case study builder with poster-grade layouts.',
    tags: ['Next.js', 'Tailwind', 'MDX'],
    live: '#',
    repo: '#',
    accent: 'from-red-500/25 to-transparent',
  },
  {
    title: 'Pulse — Data Viz Pack',
    desc: 'Dark mode charts with neon highlights and motion cues.',
    tags: ['D3', 'TypeScript', 'Design'],
    live: '#',
    repo: '#',
    accent: 'from-red-700/25 to-transparent',
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative group rounded-2xl border border-white/10 bg-black/40 overflow-hidden"
    >
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent}`} />
      <div className="p-6 sm:p-8 relative">
        <h3 className="text-2xl font-extrabold tracking-tight">{project.title}</h3>
        <p className="mt-3 text-white/80">{project.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="text-xs uppercase tracking-widest rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <a
            href={project.live}
            className="inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-black font-semibold uppercase tracking-wide hover:bg-red-500"
          >
            <ExternalLink size={16} /> Live
          </a>
          <a
            href={project.repo}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-white hover:bg-white/10"
          >
            <Github size={16} /> Code
          </a>
        </div>
      </div>
      <div className="absolute -right-12 -bottom-12 aspect-square w-48 rounded-full bg-red-600/20 blur-3xl" />
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(239,68,68,0.10),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Selected Work</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              A snapshot of experiments and products that embrace clarity, velocity, and attitude.
            </p>
          </div>
          <div className="hidden sm:block h-px flex-1 bg-gradient-to-r from-red-600/70 to-transparent" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
