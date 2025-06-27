/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*/*.js",
"./public/index.html",
  ],
  theme: {
    extend: {
},
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
}
