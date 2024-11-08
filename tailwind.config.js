/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#fff',
            a: {
              color: '#136998',
              '&:hover': {
                color: '#1b2c4c',
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
}