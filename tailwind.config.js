/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "notes":"url('/assets/notes.svg')",
        "try":"url('/assets/try.svg')",
        "firstline":"url(/assets/firstline.svg)",
        "secondline":"url(/assets/secondline.svg)",
        "thirdline":"url(/assets/thirdline.svg)",
        "bluelong":"url(/assets/blueblu.svg)"
      },
      gradientColorStops: {
        'blue-600': '#0029FF',
        'indigo-900': '#0F1B5A',
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
      fontFamily: {
        'main': ['url(https://fonts.cdnfonts.com/css/general-sans)'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
