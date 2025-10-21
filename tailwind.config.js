/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'blink': 'blink 1s step-end infinite',
        'loading-bar': 'loading 2s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        loading: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(200%)' },
        },
      },
    },
  },
  plugins: [],
}