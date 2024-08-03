// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Apple SD Gothic Neo', 'San Francisco', 'sans-serif'],
      },
      colors: {
        'custom-gray': '#6E6E73',
        'subtitle-gray': '#424245'
      }
    },
  },
  plugins: [],
}
