/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#edf7ff",
          100: "#d7ebff",
          200: "#b7ddff",
          300: "#86c9ff",
          400: "#4daaff",
          500: "#2486ff",
          600: "#0d64ff",
          700: "#064cef",
          800: "#0c3ec1",
          900: "#113997",
        },
        secondary: {
          50: "#faf5f9",
          100: "#f5eef3",
          200: "#eddde9",
          300: "#e0c1d7",
          400: "#c48cb3",
          500: "#b97ba5",
          600: "#a35f89",
          700: "#8a4c71",
          800: "#73415e",
          900: "#623951",
        },
      },
    },
    nightwind: {
      transitionDuration: "400ms",
      transitionClasses: "full",
      colorScale: {
        preset: "reduced",
      },
      colorClasses: [
        "gradient",
        "text",
        "bg",
        "border",
        "ring",
        "ring-offset",
        "divide",
        "placeholder",
      ],
      colors: {
        primary: {
          50: "primary.900",
          100: "primary.900",
          200: "primary.800",
          300: "primary.600",
          400: "primary.500",
          500: "primary.400",
          600: "primary.300",
          700: "primary.200",
          800: "primary.100",
          900: "primary.50",
        },
        white: "primary.700",
        black: "primary.200",
      },
    },
  },
  plugins: [require("nightwind")],
  variants: {
    nightwind: [
      "gradient",
      "text",
      "bg",
      "border",
      "ring",
      "ring-offset",
      "divide",
      "placeholder",
    ], // Add any Tailwind variant
  },
};
