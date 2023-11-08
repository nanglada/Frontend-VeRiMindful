/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '136': '40rem'
      },
      width: {
        '128': '32rem',
        '164': '60rem'
      },
      fontFamily: {
        'logo': ['Sniglet'],
        'body': ['Cabin']
      },
      textColor: {
        'orange1': '#FB8500',
        'blue1': '#219EBC'
      },
      colors: {
        'orange1': '#FB8500',
        'blue1': '#219EBC',
        'blue2': "#1A7A92",
        'orange2': "#DC7400"
      }
    },
  },
  plugins: [],
}

