/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wobble1: 'wobble 10s ease-in-out infinite',
        wobble2: 'wobble 16s ease-in-out infinite',
        wobble3: 'wobble 24s ease-in-out infinite',
      },
      keyframes: {
        wobble: {
          '0%, 100%': { transform: 'translate(0px,0px) scale(1)' },
          '20%': { transform: 'translate(-20px,10px) scale(0.8)' },
          '40%': { transform: 'translate(10px,-10px) scale(0.7)' },
          '60%': { transform: 'translate(30px,10px) scale(1.1)' },
          '80%': { transform: 'translate(10px,-20px) scale(1.2)' },
        }
      }
    },
  },
  plugins: [],
}

