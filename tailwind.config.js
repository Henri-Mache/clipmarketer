/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F8F9FB',
      },
      fontFamily: {
        'sans': ['var(--font-inter)', 'Inter', 'sans-serif'],
        'bricolage': ['var(--font-bricolage)', 'Bricolage Grotesque', 'sans-serif'],
        'dm-sans': ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
        'inter': ['var(--font-inter)', 'Inter', 'sans-serif'],
        'newsreader': ['var(--font-newsreader)', 'Newsreader', 'serif'],
        'mono': ['ui-monospace', 'monospace'],
      },
      keyframes: {
        fadeInUpBlur: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
            filter: 'blur(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
            filter: 'blur(0)',
          },
        },
        animationIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
            filter: 'blur(8px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
            filter: 'blur(0px)',
          },
        },
      },
      animation: {
        'fade-in-up-blur': 'fadeInUpBlur 1s cubic-bezier(0.2, 0.8, 0.2, 1) both',
        'scroll-in': 'animationIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
      },
      transitionDelay: {
        '75': '75ms',
        '150': '150ms',
        '225': '225ms',
        '300': '300ms',
        '375': '375ms',
        '450': '450ms',
        '525': '525ms',
        '600': '600ms',
        '675': '675ms',
        '700': '700ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
