/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ps-blue': {
          DEFAULT: '#0070d1',
          hover: '#005bb5',
          subtle: 'rgba(0, 112, 209, 0.08)',
        },
        'text-main': '#0f172a',
        'text-muted': '#475569',
        'text-dim': '#64748b',
        'border-subtle': '#e2e8f0',
        'border-focus': '#cbd5e1',
        'bg-section-alt': '#f8fafc',
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'hover': '0 8px 24px rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        heading: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        body: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      transitionTimingFunction: {
        'ps-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
