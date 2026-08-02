// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggle = () => setOpen(!open);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Work', to: '/' },
    { name: 'Case Studies', to: '/case-studies' },
    { name: 'Design', to: '/design' },
    { name: 'Contact', to: '/#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full transition-all duration-300 z-50 ${
        scrolled 
          ? 'bg-primary/95 border-b border-border/60 py-3 shadow-lg backdrop-blur-md' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <Link 
          to="/" 
          className="text-2xl font-black text-accent font-heading tracking-tight hover:opacity-85 transition duration-200"
        >
          IANDEV
        </Link>
        
        <button
          className="md:hidden text-accent focus:outline-none cursor-pointer"
          onClick={toggle}
          aria-label="Toggle menu"
        >
          {open ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>

        <ul className="hidden md:flex space-x-8 text-sm font-mono tracking-wider font-bold">
          {navLinks.map((link) => {
            const isContact = link.to.includes('#');
            return (
              <li key={link.name}>
                {isContact ? (
                  <a 
                    href={link.to} 
                    className="text-text/85 hover:text-accent transition duration-200 relative py-1 block"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    to={link.to} 
                    className="text-text/85 hover:text-accent transition duration-200 relative py-1 block"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile menu */}
      <div className={`${open ? 'block' : 'hidden'} md:hidden bg-primary border-b border-border/80 absolute top-full left-0 w-full`}>
        <ul className="flex flex-col space-y-4 p-6 text-sm font-mono font-bold tracking-wider text-left">
          {navLinks.map((link) => {
            const isContact = link.to.includes('#');
            return (
              <li key={link.name}>
                {isContact ? (
                  <a
                    href={link.to}
                    onClick={() => setOpen(false)}
                    className="block text-text/80 hover:text-accent transition py-1"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="block text-text/80 hover:text-accent transition py-1"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
