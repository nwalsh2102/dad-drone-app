// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        // Override the "sans" key (used by e.g. `font-sans`)
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        // —or— define your own key
        // custom: ["MyCustomFont", "sans-serif"],
      },
    },
  },
  plugins: [],
};
