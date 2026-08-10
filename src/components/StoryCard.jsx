// src/components/StoryCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function StoryCard({ story }) {
  return (
    <motion.article
      className="group flex flex-col bg-primary/40 border border-border rounded-xl p-6 md:p-8 hover:bg-primary/60 transition-colors duration-200"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      {/* App Icon */}
      {story.icon && (
        <div className="mb-6 w-12 h-12 rounded-lg bg-accent-bg/50 p-2 flex items-center justify-center">
          <img
            src={story.icon}
            alt={story.app}
            className="w-full h-full object-contain"
          />
        </div>
      )}

      {/* Date */}
      <div className="mb-4 text-accent font-mono text-xs tracking-widest uppercase">
        {new Date(story.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </div>

      {/* App Name */}
      <h3 className="text-accent font-mono text-xs font-bold tracking-wider uppercase mb-2">
        {story.app}
      </h3>

      {/* Story Title */}
      <h2 className="text-2xl md:text-3xl font-heading text-text font-bold mb-3 leading-tight">
        {story.title}
      </h2>

      {/* Hook */}
      <p className="text-text/75 text-base mb-6 leading-relaxed flex-grow font-sans">
        {story.hook}
      </p>

      {/* Read Story Link */}
      <Link
        to={`/stories/${story.slug}`}
        className="inline-flex items-center gap-2 text-accent font-mono text-sm font-bold uppercase tracking-wider hover:gap-3 transition-all duration-200"
      >
        Read story
        <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
      </Link>
    </motion.article>
  );
}
