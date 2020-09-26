import styled from "styled-components/macro";
import makeResponsiveVariables from "utils/makeResponsiveVariables";
import spacingFunc from "utils/spacingFunc";
import { SpacingBreakpoints } from "./Container";

type ResponsiveGutterProps = {
  gutterBreakpoints: SpacingBreakpoints;
};

const Paper = styled.div<ResponsiveGutterProps>`
  ${({ gutterBreakpoints }) =>
    makeResponsiveVariables({
      paperGutter: {
        ...gutterBreakpoints,
        func: {
          t: spacingFunc,
          l: spacingFunc,
          b: spacingFunc,
          r: spacingFunc,
        },
      },
    })}
  padding: var(--paperGutter-t) var(--paperGutter-l) var(--paperGutter-b, var(--paperGutter-t)) var(--paperGutter-r, var(--paperGutter-l));
`;

export default Paper;
