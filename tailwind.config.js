  const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
extend: {
  colors: {
    grape: colors.purple,
  },
},
  },
  plugins: [

require('@tailwindcss/forms'),
  ],
}

{/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
extend: {
  colors: {
    grape: colors.purple,
  },
},
    },
    plugins: [
// ...
require('@tailwindcss/forms'),
    ],
  }
  ```
*/}