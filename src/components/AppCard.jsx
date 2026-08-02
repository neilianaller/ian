// src/components/AppCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function AppCard({ app }) {
  return (
    <motion.div
      className="bg-primary border border-border rounded-lg p-6 shadow-md flex flex-col justify-between"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
    >
      <div>
        <div className="relative overflow-hidden rounded-md mb-4 bg-gray-800 aspect-[1/1]">
          <img
            src={app.icon}
            alt={app.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-heading text-accent font-semibold">{app.name}</h3>
          <div className="flex gap-1.5 font-mono">
            {app.platforms.map((plat) => (
              <span
                key={plat}
                className="px-2 py-0.5 bg-accent-bg text-accent rounded text-[10px] uppercase font-bold tracking-wider"
              >
                {plat}
              </span>
            ))}
          </div>
        </div>
        <p className="text-text text-sm mb-6 leading-relaxed font-sans text-left">
          {app.description}
        </p>
      </div>

      <a
        href={app.storeUrl}
        className="w-full text-center inline-block px-4 py-2.5 bg-accent text-primary font-mono font-bold rounded hover:bg-[#a3f03b] transition duration-200"
      >
        Store Link →
      </a>
    </motion.div>
  );
}
