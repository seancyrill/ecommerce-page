/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        Orange: 'hsl(var(--Orange) / <alpha-value>)',
        'Pale-orange': 'hsl(var(--Pale-orange) / <alpha-value>)',
        'Very-dark-blue': 'hsl(var(--Very-dark-blue) / <alpha-value>)',
        'Dark-grayish-blue': 'hsl(var(--Dark-grayish-blue) / <alpha-value>)',
        'Grayish-blue': 'hsl(var(--Grayish-blue) / <alpha-value>)',
        'Light-grayish-blue': 'hsl(var(--Light-grayish-blue) / <alpha-value>)',
        White: 'hsl(var(--White) / <alpha-value>)',
        Black: 'hsl(var(--Black) / <alpha-value>)',
      },
      fontFamily: {
        body: ['Kumbh Sans']
      },
    },
  },
  plugins: [],
}

