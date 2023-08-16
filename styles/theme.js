import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          fontSize: 24,
          fontFamily: "'Mukta Vaani', sans-serif",
          textDecoration: "none",
        },
      },
    },
  },
  breakpoints: {
    values: {
      sm: 700,
      md: 900,
      lg: 1280,
    },
  },
});

export default theme;
