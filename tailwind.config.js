// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // ← Required
  theme: {
    extend: {
      colors: {
        amber: {
          400: '#f59e0b',
          500: '#f59e0b',
        },
      },
    },
  },
  plugins: [],
};