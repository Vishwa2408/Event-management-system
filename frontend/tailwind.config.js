/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-lavender': '#C3A8D4',
        'pastel-pink': '#F7C6D2',
        'pastel-rose': '#F1A0B5',
        'lavender-600': '#A58DFF',
      },
    },
  },
  plugins: [],
}

