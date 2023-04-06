/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts,svg}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/container-queries')
  ],
}
