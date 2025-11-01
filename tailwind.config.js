/**
 * Tailwind CSS Configuration
 * 
 * Configures Tailwind CSS for the portfolio application.
 * Defines custom animations and content paths for class purging.
 * 
 * @fileoverview Tailwind CSS configuration
 * @type {import('tailwindcss').Config}
 */
export default {
  // Files to scan for Tailwind classes (prevents unused CSS in production)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /**
       * Custom Animations
       * Terminal-style animations for typewriter effects and loading indicators
       */
      animation: {
        'blink': 'blink 1s step-end infinite',           // Cursor blink animation
        'loading-bar': 'loading 2s ease-in-out infinite', // Loading bar animation
      },
      /**
       * Custom Keyframes
       * Defines the animation sequences for custom animations
       */
      keyframes: {
        // Blink: Toggles opacity for cursor effect
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        // Loading: Horizontal sliding animation for loading bar
        loading: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(200%)' },
        },
      },
    },
  },
  plugins: [], // No additional Tailwind plugins
}