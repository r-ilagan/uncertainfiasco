module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        beige: {
          light: '#F5EFE0',
          DEFAULT: '#F0EAD6',
          dark: '#272727',
        },
        rose: {
          DEFAULT: '#C43156',
          dark: '#A32947',
          light: '#D24B6D',
        },
        seaweed: {
          DEFAULT: '#177E89',
          dark: '#084C61',
          light: '#21B0C0',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              // color: '#084C61',
              textDecoration: 'none',
              margin: '0 -0.4em',
              padding: '0.1em 0.4em',
              borderRadius: '0.8em 0.3em',
              background: 'transparent',
              backgroundImage:
                'linear-gradient(to right, rgba(2,0,36,0.1), rgba(33,176,192,0.7) 4%, rgba(35,192,209,0.3))',
              boxDecorationBreak: 'clone',
            },
            img: {
              display: 'block',
              margin: 'auto',
            },
            blockquote: {
              borderLeftColor: theme('colors.gray.400'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
