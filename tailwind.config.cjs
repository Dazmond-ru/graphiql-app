/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('./assets/graphql-reference.svg')",
      },
    },
  },
  plugins: [],
};
