import React, { FC, memo } from "react";
import MuiLink from "@material-ui/core/Link";
import { SITE_NAME } from "utils/constant";
import { Link } from "react-router-dom";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import "styled-components/macro";
import Grid from "components/styled/Grid";
import makeResponsiveVariables from "utils/makeResponsiveVariables";
import spacingFunc from "utils/spacingFunc";
import Input from "components/styled/Input";
import Avatar from "components/styled/Avatar";

const responsiveHeight = makeResponsiveVariables(
  {
    headerHeight: {
      xs: 16,
      func: spacingFunc,
    },
  },
  true
);

const Header: FC = memo(() => (
  <Grid
    container
    justify="space-between"
    alignItems="center"
    component="header"
    css={`
      ${responsiveHeight}
      height: var(--headerHeight);
    `}
  >
    <Grid item>
      <MuiLink
        component={Link}
        to="/"
        color="inherit"
        underline="none"
        variant="h2"
      >
        {SITE_NAME}
      </MuiLink>
    </Grid>
    <Grid item>
      <Grid
        container
        alignItems="center"
        spacingBreakpoints={{ xs: { t: 0, l: 2 } }}
      >
        <Grid item>
          <Input
            placeholder="search"
            variant="filled"
            css={`
              max-width: 260px;
              width: 100vw;
            `}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <svg
                    width="15.323"
                    height="15.323"
                    viewBox="0 0 15.323 15.323"
                  >
                    <g transform="translate(0 0)">
                      <path
                        d="M15.136,14.236,10.778,9.879a6.077,6.077,0,1,0-.9.9l4.357,4.357a.638.638,0,1,0,.9-.9ZM6.065,10.857a4.788,4.788,0,1,1,4.788-4.788A4.793,4.793,0,0,1,6.065,10.857Z"
                        transform="translate(0 -0.003)"
                      />
                    </g>
                  </svg>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <IconButton>
            <svg width="17.333" height="13" viewBox="0 0 17.333 13">
              <path
                d="M15.708,59.882H1.625A1.627,1.627,0,0,0,0,61.507v9.75a1.627,1.627,0,0,0,1.625,1.625H15.708a1.627,1.627,0,0,0,1.625-1.625v-9.75A1.627,1.627,0,0,0,15.708,59.882Zm0,1.083a.538.538,0,0,1,.208.042L8.667,67.29,1.417,61.007a.539.539,0,0,1,.208-.042Zm0,10.833H1.625a.542.542,0,0,1-.542-.542V62.152l7.228,6.265a.542.542,0,0,0,.71,0l7.228-6.265v9.105A.542.542,0,0,1,15.708,71.8Z"
                transform="translate(0 -59.882)"
              />
            </svg>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton>
            <Badge color="secondary" variant="dot" overlap="circle">
              <svg width="15.424" height="18.28" viewBox="0 0 15.424 18.28">
                <g transform="translate(-40 0)">
                  <path
                    d="M54.852,14.281h-.609a3.3,3.3,0,0,1-.819-2.187V8a5.723,5.723,0,0,0-4.186-5.505,1.713,1.713,0,1,0-3.052,0A5.723,5.723,0,0,0,42,8v4.1a3.3,3.3,0,0,1-.819,2.187h-.609a.571.571,0,1,0,0,1.142H45.5a2.285,2.285,0,1,0,4.424,0h4.929a.571.571,0,1,0,0-1.142ZM47.141,1.714a.571.571,0,1,1,.571.571A.572.572,0,0,1,47.141,1.714Zm.571,15.424a1.144,1.144,0,0,1-.989-1.714H48.7A1.144,1.144,0,0,1,47.712,17.137Zm-5.139-2.856a4.447,4.447,0,0,0,.569-2.187V8a4.57,4.57,0,0,1,9.14,0v4.1a4.447,4.447,0,0,0,.569,2.187Z"
                    transform="translate(0)"
                  />
                </g>
              </svg>
            </Badge>
          </IconButton>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            startIcon={
              <svg width="15.67" height="18" viewBox="0 0 15.67 18">
                <g transform="translate(-86.71 -6.381)">
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    transform="translate(89.745 6.381)"
                  />
                  <path
                    d="M18.252,14H10.417A3.921,3.921,0,0,0,6.5,17.917v2.137a1.069,1.069,0,0,0,1.068,1.068H21.1a1.069,1.069,0,0,0,1.068-1.068V17.917A3.921,3.921,0,0,0,18.252,14Z"
                    transform="translate(80.21 3.259)"
                  />
                </g>
              </svg>
            }
          >
            My Dashboard
          </Button>
        </Grid>
        <Grid item>
          <Avatar>AM</Avatar>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
));

export default Header;
