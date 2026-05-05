import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#1D1D1D',
        light: '#FFFFFF',
        grey: '#BBBBBB',
        accent: '#C9FF42',
        'accent-light': '#F3FFAB',
        blue: '#78ADC4',
      },
      fontFamily: {
        title: ['"Times New Roman"', 'Times', 'serif'],
        body: ['"Neue Montreal"', '"DM Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'title-xl': ['150px', { lineHeight: '1.1', letterSpacing: '-0.033em' }],
        'title-lg': ['92px', { lineHeight: '1.1', letterSpacing: '-0.054em' }],
        'title-md': ['72px', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        'title-sm': ['40px', { lineHeight: '1', letterSpacing: '-0.05em' }],
        'body-lg': ['32px', { lineHeight: '1.3' }],
        'body-md': ['24px', { lineHeight: '1.3' }],
        'body-sm': ['18px', { lineHeight: '1.3' }],
        'label': ['16px', { lineHeight: '1', letterSpacing: '0.1em' }],
      },
      borderRadius: {
        's': '8px',
        'm': '16px',
        'l': '24px',
        'xl': '32px',
        '2xl': '48px',
        'xxl': '64px',
        'card': '80px',
      },
      spacing: {
        's': '8px',
        'm': '16px',
        'l': '24px',
        'xl': '32px',
        'xxl': '64px',
      },
      aspectRatio: {
        'phone': '9 / 19.5',
        'hero': '16 / 9',
      },
    },
  },
  plugins: [],
} satisfies Config
