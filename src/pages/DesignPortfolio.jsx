// src/pages/DesignPortfolio.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { designs } from '../data/designs';
import DesignThumb from '../components/DesignThumb';

export default function DesignPortfolio() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Branding', 'Logo', 'Website'];

  const filteredDesigns = filter === 'All'
    ? designs
    : designs.filter(design => design.category === filter);

  return (
    <div className="flex-grow pt-24 pb-16 px-4 max-w-7xl mx-auto text-left">
      <div className="mb-12">
        <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-2">// CREATIVE GALLERY</span>
        <h1 className="text-4xl md:text-6xl font-heading text-text font-black uppercase mb-4">Design Portfolio</h1>
        <p className="text-text/70 max-w-xl font-sans text-base">
          A showcase of visual branding, UI/UX interfaces, and digital artwork created for clients and internal properties.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10 font-mono">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 border rounded font-mono text-xs uppercase tracking-wider transition-all duration-250 cursor-pointer ${filter === cat
                ? 'bg-accent border-accent text-primary font-bold'
                : 'border-border/80 text-text/60 hover:text-text hover:border-text/60'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Design Grid */}
      <motion.div
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredDesigns.map((design) => (
            <motion.div
              key={design.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <DesignThumb design={design} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredDesigns.length === 0 && (
        <div className="text-center py-20 border border-dashed border-border rounded-lg font-mono text-text/50">
          No design projects found under "{filter}".
        </div>
      )}
    </div>
  );
}
