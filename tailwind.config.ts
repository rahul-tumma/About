import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const { colors: defaultColors } = require("tailwindcss/defaultTheme");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        custom: "#5918df",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
