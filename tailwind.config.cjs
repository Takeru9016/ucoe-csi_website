/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage :{
        'contact' : "url('src/assets/one.png')"
      }
    },
  },
  plugins: [],
};
