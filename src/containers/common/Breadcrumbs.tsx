import React, { FC, memo } from "react";
import MuiLink from "@material-ui/core/Link";
import "styled-components/macro";
import MuiBreadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";

const Breadcrumbs: FC = memo(() => {
  const breadcrumbs = [{ url: "/", text: "Messages" }];
  if (breadcrumbs.length === 0) return null;
  return (
    <MuiBreadcrumbs
      css={`
        height: var(--itemHeight);
        display: flex;
        align-items: center;
        color: var(--white);
        &::before {
          content: "";
          position: absolute;
          display: block;
          left: 0;
          z-index: -1;
          width: 100vw;
          height: inherit;
          background: var(--primary);
        }
        svg {
          fill: currentColor;
        }
      `}
      separator={
        <svg width="5.387" height="10" viewBox="0 0 5.387 10">
          <g transform="translate(-102.297 0)">
            <g transform="translate(102.297 0)">
              <path
                d="M107.571,4.726,102.954.108a.385.385,0,0,0-.544.544L106.755,5l-4.346,4.346a.385.385,0,1,0,.544.544l4.618-4.618A.385.385,0,0,0,107.571,4.726Z"
                transform="translate(-102.297 0)"
              />
            </g>
          </g>
        </svg>
      }
    >
      <MuiLink color="inherit" href="/">
        Home
      </MuiLink>
      {breadcrumbs.slice(0, breadcrumbs.length - 1).map((item, index) => (
        <MuiLink color="inherit" href={item.url} key={index}>
          {item.text}
        </MuiLink>
      ))}
      <Typography variant="h4">
        {breadcrumbs[breadcrumbs.length - 1].text}
      </Typography>
    </MuiBreadcrumbs>
  );
});

export default Breadcrumbs;
