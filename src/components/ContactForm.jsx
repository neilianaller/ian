// src/components/ContactForm.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [submitting, setSubmitting] = useState(false);

  const FORM_ENDPOINT = "https://formspree.io/f/mqedzagb";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'All fields are required.' });
      return;
    }

    setSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        setStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-primary border border-border p-8 rounded-lg shadow-xl relative overflow-hidden">
      {/* Background grain noise effect helper */}
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none" />

      <h3 className="text-2xl font-heading text-accent mb-6 font-semibold uppercase tracking-wider text-center">
        // Start a Conversation
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6 relative z-10 text-left">
        <div>
          <label htmlFor="name" className="block text-sm font-mono text-accent mb-1 uppercase tracking-wide">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-primary border border-border focus:border-accent text-text px-4 py-3 rounded outline-none transition duration-200 font-sans"
            placeholder="John Doe"
            disabled={submitting}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-mono text-accent mb-1 uppercase tracking-wide">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-primary border border-border focus:border-accent text-text px-4 py-3 rounded outline-none transition duration-200 font-sans"
            placeholder="john@example.com"
            disabled={submitting}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-mono text-accent mb-1 uppercase tracking-wide">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-primary border border-border focus:border-accent text-text px-4 py-3 rounded outline-none transition duration-200 font-sans resize-none"
            placeholder="Describe your project or inquiry..."
            disabled={submitting}
          />
        </div>

        <AnimatePresence mode="wait">
          {status.message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`p-4 rounded border font-sans text-sm ${
                status.type === 'success'
                  ? 'bg-accent/10 border-accent/30 text-accent'
                  : 'bg-red-500/10 border-red-500/30 text-red-400'
              }`}
            >
              {status.message}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-accent text-primary py-3 rounded font-mono font-bold uppercase tracking-wider hover:bg-[#a3f03b] active:scale-95 transition-all duration-200 flex justify-center items-center gap-2 cursor-pointer disabled:opacity-50"
        >
          {submitting ? (
            <>
              <svg className="animate-spin h-5 w-5 text-primary" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
}
