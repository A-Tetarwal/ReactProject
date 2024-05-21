/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        customBlue1: '#7442fe',
        customBlue2: '#4253fe',
        customBlue3: '#581cfc'
      },
    },
  },
  plugins: [],
}

