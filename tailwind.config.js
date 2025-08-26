
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
  ], // Safelist common .btn utilities
  theme: {
    extend: {
      colors: {
        'accent': '#ff2e63',
        'primary': '#8B4513',
        'base-100': '#f0f0f5',
        'base-200': 'rgba(255, 255, 255, 0.1)',
        'cosmic': '#1a1a3d',
        'nebula': '#ff6b6b',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-animate'),
  ],
};