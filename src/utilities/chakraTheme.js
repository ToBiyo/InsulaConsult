import { extendTheme } from "@chakra-ui/react";
// 7
import "@fontsource-variable/exo-2";
import "@fontsource/alegreya-sans";

const theme = {
  colors: {
    primary: "#012d5e",
    secondary: "#F07526",
  },
  fonts: {
    title: "'Exo 2 Variable', sans-serif",
    text: "'Alegreya Sans', sans-serif",
  },
};

export default extendTheme(theme);
