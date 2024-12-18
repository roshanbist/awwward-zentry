/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        sm: ['1.4rem', '1.8rem'],
        base: ['1.6rem', '2.4rem'],
        lg: ['2rem', '2.8rem'],
        xl: ['2.4rem', '3rem'],
        '2xl': ['3rem', '3.5rem'],
        '3xl': ['4.8rem', '5.8rem'],
        '4xl': ['9.6rem', '10.6rem'],
      },

      fontFamily: {
        zentry: ['zentry', 'sans-serif'],
        general: ['general', 'sans-serif'],
        robert: ['robert', 'sans-serif'],
        'cicular-web': ['circular-web', 'sans-serif'],
        'general-sans': ['General Sans', 'sans-serif'],
      },

      colors: {
        blue: {
          50: '#dfdff0',
          75: '#dfdff2',
          100: '#f0f2fa',
          200: '#010101',
          300: '#4fb7dd',
        },
        violet: {
          300: '#5724ff',
        },
        yellow: {
          100: '#8e983f',
          300: '#edff66',
        },
      },
    },
  },
  plugins: [],
};
