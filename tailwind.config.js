/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  darkMode : "class",
  theme: {
    extend: {
      colors : {
        'textColor' : {
          light : "#334155",
          DEFAULT : "06b6d4",
          dark : "#0ea5e9"
        },
        'backgroundColor' : {
          light : "#ecfeff",
          DEFAULT : "ecfeff",
          dark : "#1d1b34"
        }
      }
    },
  },
  plugins: [],
}

