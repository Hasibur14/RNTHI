/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
      },
      colors: {
        primary: {
          light: "#993128",
          dark: "#33100D",
          soft: "#0d0d3d",
        },
      },
    },
  },
  plugins: [
    daisyui, // Use daisyui plugin with import
  ],
};
