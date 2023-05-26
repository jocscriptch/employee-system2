/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        josefin_sans: ['var(--font-josefin_sans)'],
      },
      colors: {
        dark: "#353535",
        light: "#FFFFFF",
        primary: "#284B63",
        secondary: "#D9D9D9",
        third: "#3C6E71",
      },
    },
  },
  plugins: [],
}
