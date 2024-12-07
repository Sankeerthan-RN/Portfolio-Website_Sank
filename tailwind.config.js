/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg_color_1':'#02364d',
        'bg_color_2':'#03011a',
        'bg_color_3':'#020d33',
        'blue':'#14aef7',
        'pink':'#f472b6',
        'green':'#00a67d',
        'button_color':'#261d5e',
        'boader_blue':'#1b2c68a0',
      },
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}

