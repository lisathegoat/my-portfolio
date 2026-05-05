import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#1D1D1D',
        light: '#FFFFFF',
        grey: '#BBBBBB',
        accent: '#F3FFAB',
        blue: '#78ADC4',
      },
      fontFamily: {
        title: ['"Times New Roman"', 'Times', 'serif'],
        body: ['"Neue Montreal"', '"DM Sans"', 'system-ui', 'sans-serif'],
      },
      // Golden ratio type scale (φ = 1.618), base 16px
      // 16 → 20 → 26 → 32 → 52 → 84 → 136
      fontSize: {
        'title-xl': ['136px', { lineHeight: '1.05', letterSpacing: '-0.04em' }], // 84 × φ
        'title-lg': ['84px', { lineHeight: '1.1', letterSpacing: '-0.05em' }],   // 52 × φ
        'title-md': ['52px', { lineHeight: '1.1', letterSpacing: '-0.04em' }],   // 32 × φ
        'title-sm': ['32px', { lineHeight: '1.1', letterSpacing: '-0.04em' }],   // 20 × φ
        'body-lg': ['26px', { lineHeight: '1.4' }],                              // 16 × φ
        'body-md': ['20px', { lineHeight: '1.4' }],
        'body-sm': ['16px', { lineHeight: '1.5' }],
        'label': ['12px', { lineHeight: '1', letterSpacing: '0.12em' }],
      },
      borderRadius: {
        // 's' and 'l' removed — conflict with Tailwind's rounded-s/rounded-l (side-only utilities)
        // Use rounded-[8px] / rounded-[24px] inline, or rounded-full for pills
        'pill': '9999px',
        'panel': '16px',
        'card': '80px',
        'xxl': '64px',
        'xl2': '32px',
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
