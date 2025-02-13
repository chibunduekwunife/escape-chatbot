// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jester: ['Jester', 'sans-serif'],
        ringmaster: ['Ringmaster', 'serif'],
      },
    },
  },
  plugins: [],
};
