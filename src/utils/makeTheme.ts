import { createMuiTheme } from "@material-ui/core/styles";

const makeTheme = () =>
  createMuiTheme({
    spacing: (factor) => factor * 5,
    typography: {
      fontFamily: "OpenSans",
      h4: {
        fontWeight: "bold",
        lineHeight: 1.35,
        fontSize: "var(--body1)",
      },
      h3: {
        fontWeight: "bold",
        lineHeight: 1.3333333,
        fontSize: "var(--h3)",
      },
      h2: {
        fontWeight: "bold",
        fontSize: "var(--h2)",
        lineHeight: 1.36,
      },
      body1: {
        fontSize: "var(--body1)",
        lineHeight: 1.35,
      },
      body2: {
        fontSize: "var(--body2)",
        lineHeight: 1.41,
      },
      button: {
        fontSize: "var(--button)",
        lineHeight: 1.41,
        fontWeight: "bold",
      },
    },
    shape: {
      borderRadius: 5,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1720,
      },
    },
    palette: {
      primary: {
        main: "#4FB4B3",
      },
      background: { default: "var(--grey)" },
      text: { primary: "#284558", secondary: "#797979" },
    },
    overrides: {
      MuiIconButton: {
        root: {
          padding: 0,
          height: "var(--itemHeight)",
          width: "var(--itemHeight)",
        },
      },
      MuiButton: {
        root: {
          textTransform: "initial",
          height: "var(--itemHeight)",
          "& svg": { fill: "currentColor" },
        },
        contained: {
          boxShadow: "none",
        },
        containedPrimary: {
          color: "var(--white)",
        },
      },
    },
  });

export default makeTheme;
