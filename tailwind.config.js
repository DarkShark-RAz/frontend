module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brandDefault: {
          dark: "#205ce9",
          light: "#4578ed",
        },
        brandWhite: {
          default: "#fffaff",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
