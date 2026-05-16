import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 60px rgba(0, 212, 255, 0.25)',
        panel: '0 20px 80px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(0,212,255,0.18), transparent 30%), linear-gradient(180deg, rgba(11,24,48,1), rgba(7,17,32,1))',
      },
      colors: {
        navy: '#071120',
        electric: '#00D4FF',
        neon: '#00F5FF',
        premium: '#7B61FF',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.88' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
