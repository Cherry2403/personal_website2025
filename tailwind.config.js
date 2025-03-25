/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure the correct paths are included
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
