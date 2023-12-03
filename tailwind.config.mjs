/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "custom-blue-50": "#f1f8fd",
        "custom-blue-100": "#dfeffa",
        "custom-blue-150": "#cee7f7",
        "custom-blue-200": "#c5e3f8",
        "custom-blue-300": "#9ed1f2",
        "custom-blue-400": "#70b7ea",
        "custom-blue-500": "#4e9ae3",
        "custom-blue-600": "#397fd7",
        "custom-blue-700": "#306ac5",
        "custom-blue-800": "#2d57a0",
        "custom-blue-900": "#294a7f",
        "custom-blue-950": "#1e3050",
      },
    },
    screens: {
      tablet: "950px",
      desktop: "1152px",
      ...defaultTheme.screens,
    },
  },
  darkMode: "class",
  plugins: [require("flowbite/plugin")],
};
