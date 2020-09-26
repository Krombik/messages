import styled, { css } from "styled-components/macro";
import makeResponsiveVariables from "utils/makeResponsiveVariables";
import { ThemeProps, BreakpointObj } from "types";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import spacingFunc from "utils/spacingFunc";
import Input from "./Input";
import Paper from "./Paper";

export type SpacingBreakpoints = BreakpointObj<{
  t?: number;
  l?: number;
  b?: number;
  r?: number;
}>;

type ResponsiveGutterProps = {
  gutterBreakpoints: SpacingBreakpoints;
  maxWidth?: Breakpoint;
  lightBg?: boolean;
};

const darkMixin = css`
  background: var(--white);
  box-shadow: 0px 0px 6px #00000008;
  border: 1px solid var(--darkGrey);
  border-radius: 10px;
`;

const lightMixin = css`
  background: var(--grey);
  border-radius: 5px;
  border: none;
`;

const Container = styled.div<ResponsiveGutterProps>`
  ${({ maxWidth, theme }: ResponsiveGutterProps & ThemeProps) =>
    maxWidth &&
    `
      max-width: ${theme.breakpoints.values[maxWidth]}px;
      margin: auto;
    `}
  ${({ gutterBreakpoints }) =>
    makeResponsiveVariables({
      containerGutter: {
        ...gutterBreakpoints,
        func: {
          t: spacingFunc,
          l: spacingFunc,
          b: spacingFunc,
          r: spacingFunc,
        },
      },
    })}
  padding: var(--containerGutter-t) var(--containerGutter-l) var(--containerGutter-b, var(--containerGutter-t)) var(--containerGutter-r, var(--containerGutter-l));
  width: 100%;
  ${({ lightBg }) => lightBg && "background: var(--white);"}
  ${Input} .MuiInputBase-root, ${Paper} {
    ${({ lightBg }) => (lightBg ? lightMixin : darkMixin)}
  }
`;

export default Container;
