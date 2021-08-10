module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#ec4899",
        secondary: "#363472",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
