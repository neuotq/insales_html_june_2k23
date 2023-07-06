/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      container: {
        screens: {          
          xl: '1280px',
          '2xl': '1280px',
        },
      },
    },
  },
  plugins: [],
}

