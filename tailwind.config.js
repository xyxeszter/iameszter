/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4A90E2',    
        'secondary': '#50E3C2',  
        'accent': '#A78BFA',     
        'link': '#0EA5E9',
        'neon': '#0EA5E9',
        'heading': '#2C3E50',    
        'body': '#34495E',       
        'background-dark': '#171717',
        'background-light': '#F9FAFB',  
      },
      fontSize: {
        'xs': '0.75rem',     
        'sm': '0.875rem',    
        'base': '1rem',      
        'lg': '1.125rem',    
        'xl': '1.25rem',     
        '2xl': '1.5rem',     
        '3xl': '2rem',       
        '4xl': '2.5rem',     
        '5xl': '3rem',       
        '6xl': '4rem',       
      },
      fontFamily: {
        'space-grotesk': ['SpaceGrotesk', 'sans-serif'], // Uses your locally hosted font
      },
    },
  },
  plugins: [],
};
