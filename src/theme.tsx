import { extendTheme } from "@chakra-ui/react";
const fonts = { body: "Roboto, sans-serif" };

const theme = extendTheme({
  colors: {
    black: "#16161D",
    primary: { 100: "#BF94FF", 300: "#A970FF", 500: "#9147FF", 700: "#772CE8" },
    dark: {
      "100": "#464649",
      "200": "#3A3A3D",
      "300": "#1F1F23",
      "500": "#18181B",
      "700": "#0E0E10",
    },
  },
  fonts,
});

export default theme;
