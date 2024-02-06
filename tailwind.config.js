import animate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
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
  plugins: [animate]
}
