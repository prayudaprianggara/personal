/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#64748b',
        dark: '#18181b'
      },
      screens: {
        '2xl': '1320px'
      },
      fontFamily: {
        'poppins' : 'Poppins'
      }
    },
  },
  plugins: [],
}
