/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*",
  "./node_modules/flowbite/**/*.js"
],
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

