/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dorado: '#958938',
        verde: '#1F2F1A',
        accent: '#F8F9FA',
        font: '#000000',
      },
      fontFamily: {
        custom: ['Abhaya Libre', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
