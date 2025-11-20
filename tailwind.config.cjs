/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0f6b5a',
          50: '#eaf6f2',
          100: '#d7f0e8'
        },
        secondary: '#f6a01a',
        accent: '#ff4d6d',
        neutralDark: '#0f1724',
        neutralLight: '#f7fafc',
        siteBlack: '#000000',
        siteGray: {
          DEFAULT: '#1f2937',
          50: '#f8fafc'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Arial']
      }
    }
  },
  plugins: []
}
