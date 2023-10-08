/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,scss,ts}'],
  theme: {
    extend: {
      backgroundColor: {
        'magenta-dark': '#6b0023',
        'magenta-medium': '#a6024f',
        'magenta-light': '#e5097f',
        'magenta-lighter': '#f568b5',
        'magenta-pale': '#ffa1ef',
      },
      textColor: {
        'magenta-dark': '#6b0023',
        'magenta-medium': '#a6024f',
        'magenta-light': '#e5097f',
        'magenta-lighter': '#f568b5',
        'magenta-pale': '#ffa1ef',
      },
    },
  },
  plugins: [],
}

