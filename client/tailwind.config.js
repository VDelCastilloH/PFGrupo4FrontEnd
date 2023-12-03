const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F0A4D",
        secondary: "#5825CC",
        accent: "#FB923C",
        // Agrega tus colores personalizados con nombres significativos aquí
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            foreground: "#ECEDEE",
            primary: {
              foreground: "#ECEDEE",
              DEFAULT: "#1F0A4D",
            },
            focus: "#BEF264",
          },
        },
      },
    }),
  ],
};
