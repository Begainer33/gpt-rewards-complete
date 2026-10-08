module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#07111F',
        surface: '#0D1B2A',
        primary: '#38BDF8',
        secondary: '#6366F1',
        accent: '#22D3EE',
        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
        text: '#F8FAFC',
        muted: '#94A3B8'
      },
      boxShadow: {
        glow: '0 0 25px rgba(56, 189, 248, 0.2)'
      }
    }
  },
  plugins: []
};
