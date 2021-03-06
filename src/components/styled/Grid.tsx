import React from "react";
import MuiGrid, { GridProps as MuiGridProps } from "@material-ui/core/Grid";
import styled, { css } from "styled-components/macro";
import makeResponsiveVariables from "utils/makeResponsiveVariables";
import spacingFunc from "utils/spacingFunc";
import { BreakpointObj } from "types";

export type ResponsiveSpacingProps = {
  spacingBreakpoints?: BreakpointObj<{ t: number; l: number }>;
};

export type GridProps<C extends React.ElementType> = ResponsiveSpacingProps &
  MuiGridProps<C, { component?: C }>;

const _Grid = <C extends React.ElementType>({
  spacingBreakpoints,
  ...props
}: GridProps<C>) => <MuiGrid {...props} />;

const containerMixin = css`
  ${({ spacingBreakpoints }: ResponsiveSpacingProps) =>
    makeResponsiveVariables({
      gridSpacing: {
        ...spacingBreakpoints,
        func: { t: spacingFunc, l: spacingFunc },
      },
    })}
  margin: calc(0px - var(--gridSpacing-t) / 2)
    calc(0px - var(--gridSpacing-l) / 2);
  width: calc(100% + var(--gridSpacing-l));
  > .MuiGrid-item {
    padding: calc(var(--gridSpacing-t) / 2) calc(var(--gridSpacing-l) / 2);
  }
`;

const Grid = styled(_Grid)`
  ${({ spacingBreakpoints, container }) =>
    container && spacingBreakpoints && containerMixin}
`;

export default Grid as typeof _Grid;
