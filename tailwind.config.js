const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-var1": "var(--bg-var1)",
        accent: {
          600: "var(--accent-600)",
          500: "var(--accent-500)",
          400: "var(--accent-400)",
          300: "var(--accent-300)",
          200: "var(--accent-200)",
        },
        "text-main": {
          600: "var(--text-main-600)",
          500: "var(--text-main-500)",
          400: "var(--text-main-400)",
          300: "var(--text-main-300)",
          200: "var(--text-main-200)",
        },
        main: {
          600: "var(--main-600)",
          500: "var(--main-500)",
          400: "var(--main-400)",
          300: "var(--main-300)",
          200: "var(--main-200)",
        },
      },
      boxShadow: {
        DEFAULT: "0px 3px 6px 0px rgb(1, 4, 9, 0.1)",
        md: "0px 3px 6px 0px rgb(1, 4, 9, 0.2)",
        lg: "0px 3px 6px 0px rgb(1, 4, 9, 0.4)",
        xl: "0px 3px 6px 0px rgb(1, 4, 9, 0.6)",
        both: "0px 3px 6px 0px rgb(1, 4, 9, 0.1), 0px -3px 6px 0px rgb(1, 4, 9, 0.1)",
        bothMd: "0px 3px 6px 0px rgb(1, 4, 9, 0.2), 0px -3px 6px 0px rgb(1, 4, 9, 0.2)",
        bothLg: "0px 3px 6px 0px rgb(1, 4, 9, 0.4), 0px -3px 6px 0px rgb(1, 4, 9, 0.4)",
        bothXl: "0px 3px 6px 0px rgb(1, 4, 9, 0.6), 0px -3px 6px 0px rgb(1, 4, 9, 0.6)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opactiy: 1 },
        },
        scaleIn: {
          "0%": {
            opacity: 0,
            transform: "scale(0.9)",
          },
          "50%": {
            opacity: 0.3,
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
        slideInBottom: {
          "0%": {
            opacity: 0,
            transform: "translateY(10%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0%)",
          },
        },
        slideInLeft: {
          "0%": {
            transform: "translateX(-10%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: "1",
          },
        },
        slideInTop: {
          "0%": {
            transform: "translateY(-10%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: "1",
          },
        },
        slideInRight: {
          "0%": {
            transform: "translateX(10%)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: "1",
          },
        },
      },
      fontSize: {
        tiny: ".85rem",
        sm: ".9rem",
        xs: "1rem",
        md: "1.2rem",
        base: "1.4rem",
        lg: "1.5rem",
        xl: "1.5rem",
        "2xl": "1.75rem",
        "3xl": "1.9rem",
        "4xl": "2.5rem",
        "5xl": "3.5rem",
        "6xl": "4.5rem",
        "7xl": "5.5rem",
      },
      animation: {
        fadeIn: "fadeIn .5s ease-in-out",
        scaleIn: "scaleIn .35s ease-in-out",
        slideInBottom: "slideInBottom .5s ease-in-out",
        slideInLeft: "slideInLeft .35s ease",
        slideInRight: "slideInRight .35s ease",
        slideInTop: "slideInTop .35s ease",
      },
    },
  },
};
