import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactCTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_50%_50%,rgba(239,68,68,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 sm:p-12 text-center"
        >
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Let's build something unmistakable
          </h3>
          <p className="mt-3 text-white/75 max-w-2xl mx-auto">
            Available for select collaborations and commissions. I bring edge, precision, and polish.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-black font-semibold uppercase tracking-wide hover:bg-red-500"
            >
              <Mail size={18} /> Email Me
            </a>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-white hover:bg-white/10"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-white hover:bg-white/10"
              >
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>

          <div id="about" className="mt-10 pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div>
              <h4 className="font-semibold tracking-widest uppercase text-white/80">Focus</h4>
              <p className="mt-2 text-white/70">Interactive design, motion, and brand-forward web experiences.</p>
            </div>
            <div>
              <h4 className="font-semibold tracking-widest uppercase text-white/80">Stack</h4>
              <p className="mt-2 text-white/70">React, Next.js, Tailwind, Framer Motion, Three/Spline.</p>
            </div>
            <div>
              <h4 className="font-semibold tracking-widest uppercase text-white/80">Availability</h4>
              <p className="mt-2 text-white/70">Q4 openings for 2-3 projects. Let's talk.</p>
            </div>
          </div>
        </motion.div>
        <p className="mt-8 text-center text-xs uppercase tracking-widest text-white/40">© {new Date().getFullYear()} Your Name</p>
      </div>
    </section>
  );
}
