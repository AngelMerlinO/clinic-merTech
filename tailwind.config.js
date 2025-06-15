/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './templates/**/*.html',      // templates globales
    './apps/**/templates/**/*.html', // templates dentro de cada app
    './apps/**/*.py'              // por si usas clases/strings con clases CSS
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: ['acid'], 
  },
}
