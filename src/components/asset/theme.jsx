import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#B1CCDD",
    },
    secondary: {
      main: "#1E2233",
    },
    background: {
      default: "#f8f8f8",
    },
    text: {
      primary: "#3C4B62",
      secondary: "#F1F8F5",
    },
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    xs: 460,
    sm: 896,
    md: 1024,
  },
  typography: {
    useNextVariants: true, // Migration to typography v2
    htmlFontSize: 10,
    fontSize: 12,
    fontWeightLight: 200,
    fontWeightRegular: 300,
    fontWeightBold: 500,
    fontFamily: "'Fira Sans', sans-serif",
    letterSpacing: "3rem",
    h4: {
      fontWeight: 500,
    },
    h5: {
      letterSpacing: "0.3rem",
    },
    h6: {
      letterSpacing: "0.2rem",
      fontWeight: 300,
      textTransform: "uppercase",
    },
    button: {
      letterSpacing: "0.1rem",
      fontWeight: 300,
      fontSize: "1rem",
    },
    subtitle1: {
      fontWeight: 500,
      letterSpacing: "0.1rem",
    },

    body1: {
      letterSpacing: "0.1rem",
      fontSize: "1rem",
      lineHeight: "2rem",
    },
    body2: {
      letterSpacing: "0.1rem",
      fontSize: "1rem",
      fontWeight: 300,
    },
  },

  overrides: {
    MuiTypography: {
      root: {
        textTransform: "none",
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
