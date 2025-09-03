
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css,js}',
    './styles/*.css',
    './pages/_app.js',
    './styles/*.module.css',
  ],
  safelist: [
    'px-4',
    'py-2',
    'rounded-lg',
    'font-semibold',
    'text-base',
    'transition-all',
    'duration-500',
    'shadow-md',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#ff2e63',
        primary: '#8B4513',
        'base-100': '#f0f0f5',
        'base-200': 'rgba(255, 255, 255, 0.1)',
        cosmic: '#1a1a3d',
        nebula: '#ff6b6b',
        'sky-blue': '#87CEEB',
      },
      animation: {
        'nebula-glow': 'nebula-glow 1.5s ease-in-out infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'fade-in': 'fade-in 0.3s ease-in',
      },
      keyframes: {
        'nebula-glow': {
          '0%, 100%': { boxShadow: '0 0 5px #ff6b6b, 0 0 10px #ff6b6b' },
          '50%': { boxShadow: '0 0 15px #ff6b6b, 0 0 20px #ff6b6b' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-animate'),
  ],
  daisyui: {
    themes: ['dark'],
  },
};