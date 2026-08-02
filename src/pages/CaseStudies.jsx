// src/pages/CaseStudies.jsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function CaseStudies() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('systems'); // 'systems' or 'designs'

  // Handle URL hash routing
  useEffect(() => {
    const hash = location.hash;
    if (hash === '#designs') {
      setActiveTab('designs');
    } else if (hash === '#systems') {
      setActiveTab('systems');
    }
  }, [location]);

  const setTab = (tab) => {
    setActiveTab(tab);
    window.history.pushState(null, '', `#${tab}`);
  };

  const systemStudies = [
    {
      id: 1,
      title: "RunnersPod",
      subtitle: "Scalable Platform for Running Events Management",
      role: "Fullstack Developer",
      duration: "3 Months (2026)",
      challenge: "The running community lacked a unified digital space to manage event registrations, runner profiles, and organizer logistics efficiently.",
      solution: "Built a high-fidelity web platform that serves as a dual-purpose portal for both athletes and event organizers, featuring streamlined payment gateways and result tracking.",
      stack: ["CodeIgniter4", "MySQL", "Javascript"],
      results: [
        "Seamless and secure registration process.",
        "Real-time registration and payment tracking.",
        "Transaction history for runners."
      ]
    },
    {
      id: 2,
      title: "MSWDO Information Management System",
      subtitle: "Government Social Welfare Management Registry",
      role: "Lead Fullstack Developer",
      duration: "2 Months (2025)",
      challenge: "Difficulty tracking client eligibility for assistance within the mandated 3-month window, relying on slow, error-prone manual entries.",
      solution: "Developed a robust, online/offline capable management system featuring dynamic dashboards that track funding sources and assistance distribution in real-time.",
      stack: ["CodeIgniter4", "MySQL", "Javascript"],
      results: [
        "Eliminated duplicate disbursements entirely.",
        "Search time for client history reduced from 15 minutes to 2 seconds.",
        "Over 12,000 active records successfully migrated and managed."
      ]
    },
    {
      id: 3,
      title: "Accounting Management System",
      subtitle: "Comprehensive Accounting Software",
      role: "Fullstack Developer",
      duration: "3 Months (2026)",
      challenge: "Finance teams were burdened by 'fragmented data,' manually navigating and cross-referencing multiple MS Excel spreadsheets to verify accounting entries.",
      solution: "Consolidated legacy spreadsheets into a centralized, relational database system with automated entry validation and cross-tabulation features.",
      stack: ["CodeIgniter4", "MySQL", "Javascript"],
      results: [
        "Reducted data entry time.",
        "Virtually eliminated human error.",
      ]
    }
  ];

  const designStudies = [
    {
      id: 1,
      title: "Rel Event Creations",
      subtitle: "Complete Branding for a Decoration Business",
      scope: "Logo, Typography, Color Palette, Branding",
      concept: "An events design needed a professional visual identity that would attract clients. The task was to create a branding system that was simple yet creative and artistic, ensuring it remained easily memorable in a competitive industry.",
      details: "We developed a concept-driven logo combining the Ananse Ntontan symbol—representing wisdom and creativity—with festive balloon elements. The palette used a vibrant gradient from Dark Red to Selective Yellow to reflect the energy of entertainment and art.",
      results: [
        "A cohesive visual system ready for print & digital.",
        "Complete brand guidelines documentation.",
        "Modern, relevant, and timeless."
      ]
    },
    {
      id: 2,
      title: "The Great Provider",
      subtitle: "Logo for an Insurance Provider Company",
      scope: "Logo",
      concept: "A general insurance agency required a visual 're-engineering' of their legacy brand. The goal was to move away from a cluttered, traditional aesthetic toward a formal, minimal, and modern identity that represents trustworthiness and stability.",
      details: "We developed a symbolic narrative titled 'The Flow of Grace.' The design integrates a Triangle (representing the Holy Trinity), a Circle (the human race/clients), and a Hand (divine protection). By using a 'Blue Dianne' and 'Tango' palette, we balanced corporate firmness with the energy of service.",
      results: [
        "Digital friendly flat design",
        "Legible to across all mediums—from large-scale outdoor signage to small-format",
      ]
    }
  ];

  return (
    <div className="flex-grow pt-24 pb-16 px-4 max-w-7xl mx-auto text-left">
      <div className="mb-12">
        <span className="text-accent font-mono text-xs uppercase tracking-widest block mb-2">// DETAILED ARCHIVE</span>
        <h1 className="text-4xl md:text-6xl font-heading text-text font-black uppercase mb-4">Case Studies</h1>
        <p className="text-text/70 max-w-xl font-sans text-base">
          In-depth breakdowns of selected development systems and design products built from inception to completion.
        </p>
      </div>

      {/* Tabs Menu */}
      <div className="flex border-b border-border/80 mb-12 font-mono">
        <button
          onClick={() => setTab('systems')}
          className={`pb-4 px-6 text-sm tracking-wider uppercase font-bold transition-all border-b-2 outline-none cursor-pointer ${activeTab === 'systems'
            ? 'border-accent text-accent'
            : 'border-transparent text-text/50 hover:text-text'
            }`}
        >
          [01] Info Systems
        </button>
        <button
          onClick={() => setTab('designs')}
          className={`pb-4 px-6 text-sm tracking-wider uppercase font-bold transition-all border-b-2 outline-none cursor-pointer ${activeTab === 'designs'
            ? 'border-accent text-accent'
            : 'border-transparent text-text/50 hover:text-text'
            }`}
        >
          [02] Graphic Design
        </button>
      </div>

      {/* Content Area */}
      <div>
        <AnimatePresence mode="wait">
          {activeTab === 'systems' ? (
            <motion.div
              key="systems"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {systemStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-primary/20 border border-border/80 rounded-xl p-8 md:p-12 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 font-mono text-xs text-text/30 hidden md:block">
                    {study.duration}
                  </div>

                  <span className="text-accent font-mono text-xs uppercase tracking-wider block mb-1">
                    {study.role}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-heading text-text font-bold mb-2 uppercase">
                    {study.title}
                  </h2>
                  <p className="text-text/60 font-sans text-sm mb-8">{study.subtitle}</p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xs font-mono text-accent uppercase tracking-wide mb-2">// The Challenge</h4>
                      <p className="text-text/80 text-sm leading-relaxed font-sans">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-accent uppercase tracking-wide mb-2">// The Solution</h4>
                      <p className="text-text/80 text-sm leading-relaxed font-sans">{study.solution}</p>
                    </div>
                  </div>

                  <div className="border-t border-border/60 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                      <h4 className="text-xs font-mono text-text/40 uppercase tracking-wide mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-1.5 font-mono">
                        {study.stack.map((item) => (
                          <span key={item} className="px-2.5 py-0.5 bg-primary/80 border border-border/60 text-text/80 rounded text-[11px]">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="w-full md:w-auto bg-accent-bg border border-accent/20 rounded-lg p-6">
                      <h4 className="text-xs font-mono text-accent uppercase tracking-wide mb-2">// Results & Metrics</h4>
                      <ul className="text-sm font-sans space-y-1.5 text-left">
                        {study.results.map((res, i) => (
                          <li key={i} className="flex items-center gap-2 text-text/90">
                            <span className="text-accent text-xs">✔</span> {res}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="designs"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-16"
            >
              {designStudies.map((study) => (
                <div
                  key={study.id}
                  className="bg-primary/20 border border-border/80 rounded-xl p-8 md:p-12"
                >
                  <span className="text-accent font-mono text-xs uppercase tracking-wider block mb-1">
                    {study.scope}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-heading text-text font-bold mb-2 uppercase">
                    {study.title}
                  </h2>
                  <p className="text-text/60 font-sans text-sm mb-8">{study.subtitle}</p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xs font-mono text-accent uppercase tracking-wide mb-2">// Creative Concept</h4>
                      <p className="text-text/80 text-sm leading-relaxed font-sans">{study.concept}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-accent uppercase tracking-wide mb-2">// Execution & Implementation</h4>
                      <p className="text-text/80 text-sm leading-relaxed font-sans">{study.details}</p>
                    </div>
                  </div>

                  <div className="border-t border-border/60 pt-6">
                    <h4 className="text-xs font-mono text-text/40 uppercase tracking-wide mb-3">Key Deliverables & Feedback</h4>
                    <ul className="grid md:grid-cols-3 gap-4">
                      {study.results.map((res, i) => (
                        <li key={i} className="p-4 bg-primary/40 border border-border/40 rounded flex items-start gap-2.5 text-sm text-text/80">
                          <span className="text-accent font-bold">↳</span> {res}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
