/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00a3c8",
        headings: "#004861",
        "primary-hover": "#0056b3",
      },
      backgroundImage: {
        footer: `url(/images/footer-bg.jpg)`,
      },
    },
  },
  plugins: [],
};
