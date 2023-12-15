/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { //if you define styles outside of extends, you will override tailwind's default styles. this means you will have to define ALL styles you want to use.
    container: {
      center: true,
    },
    screens: { 
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    spacing: {
      '1': '4px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    extend: { //extend simply adds or modifies styling functionality to what tailwind already has. you do not necessarily need to override all of tailwind's default styles.
        fontSize: {
          base: '18px',
        },
        margin: {
          1: '12px',
          2: '14px',
          3: '16px',
          4: '20px',
        },
        colors: {
          reactjs: {
            100: "#49e659",
            200: "#434259"
          }
        },
      },
    },
  plugins: [],
}