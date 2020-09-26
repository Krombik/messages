import { createGlobalStyle } from "styled-components";
import { ThemeProps } from "types";
import makeResponsiveVariables from "utils/makeResponsiveVariables";
import spacingFunc from "utils/spacingFunc";

const responsiveItemHeight = makeResponsiveVariables({
  itemHeight: {
    xs: 7,
    func: spacingFunc,
  },
});

const responsiveTypographyVariables = makeResponsiveVariables({
  h2: {
    xs: "25px",
  },
  h3: {
    xs: "18px",
  },
  h4: {
    xs: "14px",
  },
  body1: {
    xs: "14px",
  },
  body2: {
    xs: "12px",
  },
  button: {
    xs: "12px",
  },
});

const GlobalStyle = createGlobalStyle`
  body {
    scroll-behavior: smooth;
    min-width: 320px; 
    -webkit-overflow-scrolling: touch;
    width: 100vw;
  }
  :root {
    ${responsiveTypographyVariables}
    ${responsiveItemHeight}
    --primary: ${({ theme }: ThemeProps) => theme.palette.primary.main};
    --grey: #F8F8F8;
    --darkGrey: #E8E8E8;
    --white: #fff;
    --hColor: #284558;
    --textColor: #797979;
    --yellow: #FBC74A;
  }
`;

export default GlobalStyle;
