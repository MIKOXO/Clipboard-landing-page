/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary
        Green500: "hsl(171, 66%, 44%)",
        Blue100: "hsl(233, 100%, 69%)",

        // Neutral
        Gray700: "hsl(210, 10%, 33%)",
        Gray500: "hsl(201, 11%, 66%)",
      },

      // Blue and Green box shadows for button
      boxShadow: {
        Green500: "0 10px 20px -10px hsl(171, 66%, 44%)",
        Blue100: "0 10px 20px -10px hsl(233, 100%, 69%)",
      },
    },
  },
  plugins: [],
};
