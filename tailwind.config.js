/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      height: {
        '128': '32rem',
        '136': '40rem'
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
        'blue1': '#219EBC'
      }
    },
  },
  plugins: [],
}

