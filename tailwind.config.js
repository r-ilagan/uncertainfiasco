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
              color: '#084C61',
              '&:hover': { textDecoration: 'none' },
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
