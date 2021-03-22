module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "66%",
      xl: " 36rem",
      "3xl": "56rem",
      md: "28rem;",
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
