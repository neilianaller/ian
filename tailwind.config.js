/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        text: "#F0EEE8",
        "text-h": "#08060D",
        bg: "#0A0A0A",
        accent: "#B8FF57",
        "accent-bg": "rgba(184,255,87,0.1)",
        "accent-border": "rgba(184,255,87,0.5)"
      },
      fontFamily: {
        sans: ["'Google Sans'", "sans-serif"],
        heading: ["'Google Sans'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"]
      }
    }
  },
  plugins: []
};
