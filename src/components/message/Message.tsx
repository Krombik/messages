import { Typography } from "@material-ui/core";
import Avatar from "components/styled/Avatar";
import Grid from "components/styled/Grid";
import Paper from "components/styled/Paper";
import React, { FC } from "react";
import "styled-components/macro";

type Props = {
  name: string;
  date: string;
  text: string;
  avatar: string;
};

const Message: FC<Props> = ({ name, date, text, avatar }) => (
  <Grid container wrap="nowrap" spacingBreakpoints={{ xs: { t: 0, l: 2 } }}>
    <Grid item xs="auto">
      <Avatar size={{ xs: 12 }} src={avatar}>
        {name
          .split(" ")
          .map((item) => item[0])
          .join("")}
      </Avatar>
    </Grid>
    <Grid item xs="auto">
      <Paper gutterBreakpoints={{ xs: { t: 3, b: 5, l: 4 } }}>
        <Grid
          container
          direction="column"
          spacingBreakpoints={{ xs: { t: 3, l: 0 } }}
        >
          <Grid item container justify="space-between">
            <Grid item>
              <Typography variant="h4">{name}</Typography>
            </Grid>
            <Grid item>
              <Typography>{date}</Typography>
            </Grid>
          </Grid>
          <Grid item>
            {text.split("\n").map((item, index) => (
              <Typography key={index}>{item}</Typography>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  </Grid>
);

export default Message;
