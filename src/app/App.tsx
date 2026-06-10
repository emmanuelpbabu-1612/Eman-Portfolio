import React from 'react';
import { motion } from 'motion/react';
import {
  ChevronDown,
  Cpu,
  Dna,
  Globe,
  ArrowRight,
  Terminal,
  ShieldCheck,
  Activity,
  Mail,
  Instagram,
  Linkedin as LinkedinIcon,
  Github as GithubIcon
} from 'lucide-react';
import { Starfield } from './components/Starfield';
import { Navbar } from './components/Navbar';
import { ProjectCard } from './components/ProjectCard';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { SkillBadge } from './components/SkillBadge';
import { TimelineItem } from './components/TimelineItem';
import { ContactForm } from './components/ContactForm';

const App: React.FC = () => {
  const projects = [
    {
      title: "Trade Compliance Classifier",
      description: "Machine learning model for automated HS code classification using NLP and custom embeddings for Indian trade data.",
      tags: ["Python", "Scikit-learn", "NLP"],
      type: "code" as const,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1080"
    },
    {
      title: "Customs Data Analytics",
      description: "Interactive dashboard for analyzing import/export trends and compliance patterns across Indian ports.",
      tags: ["Python", "Plotly", "Pandas"],
      type: "code" as const,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080"
    },
    {
      title: "Predictive Duty Calculator",
      description: "AI-powered tool for predicting customs duties and taxes based on product classification and origin.",
      tags: ["ML", "FastAPI", "SQL"],
      type: "code" as const,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1080"
    },
    {
      title: "Hackathon Prototype",
      description: "Multi-agent system for automated document verification in trade compliance workflows.",
      tags: ["Python", "LangChain", "OCR"],
      type: "code" as const,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1080"
    }
  ];

  const skills = [
    "Python",
    "Machine Learning",
    "Data Analytics",
    "SQL",
    "AI Automation",
    "Data Visualization",
    "Figma",
    "Startup Strategy"
  ];

  const experiences = [
    {
      year: "2026 - Present",
      title: "Founder & CEO",
      organization: "VenportAI",
      description: "Building AI-powered compliance automation platform for Indian trade. Leading product development and go-to-market strategy."
    },
    {
      year: "2025",
      title: "Campus Ambassador",
      organization: "Tathva'25",
      description: "Represented NITC's annual techno-management festival, driving engagement and partnerships across Kerala."
    },
    {
      year: "2025",
      title: "Liaison Officer",
      organization: "TEDxSSET 2026",
      description: "Coordinated with speakers and sponsors for independent TEDx event, managing logistics and communications."
    },
    {
      year: "2025 - Present",
      title: "BTech Student",
      organization: "Data Science & Engineering",
      description: "Exploring AI, machine learning, big data, and automation technologies while building real-world projects."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden font-sans">
      <Starfield />
      <Navbar />

      <main className="relative z-10 pt-48 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center items-center mb-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center gap-3 mb-10"
            >
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="font-futuristic text-[10px] tracking-[0.5em] uppercase text-white/40">
                System Initialization: Student // Founder // Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-futuristic text-4xl md:text-7xl tracking-[-0.04em] leading-[0.95] mb-12 uppercase"
            >
              Building AI for <br />
              <span className="text-white/20">Global Trade</span><br />
              Compliance.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <p className="text-sm md:text-base text-white/60 leading-relaxed mb-6 tracking-wider font-light">
                Data Science Undergraduate | Founder of VenportAI
              </p>
              <p className="text-xs md:text-sm text-white/40 leading-relaxed mb-16 tracking-wider font-light">
                Exploring AI, Machine Learning & Big Data to solve real-world compliance challenges in international trade.
              </p>

              <div className="flex flex-wrap gap-8 justify-center">
                <a href="#projects" className="px-10 py-5 bg-white text-black font-futuristic text-[10px] tracking-[0.3em] uppercase hover:bg-white/90 transition-all flex items-center gap-4 group">
                  View Projects
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </a>
                <a href="#contact" className="px-10 py-5 border border-white/20 text-white font-futuristic text-[10px] tracking-[0.3em] uppercase hover:bg-white/5 transition-all">
                  Connect With Me
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 border-y border-white/10 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="font-futuristic text-2xl tracking-[0.2em] uppercase mb-12">About Me</h2>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Activity size={16} className="text-white/40" />
                    <span className="font-futuristic text-[9px] tracking-[0.3em] uppercase text-white/30">Identity</span>
                  </div>
                  <p className="text-sm text-white/60 tracking-wider">
                    Emmanuel P Babu • Age 19
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Globe size={16} className="text-white/40" />
                    <span className="font-futuristic text-[9px] tracking-[0.3em] uppercase text-white/30">Location</span>
                  </div>
                  <p className="text-sm text-white/60 tracking-wider">
                    Based in Kochi, Kerala, India
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Terminal size={16} className="text-white/40" />
                    <span className="font-futuristic text-[9px] tracking-[0.3em] uppercase text-white/30">Current Status</span>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed tracking-wider">
                    First-year BTech/Data Science student building VenportAI — an AI-powered compliance automation platform for Indian trade.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Activity size={16} className="text-white/40" />
                    <span className="font-futuristic text-[9px] tracking-[0.3em] uppercase text-white/30">Interests</span>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed tracking-wider">
                    AI, Machine Learning, Automation, Compliance Technology, and Startups. Open to collaborations and learning opportunities.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu size={16} className="text-white/40" />
                    <span className="font-futuristic text-[9px] tracking-[0.3em] uppercase text-white/30">Experience</span>
                  </div>
                  <p className="text-xs text-white/40 leading-relaxed tracking-wider">
                    Ex-Campus Ambassador for Tathva'25 • Ex-Liaison Officer at TEDxSSET 2026
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="relative p-8 bg-black border border-white/10 font-mono text-[11px] text-white/60 leading-relaxed">
                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-white/40" />
                    <span className="text-[9px] tracking-[0.2em]">IDENTITY_NODE_v1</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  </div>
                </div>
                <p className="text-white/30">&gt; init identity_scan.sh</p>
                <p>&gt; name: emmanuel_p_babu ... OK</p>
                <p>&gt; age: 19 ... VERIFIED</p>
                <p>&gt; role: data_science_student ... OK</p>
                <p>&gt; role: startup_founder ... OK</p>
                <p>&gt; location: kochi_kerala_india ... OK</p>
                <p className="text-white/80">&gt; passion: ai_ml_automation ... CONFIRMED</p>
                <p className="text-white/80">&gt; status: BUILDING_THE_FUTURE</p>
                <p className="animate-pulse mt-4">_</p>
              </div>
            </div>
          </div>
        </section>

        {/* VenportAI Startup Showcase */}
        <section id="startup" className="py-20 mb-32">
          <div className="relative p-12 md:p-24 bg-white/[0.03] border border-white/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none grayscale">
              <ImageWithFallback src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1080" alt="Trade" className="w-full h-full object-cover" />
            </div>

            <div className="relative z-10 max-w-4xl">
              <h4 className="font-futuristic text-[10px] tracking-[0.4em] uppercase text-white/30 mb-8">Venture_V01 // AI_Compliance</h4>
              <h2 className="font-futuristic text-4xl md:text-6xl tracking-[-0.02em] leading-tight mb-6 uppercase">VenportAI</h2>
              <p className="text-lg text-white/70 leading-relaxed mb-16 tracking-wider">
                AI-powered compliance automation for Indian trade.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                <div className="border-l-2 border-white/20 pl-6">
                  <h3 className="font-futuristic text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">Problem</h3>
                  <p className="text-sm text-white/60 leading-relaxed tracking-wider">
                    Indian businesses struggle with complex trade compliance, spending countless hours on manual HS code classification and customs documentation.
                  </p>
                </div>

                <div className="border-l-2 border-white/20 pl-6">
                  <h3 className="font-futuristic text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">Solution</h3>
                  <p className="text-sm text-white/60 leading-relaxed tracking-wider">
                    AI-powered platform that automates product classification, duty calculation, and compliance documentation using ML models trained on Indian trade data.
                  </p>
                </div>

                <div className="border-l-2 border-white/20 pl-6">
                  <h3 className="font-futuristic text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">Vision</h3>
                  <p className="text-sm text-white/60 leading-relaxed tracking-wider">
                    Become the operating system for trade compliance in India, enabling businesses to navigate global markets with confidence and speed.
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 pt-12">
                <h3 className="font-futuristic text-[10px] tracking-[0.3em] uppercase text-white/40 mb-8">Roadmap</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                    <div className="w-2 h-2 mt-1.5 bg-white/60" />
                    <div>
                      <h4 className="font-futuristic text-[9px] tracking-[0.2em] uppercase text-white/60 mb-2">Phase 1</h4>
                      <p className="text-xs text-white/40 tracking-wider">Launch MVP with HS code classifier and duty calculator</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 mt-1.5 bg-white/40" />
                    <div>
                      <h4 className="font-futuristic text-[9px] tracking-[0.2em] uppercase text-white/40 mb-2">Phase 2</h4>
                      <p className="text-xs text-white/30 tracking-wider">Integrate with customs portals and expand to full compliance suite</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 mt-1.5 bg-white/20" />
                    <div>
                      <h4 className="font-futuristic text-[9px] tracking-[0.2em] uppercase text-white/30 mb-2">Phase 3</h4>
                      <p className="text-xs text-white/20 tracking-wider">AI-powered compliance advisory and predictive analytics</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 mt-1.5 bg-white/10" />
                    <div>
                      <h4 className="font-futuristic text-[9px] tracking-[0.2em] uppercase text-white/20 mb-2">Phase 4</h4>
                      <p className="text-xs text-white/15 tracking-wider">Expand to Southeast Asian markets</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 mb-32">
          <div className="flex items-center justify-between mb-20">
            <h2 className="font-futuristic text-2xl tracking-[0.3em] uppercase">Projects</h2>
            <span className="text-[9px] font-futuristic text-white/20 tracking-[0.4em] uppercase">AI // ML // Data</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 mb-32">
          <div className="flex items-center justify-between mb-20">
            <h2 className="font-futuristic text-2xl tracking-[0.3em] uppercase">Technical Stack</h2>
            <span className="text-[9px] font-futuristic text-white/20 tracking-[0.4em] uppercase">Core_Capabilities</span>
          </div>

          <div className="flex flex-wrap gap-6">
            {skills.map((skill, idx) => (
              <SkillBadge key={skill} name={skill} delay={idx * 0.05} />
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="py-20 mb-32">
          <div className="flex items-center justify-between mb-20">
            <h2 className="font-futuristic text-2xl tracking-[0.3em] uppercase">Journey</h2>
            <span className="text-[9px] font-futuristic text-white/20 tracking-[0.4em] uppercase">Experience_Log</span>
          </div>

          <div className="max-w-3xl">
            {experiences.map((exp, idx) => (
              <TimelineItem
                key={idx}
                year={exp.year}
                title={exp.title}
                organization={exp.organization}
                description={exp.description}
                index={idx}
              />
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 mb-48">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="font-futuristic text-3xl md:text-4xl tracking-[0.2em] uppercase mb-6">Let's Build Something Impactful</h2>
              <p className="text-sm text-white/40 tracking-wider">
                Open to collaborations, opportunities, and conversations about AI, startups, and technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ContactForm />

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="relative p-8 bg-white/[0.02] border border-white/10 group hover:border-white/20 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <LinkedinIcon size={20} className="text-white/40" />
                    <h3 className="font-futuristic text-[10px] tracking-[0.3em] uppercase text-white/40">LinkedIn</h3>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/emmanuel-p-babu-2603b236b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-white transition-colors tracking-wider"
                  >
                    Connect on LinkedIn →
                  </a>
                </div>

                <div className="relative p-8 bg-white/[0.02] border border-white/10 group hover:border-white/20 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <GithubIcon size={20} className="text-white/40" />
                    <h3 className="font-futuristic text-[10px] tracking-[0.3em] uppercase text-white/40">GitHub</h3>
                  </div>
                  <a
                    href="https://github.com/emmanuelpbabu-1612"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-white transition-colors tracking-wider"
                  >
                    View my work on GitHub →
                  </a>
                </div>

                <div className="relative p-8 bg-white/[0.02] border border-white/10 group hover:border-white/20 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <Mail size={20} className="text-white/40" />
                    <h3 className="font-futuristic text-[10px] tracking-[0.3em] uppercase text-white/40">Email</h3>
                  </div>
                  <a
                    href="mailto:emmanuelpbabu@gmail.com"
                    className="text-sm text-white/60 hover:text-white transition-colors tracking-wider"
                  >
                    emmanuelpbabu@gmail.com
                  </a>
                </div>

                <div className="relative p-8 bg-white/[0.02] border border-white/10 group hover:border-white/20 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <Instagram size={20} className="text-white/40" />
                    <h3 className="font-futuristic text-[10px] tracking-[0.3em] uppercase text-white/40">Instagram</h3>
                  </div>
                  <a
                    href="https://www.instagram.com/the_eman.06"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/60 hover:text-white transition-colors tracking-wider"
                  >
                    Follow on Instagram →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 opacity-30 hover:opacity-100 transition-opacity duration-700">
          <div className="font-futuristic text-[9px] tracking-[0.5em] uppercase">
            © 2026 VenportAI
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/emmanuel-p-babu-2603b236b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href="https://github.com/emmanuelpbabu-1612"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="mailto:emmanuelpbabu@gmail.com"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.instagram.com/the_eman.06"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>

          <div className="font-mono text-[9px] tracking-widest text-white/40">
            LOC: Kochi, Kerala, India
          </div>
        </footer>
      </main>

      {/* Subtle Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay"><svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter><feTurbulence></feTurbulence></filter><filter><feTurbulence></feTurbulence></filter><filter><feTurbulence></feTurbulence></filter><filter><feTurbulence></feTurbulence></filter><rect></rect><filter><feTurbulence></feTurbulence></filter><filter><feTurbulence></feTurbulence></filter><filter><feTurbulence></feTurbulence></filter><filter><feTurbulence></feTurbulence></filter><rect></rect><rect></rect><rect></rect><rect></rect><filter><feTurbulence></feTurbulence></filter><filter><feTurbulence></feTurbulence></filter><filter><feTurbulence></feTurbulence></filter><filter><feTurbulence></feTurbulence></filter><filter><feTurbulence></feTurbulence></filter><rect></rect><filter><feTurbulence></feTurbulence></filter><rect></rect><rect></rect><rect></rect><rect></rect><filter><feTurbulence></feTurbulence></filter><rect></rect><rect></rect><rect></rect><filter><feTurbulence></feTurbulence></filter><filter><feTurbulence></feTurbulence></filter><filter><feTurbulence></feTurbulence></filter><filter><feTurbulence></feTurbulence></filter><rect></rect><rect></rect><rect></rect><rect></rect><rect></rect><rect></rect><filter><feTurbulence></feTurbulence></filter><filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter><rect width="100%" height="100%" filter="url(#noiseFilter)" /><rect></rect></svg></div>
    </div>
  );
};

export default App;
