/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,tsx,js,jsx,css,scss,sass,less,stylus,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
