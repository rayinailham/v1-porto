/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        'comfortaa': ['var(--font-comfortaa)'],
        'nunito': ['var(--font-nunito)'],
        'space-grotesk': ['var(--font-space-grotesk)'],
        'varela-round': ['var(--font-varela-round)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      translate: {
        '101': '101%',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        marquee: 'marquee 15s linear infinite'
      }
    },
  },
  plugins: [],
}
