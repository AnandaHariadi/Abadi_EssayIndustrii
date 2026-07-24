/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        corporate: {
          orange: '#FF5722',
          amber: '#F59E0B',
          red: '#E53935',
          navy: '#0F172A',
          slate: '#334155',
          lightBg: '#FFFFFF',
          cardBg: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'clean': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
        'orange-glow': '0 10px 25px -5px rgba(249, 115, 22, 0.25)',
        'card-hover': '0 20px 30px -10px rgba(234, 88, 12, 0.12)',
      }
    },
  },
  plugins: [],
}
