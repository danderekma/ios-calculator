/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#1C1C1C",
        "gray": "#505050",
        "light-gray": "#D4D4D2",
        "orange": "#FF9500"
      }
    }
  },
  plugins: []
};
