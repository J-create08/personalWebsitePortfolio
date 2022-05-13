module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        fadeIn: "fadeIn 1s ease-in forwards"
      },
      variants: {
        animation: ["motion-safe"]
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%": {
            transform: "translate(5px, -10px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-10px, 15px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)"
          }
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100": { opacity: 1 }
        }
      },
      colors: {
        primary: '#5FD9Ac',
        secondary: '#3DD9A0',
        darkgreen: '#014023',
        lightgray: '#F2F2F2',
        backgroundBlue: '#141A26',
        background: '#000D07',
      }
    },
  },
  plugins: [],
}
