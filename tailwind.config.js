/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./templates/**.html', './assets/js.**.js'],
  theme: {
    extend: {
      colors: {
        my: {
          gray:"#1E1E1E",
          purple: "#C778DD",
        },
      },
      fontFamily: {
        emotion: ['emo'],
        nine: ['nine-five'],
        highland: ['high'],
        glitch: ['gli'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  script: {
    "build": "npx tailwindcss -i ./assets/css/input.css -o ./assets/css/output.css --watch",
  },
}

