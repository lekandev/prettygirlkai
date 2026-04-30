/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Cherry_Bomb_One': ['"Cherry Bomb One"', 'cursive'],
        'Gaegu': ['Gaegu', 'cursive'],
        'Itim': ['Itim', 'cursive'],
      },
      colors: {
        'y2k-pink': '#ff69b4',
        'y2k-yellow': '#ffd700',
        'y2k-cyan': '#00ffff',
        'y2k-purple': '#da70d6',
        'y2k-blue': '#4169e1',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 215, 0, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}