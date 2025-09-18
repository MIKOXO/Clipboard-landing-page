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
    },
  },
  plugins: [],
};
