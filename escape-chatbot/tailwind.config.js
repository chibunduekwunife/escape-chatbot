module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily:{
        jester: ['JesterFont', 'sans-serif'],
        ringmaster: ['RingmasterFont', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
