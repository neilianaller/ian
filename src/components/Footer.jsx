// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-primary/40 py-12 px-6 text-sm font-mono text-text/50" aria-label="Footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-heading font-black text-accent tracking-wider text-lg uppercase block mb-1">
            IANDEV
          </span>
          <p className="text-xs text-text/40">
            IANDEV. I build systems that work.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wider font-bold">
          <Link to="/" className="hover:text-accent transition duration-200">[01] Home</Link>
          <Link to="/stories" className="hover:text-accent transition duration-200">[02] Stories</Link>
          <Link to="/case-studies" className="hover:text-accent transition duration-200">[03] Case Studies</Link>
          <Link to="/design" className="hover:text-accent transition duration-200">[04] Design Portfolio</Link>
          <a href="/#contact" className="hover:text-accent transition duration-200">[05] Work With Me</a>
        </nav>
      </div>
    </footer>
  );
}
