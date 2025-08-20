
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './styles/**/*.css'
  ],
  theme: {
    extend: {
      colors: {
        cosmic: '#1a1a3d',
        nebula: '#ff6b6b',
      },
      animation: {
        'pulse-slow': 'pulse-slow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['dark', 'light', 'cupcake', 'retro'],
  },
};