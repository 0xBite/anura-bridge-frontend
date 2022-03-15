import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  xxl: "96em",
});

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        background: "linear-gradient(184.76deg, #061D1E, #074223)",
        minHeight: "100vh",
      },
      colors: {
        black: "#16161D",
      },
      fonts: {
        standard: "Poppins, sans-serif",
        heading: "Poppins",
        body: "Poppins, sans-serif",
      },
      breakpoints,
    },
  },
});

export default theme;
