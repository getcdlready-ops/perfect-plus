/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // For your pages in the root `pages` folder
    "./src/**/*.{js,ts,jsx,tsx}", // For components and other files inside your `src` folder
    // If you have any other specific files outside these, add them here
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xxxs: "290px",
        xxs: "319px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1270px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
