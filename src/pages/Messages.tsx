import { GridProps, IconButton, Typography } from "@material-ui/core";
import Message from "components/message/Message";
import Avatar from "components/styled/Avatar";
import Container from "components/styled/Container";
import Grid from "components/styled/Grid";
import Input from "components/styled/Input";
import Paper from "components/styled/Paper";
import React, { FC, memo } from "react";
import "styled-components/macro";
import styled, { css } from "styled-components/macro";
import { ThemeProps } from "types";
import InputAdornment from "@material-ui/core/InputAdornment";

const _Grid: FC<GridProps & { currentUser: boolean }> = ({
  currentUser,
  ...props
}) => <Grid {...props} />;

const notCurrentUserMixin = css`
  margin-left: auto;
  > div {
    flex-direction: row-reverse;
  }
`;

const MessageWrapper = styled(_Grid)`
  ${({ currentUser }) => !currentUser && notCurrentUserMixin}
`;

const Messages: FC = memo(() => {
  const messages = [
    {
      avatar: "",
      name: "Ahmed Mohammed",
      userId: 0,
      date: "1 hours ago",
      text: `Lorem ipsum dolor sit amet, consect adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit.`,
    },
    {
      avatar: "",
      name: "Mohammed Ibrahim",
      userId: 1,
      date: "1 hours ago",
      text: `Lorem ipsum dolor sit amet, consect adipiscing elit.`,
    },
  ];
  const currentUser = 0;
  return (
    <Grid container>
      <Grid item xs={9}>
        <Container
          gutterBreakpoints={{ xs: { t: 6, b: 10 } }}
          css={`
            padding-left: 0;
            height: calc(100vh - var(--headerHeight) - var(--itemHeight));
          `}
        >
          <Grid container spacingBreakpoints={{ xs: { t: 5, l: 0 } }}>
            <Grid item xs={12}>
              <Paper gutterBreakpoints={{ xs: { t: 5, b: 6, l: 8 } }}>
                <Grid
                  container
                  alignItems="center"
                  spacingBreakpoints={{ xs: { l: 6, t: 0 } }}
                >
                  <Grid item>
                    <Avatar size={{ xs: 15 }}>MI</Avatar>
                  </Grid>
                  <Grid item>
                    <Typography variant="h2">Mohammed Ibrahim</Typography>
                    <Typography variant="h3">Administrator</Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item container spacingBreakpoints={{ xs: { t: 12, l: 0 } }}>
              {messages.map((item, index) => (
                <MessageWrapper
                  item
                  xs={8}
                  key={index}
                  currentUser={item.userId === currentUser}
                >
                  <Message
                    avatar={item.avatar}
                    name={item.name}
                    date={item.date}
                    text={item.text}
                  />
                </MessageWrapper>
              ))}
            </Grid>
            <Grid item xs={12}>
              <Input
                fullWidth
                placeholder="Type message"
                css={`
                  height: ${({ theme }: ThemeProps) => theme.spacing(12)}px;
                `}
                InputProps={{
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      css={`
                        margin-left: ${({ theme }: ThemeProps) =>
                          theme.spacing(4)}px;
                        padding-right: ${({ theme }: ThemeProps) =>
                          theme.spacing(4)}px;
                      `}
                    >
                      <IconButton>
                        <svg
                          width="20.934"
                          height="20.934"
                          viewBox="0 0 20.934 20.934"
                        >
                          <path d="M15.332,8.995a.818.818,0,0,1-.818-.818.409.409,0,1,0-.818,0,.818.818,0,1,1-1.635,0,2.044,2.044,0,1,1,4.089,0A.818.818,0,0,1,15.332,8.995ZM8.913,8.177a2.044,2.044,0,1,0-4.089,0,.818.818,0,1,0,1.635,0,.409.409,0,0,1,.818,0,.818.818,0,1,0,1.635,0Zm6.969,11.248a.818.818,0,1,0-.847-1.4A8.91,8.91,0,1,1,17.8,15.368a.818.818,0,1,0,1.36.909A10.461,10.461,0,0,0,3.066,3.066a10.468,10.468,0,0,0,12.817,16.36Zm-1.9-7.527a.816.816,0,0,0-.651.325,4.151,4.151,0,0,1-5.73,0,.817.817,0,1,0-1.215,1.084,5.75,5.75,0,0,0,8.161,0,.817.817,0,0,0-.564-1.409Z" />
                        </svg>
                      </IconButton>
                      <IconButton>
                        <svg
                          width="13.083"
                          height="20.933"
                          viewBox="0 0 13.083 20.933"
                        >
                          <path d="M6.542,20.933a6.549,6.549,0,0,0,6.542-6.542V5.233a.872.872,0,0,0-1.745,0v9.158a4.8,4.8,0,0,1-9.594,0V4.8a3.053,3.053,0,0,1,6.106,0v8.722a1.308,1.308,0,0,1-2.617,0V5.233a.872.872,0,0,0-1.745,0v8.286a3.053,3.053,0,0,0,6.106,0V4.8A4.8,4.8,0,0,0,0,4.8v9.594A6.549,6.549,0,0,0,6.542,20.933Zm0,0" />
                        </svg>
                      </IconButton>
                      <IconButton>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25.31"
                          height="21.944"
                          viewBox="0 0 25.31 21.944"
                        >
                          <g transform="translate(0.501 0.51)">
                            <path
                              d="M0,44.454A1.178,1.178,0,0,0,.845,45.52l8.9,2.692.327,6.137a.609.609,0,0,0,.411.535.558.558,0,0,0,.2.035.6.6,0,0,0,.456-.2l3.148-3.485,4.461,3.088a1.17,1.17,0,0,0,.674.213,1.2,1.2,0,0,0,1.165-.952l3.7-18.871a.606.606,0,0,0-.823-.679L.716,43.289A1.2,1.2,0,0,0,0,44.454Zm11.2,8.372L11,48.955l2.28,1.576Zm8.2.471-8.12-5.621L22.67,36.662Zm2.017-17.121L10.164,47.067,1.271,44.38Z"
                              transform="translate(0 -33.985)"
                            />
                          </g>
                        </svg>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
  );
});

export default Messages;
