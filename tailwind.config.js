// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['San Francisco', 'Apple SD Gothic Neo', 'sans-serif'],
      },
      colors: {
        'custom-gray': '#6E6E73',
      }
    },
  },
  plugins: [],
}
