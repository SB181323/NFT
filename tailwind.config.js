/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode:'class',
  theme: {
    colors:{
      "transparent":"transparent",
      "white": "#ffffff",
      "black": "#2B2B2B",
      "blue": "#397FFE",
      "brown": "#B8482F",
      "light-gray":"#D9D9D9",
      "dark-gray" : "#9CA1AC",
      "red" : "#FF4955",
      "orange" : "#D25720",
      "dark-blue" : "#65A2B1",
      "dark-black": "#3B3B3B" ,
      "gray": "#858584",
      "Purple":"#A259FF",
      
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '2rem',
        xl: '5rem',
        '2xl': '5rem',
        '3xl': '5rem',
        '4xl': '5rem',
        '5xl': '5rem',
        '6xl': '5rem',
      },
    },
    extend: {},
  },
  daisyui: {
    darkTheme: "light",
   },
   
  plugins: [],
}
