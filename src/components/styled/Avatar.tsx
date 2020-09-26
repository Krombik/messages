import styled from "styled-components/macro";
import MuiAvatar, { AvatarProps } from "@material-ui/core/Avatar";
import React, { FC } from "react";
import { BreakpointObj } from "types";
import makeResponsiveVariables from "utils/makeResponsiveVariables";
import spacingFunc from "utils/spacingFunc";

type Props = { size?: BreakpointObj<number> };

const _Avatar: FC<AvatarProps & Props> = ({ size, ...props }) => (
  <MuiAvatar {...props} />
);

const Avatar = styled(_Avatar)`
  ${({ size }) =>
    size
      ? makeResponsiveVariables({
          avatarSize: {
            ...size,
            func: spacingFunc,
          },
        })
      : "--avatarSize: var(--itemHeight);"}
  height: var(--avatarSize);
  width: var(--avatarSize);
  font-size: calc(var(--avatarSize) * 0.4);
  background: var(--yellow);
`;

export default Avatar;
