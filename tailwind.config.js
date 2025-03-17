/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4A90E2',    // Example: a nice blue
        'secondary': '#50E3C2',  // Example: a turquoise
        'accent': '#A78BFA',     // cyan
        'link': '#0EA5E9',
        'neon': '#0EA5E9',
        'heading': '#2C3E50',    // Example: a dark blue-gray
        'body': '#34495E',       // Example: a lighter blue-gray
        'background-dark': '#171717',
        'background-light': '#F9FAFB',  // Light gray background
      },
      fontSize: {
        'xs': '0.75rem',     // 12px
        'sm': '0.875rem',    // 14px
        'base': '1rem',      // 16px
        'lg': '1.125rem',    // 18px
        'xl': '1.25rem',     // 20px
        '2xl': '1.5rem',     // 24px
        '3xl': '2rem',       // 32px
        '4xl': '2.5rem',     // 40px
        '5xl': '3rem',       // 48px
        '6xl': '4rem',       // 64px
      }
    }
  },
  plugins: [],
} 

//neon blue (#0EA5E9), cyan (#06B6D4), or purple (#A78BFA)