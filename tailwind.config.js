/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily:{
      poppins:['Poppins', 'sans-serif']
    },
    colors: {
      primary: '#F8BBD0',
      secondary: '#5079D8',
      light: '#F5F6F6',
      dark: '#333333',
      dark2: '#999999',
      lala:'#4a4a4a',
      lala2:'#003142',
    },
  },
  plugins: [],
}

