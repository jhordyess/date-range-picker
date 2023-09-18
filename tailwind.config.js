/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7047eb',
          complementary: '#c2eb47'
        },
        secondary: {
          DEFAULT: '#313133'
        },
        background: {
          DEFAULT: '#28282a'
        }
      }
    }
  }
}
