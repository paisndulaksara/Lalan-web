/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fff', // Your custom color name
        secondary: '#000',
        third: '#d3d3d3',
        fourth: '#3d2704',
        accent: '#fdc140',
        blue:'#20222d',
      },
      container: { // Add the container customization here
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '6rem',
          header:'2rem',
          ed: '6rem',
        },
      },
    },
  },
  plugins: [],
}