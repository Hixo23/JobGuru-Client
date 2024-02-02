/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light_text: '#040316',
        light_background: '#fbfbfe',
        light_primary: '#2f27ce',
        light_secondary: '#dddbff',
        light_accent: '#443dff',
        dark_text: '#eae9fc',
        dark_background: '#010104',
        dark_primary: '#3a31d8',
        dark_secondary: '#020024',
        dark_accent: '#0600c2'
      }
    }
  },
  plugins: []
}
