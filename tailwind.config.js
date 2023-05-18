/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      main: ['Caveat', 'cursive'],
      secondary: ['Amatic SC', 'cursive']
    },
    extend: {},
  },
  plugins: [],
}