import React from 'react';
import { Rocket, Github, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="p-2 rounded-sm bg-red-600 text-black group-hover:rotate-12 transition-transform">
              <Rocket size={18} />
            </div>
            <span className="font-extrabold tracking-widest uppercase">Your Name</span>
          </a>

          <nav className="hidden sm:flex items-center gap-8">
            <a href="#projects" className="text-sm uppercase tracking-widest text-white/80 hover:text-white">Work</a>
            <a href="#about" className="text-sm uppercase tracking-widest text-white/80 hover:text-white">About</a>
            <a href="#contact" className="text-sm uppercase tracking-widest text-white/80 hover:text-white">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10"
            >
              <Github size={16} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-3 py-1.5 text-sm font-semibold text-black hover:bg-red-500"
            >
              <Mail size={16} />
              <span className="hidden sm:inline">Say Hi</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
