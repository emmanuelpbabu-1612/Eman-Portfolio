import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-black/40 backdrop-blur-xl border-b border-white/10"
    >
      <div className="hidden md:flex items-center gap-10 text-[10px] font-medium tracking-[0.4em] text-white/40 uppercase font-sans">
        <a href="#about" className="hover:text-white transition-all duration-300">About</a>
        <a href="#startup" className="hover:text-white transition-all duration-300">Startup</a>
        <a href="#projects" className="hover:text-white transition-all duration-300">Projects</a>
        <a href="#skills" className="hover:text-white transition-all duration-300">Skills</a>
        <a href="#experience" className="hover:text-white transition-all duration-300">Experience</a>
        <a href="#contact" className="hover:text-white transition-all duration-300">Contact</a>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 border-r border-white/10 pr-6 mr-2">
          <a
            href="https://github.com/emmanuelpbabu-1612"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/emmanuel-p-babu-2603b236b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
        <a href="#contact" className="px-6 py-2 border border-white/20 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500 font-sans">
          Connect
        </a>
      </div>
    </motion.nav>
  );
};
