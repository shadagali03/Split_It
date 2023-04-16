/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      'mono': ['ui-monospace']
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

