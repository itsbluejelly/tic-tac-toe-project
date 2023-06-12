/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.html", "./docs/js/*.js"],
  theme: {
    extend: {
      keyframes:{
        "pull-button":{
          "0%":{transform: 'scale(0.8)'},
          "100%":{transform: 'scale(1.0)'},
        },
        "start-drop":{
          "0%":{transform: 'scale(2)'},
          "50%":{transform: 'translateY(-50%)'},
          "100%":{transform: 'translateY(50%)'},
        }
      },
      animation:{
        "pull-button": "pull-button 1s ease-in-out 0s 1 normal forwards",
        "start-drop": "start-drop 1s ease-in-out 0s 1 normal forwards"
      },
    },
  },
  plugins: [],
}

