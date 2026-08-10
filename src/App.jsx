// src/App.jsx
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import DesignPortfolio from './pages/DesignPortfolio';
import Stories from './pages/Stories';
import Story from './pages/Story';
import './App.css';

// Scroll to top or specific hash on route transitions
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        // Delay scroll slightly to allow React DOM updates
        const timeout = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timeout);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="flex flex-col min-h-screen bg-primary text-text select-none">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/design" element={<DesignPortfolio />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/stories/:slug" element={<Story />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
