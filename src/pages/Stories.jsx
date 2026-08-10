// src/pages/Stories.jsx
import React from 'react';
import { motion } from 'framer-motion';
import StoryCard from '../components/StoryCard';
import { getAllStories } from '../data/stories';

export default function Stories() {
  const stories = getAllStories();

  return (
    <div className="flex-grow">
      {/* Page Header */}
      <section className="py-16 md:py-24 px-4 border-b border-border">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-heading text-text font-black mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Stories
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-text/70 font-sans font-light leading-relaxed italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Why I built what I built.
          </motion.p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={story.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <StoryCard story={story} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
