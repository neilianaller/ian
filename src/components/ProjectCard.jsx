// src/components/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, isFeaturedView = false }) {
  if (isFeaturedView) {
    return (
      <motion.div
        className="flex flex-col lg:flex-row bg-primary/40 border border-border rounded-xl overflow-hidden shadow-lg"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <div className="lg:w-1/2 relative min-h-[250px] bg-gray-800">
          <img
            src={project.image}
            alt={project.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 left-4 bg-accent text-primary font-mono text-[10px] font-bold px-2.5 py-1 uppercase rounded-full tracking-wider">
            Featured System
          </div>
        </div>

        <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-between text-left">
          <div>
            <h3 className="text-2xl md:text-3xl font-heading text-accent font-extrabold mb-4 uppercase">
              {project.name}
            </h3>
            <p className="text-text/80 text-base md:text-lg mb-6 leading-relaxed font-sans">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-accent-bg text-accent border border-accent/20 rounded font-mono text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <a
            href={project.url}
            className="inline-block self-start px-6 py-3 bg-accent text-primary font-mono font-bold uppercase tracking-wider rounded hover:bg-[#a3f03b] transition duration-200"
          >
            Launch System →
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-primary/20 border border-border rounded-lg overflow-hidden shadow-md flex flex-col justify-between text-left"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div>
        <div className="relative aspect-[16/10] bg-gray-800 overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-heading text-accent font-bold mb-2 uppercase">{project.name}</h3>
          <p className="text-text/80 text-sm mb-4 leading-relaxed font-sans min-h-[60px]">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-accent-bg text-accent rounded text-[11px] font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
