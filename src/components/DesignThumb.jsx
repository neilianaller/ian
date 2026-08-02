import React from 'react';

export default function DesignThumb({ design }) {
  return (
    <a href={design.caseStudyLink} className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-[4/3] bg-gray-800">
        <img src={design.image} alt={design.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        <div className="absolute bottom-2 left-2 text-white">
          <h3 className="text-sm font-medium">{design.name}</h3>
          <span className="text-xs bg-primary/30 px-1 rounded">{design.category}</span>
        </div>
      </div>
    </a>
  );
}
