// src/pages/Home.jsx
import ProjectCard from "../components/ProjectCard";
import AppCard from "../components/AppCard";
import DesignThumb from "../components/DesignThumb";
import ContactForm from "../components/ContactForm";
import { projects } from "../data/projects";
import { apps } from "../data/apps";
import { designs } from "../data/designs";
import { clients } from "../data/clients";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex-grow">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[100svh] px-4 overflow-hidden border-b border-border">
        {/* Abstract background image with dark overlay */}
        <div
          className="absolute inset-0 bg-[url('/assets/hero.jpg')] bg-cover bg-bottom opacity-40 pointer-events-none"
          style={{ mixBlendMode: 'luminosity' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/80 to-primary pointer-events-none" />

        {/* Subtle grid/grain pattern overlay */}
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-accent font-mono text-sm tracking-widest uppercase"
          >
            // systems developer & designer portfolio
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-heading text-text font-black mb-6 tracking-tight leading-none"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            I build systems <br className="hidden md:inline" />
            <span className="text-accent underline decoration-border underline-offset-8">that work.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-text/80 mb-10 max-w-2xl font-sans font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Web apps. Mobile apps. Information Systems. Clean design. <br />Based in Bukidnonn, PH.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a
              href="#dev-projects"
              className="px-8 py-3.5 bg-accent text-primary font-mono font-bold uppercase tracking-wider rounded hover:bg-[#a3f03b] active:scale-95 transition-all text-center"
            >
              View Dev Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border border-accent text-accent font-mono font-bold uppercase tracking-wider rounded hover:bg-accent-bg active:scale-95 transition-all text-center"
            >
              Let's Talk
            </a>
          </motion.div>
        </div>

        {/* Bottom indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-accent/50 text-xs font-mono animate-bounce hidden md:block">
          Scroll Down ↓
        </div>
      </section>

      {/* Cover Image Showcase */}
      <div className="w-full overflow-hidden border-t-2 border-b-2 border-accent">
        <img
          src="/fb_cover_1.png"
          alt="Systems & Designs Showcase"
          className="w-full h-auto block"
        />
      </div>

      {/* Dev Projects */}
      <section id="dev-projects" className="py-24 px-4 max-w-7xl mx-auto border-b border-border/50">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-2">// 01 / Web & Systems Development</span>
            <h2 className="text-3xl md:text-5xl font-heading text-text font-extrabold uppercase">Featured Systems</h2>
          </div>
          <p className="text-text/60 max-w-md mt-4 md:mt-0 font-sans text-sm text-left">
            Robust information systems, registries, and custom web applications optimized for speed, security, and administrative efficiency.
          </p>
        </div>

        <div className="space-y-12">
          {/* Featured Project */}
          <div className="border border-border/80 rounded-xl overflow-hidden bg-primary/20 backdrop-blur-sm">
            {projects
              .filter((p) => p.featured)
              .map((proj) => (
                <ProjectCard key={proj.id} project={proj} isFeaturedView={true} />
              ))}
          </div>

          {/* Grid for other systems */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((p) => !p.featured)
              .map((proj) => (
                <ProjectCard key={proj.id} project={proj} isFeaturedView={false} />
              ))}
          </div>
        </div>
      </section>

      {/* Mobile Apps */}
      <section id="mobile-apps" className="py-24 bg-primary/30 border-b border-border/50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-2">// 02 / Mobile Applications</span>
              <h2 className="text-3xl md:text-5xl font-heading text-text font-extrabold uppercase">Mobile Apps</h2>
            </div>
            <p className="text-text/60 max-w-md mt-4 md:mt-0 font-sans text-sm text-left">
              Native and cross-platform mobile solutions. Privacy-first, utility-focused tools designed for everyday life and developer pipelines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </section>

      {/* Design Teaser */}
      <section id="design" className="py-24 px-4 max-w-7xl mx-auto border-b border-border/50">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-2">// 03 / UI & Graphic Artworks</span>
            <h2 className="text-3xl md:text-5xl font-heading text-text font-extrabold uppercase">Design Work</h2>
          </div>
          <div className="mt-4 md:mt-0">
            <a
              href="/design"
              className="inline-block px-6 py-2.5 border border-accent/40 text-accent font-mono text-sm tracking-wider uppercase rounded hover:bg-accent-bg hover:border-accent transition duration-200"
            >
              View Full Portfolio →
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.slice(0, 3).map((design) => (
            <DesignThumb key={design.id} design={design} />
          ))}
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="py-20 bg-primary/20 border-b border-border/50 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-4">// TRUSTED BY</span>
          <h3 className="text-2xl font-heading text-text uppercase font-semibold mb-10">Clients & Affiliations</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center">
            {clients.map((client) => (
              <div
                key={client.id}
                className="p-6 bg-primary border border-border/60 rounded-lg hover:border-accent/40 transition duration-300 group"
              >
                <div className="text-sm font-mono text-text/80 font-bold group-hover:text-accent transition duration-200">
                  {client.name}
                </div>
                <div className="text-[10px] text-text/40 uppercase mt-1">
                  {client.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-2">// GET IN TOUCH</span>
          <h2 className="text-3xl md:text-5xl font-heading text-text font-extrabold uppercase">Let's Collaborate</h2>
          <p className="text-text/60 mt-4 max-w-md mx-auto text-sm">
            Have a project in mind, an interesting database system to build, or simply want to chat about dev? Drop a message.
          </p>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
