/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fundo-black': '#1e2124',
        'fundo-cinza-escuro': '#282b30',
        'fundo-cinza-medio': '#36393e',
        'fundo-cinza-claro': '#424549',
      }
    },
  },
  plugins: [],
}

