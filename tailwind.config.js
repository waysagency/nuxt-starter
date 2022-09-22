const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./storyblok/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  safelist: [
    // Container
    "container",
    "container--wide",
    // Color scheme
    "color-scheme",
    "color-scheme--primary",
    "color-scheme--accent",
    // Button
    "btn",
    "btn--primary",
    "btn--accent",
    "btn--outline",
    // Text align
    "text-left",
    "text-center",
    "text-right",
    // Swiper
    "swiper-button-disabled",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      currentColor: "currentColor",

      primary: {
        DEFAULT: "#223343",
        5: "#F4F5F6",
        "alpha-40": "#A0A7AE",
      },
      accent: {
        DEFAULT: "#00B2CD",
      },

      black: "#000000",
      white: "#FFFFFF",
    },
    container: {
      center: true,
      screens: {
        DEFAULT: "1440px",
      },
    },

    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    extend: {
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addUtilities, addVariant }) {
      addUtilities({
        ".clip-path-polygon-1": {
          "clip-path": "polygon(0% 5%, 100% 0%, 100% 100%, 0% 95%)",
        },
        ".clip-path-polygon-2": {
          "clip-path": "polygon(0% 0%, 100% 5%, 100% 95%, 0% 100%);",
        },
      });
      addVariant("states", ["&:hover", "&:focus", "&:active"]);
      addVariant("group-states", [
        ":merge(.group):hover &",
        ":merge(.group):focus &",
        ":merge(.group):active &",
      ]);
    }),
  ],
};
