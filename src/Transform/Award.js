import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  heading: {
    fontSize: "18px",
    lineHeight: "22px",
    color: "#2683E3"
  },
  smallFont: {
    fontSize: "12px",
    lineHeight: "16px",
    color: "#556B82"
  },
  extraText: {
    color: "#5AB5F9",
    lineHeight: "19px",
    fontSize: "14px"
  }
}));

function Award({ image, text, heading }) {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="flex-end">
      <Grid item xs={8}>
        <Grid container>
          <Grid item xs={3}>
            <Grid container justify="center" alignItems="center">
              <img src={image} alt="" />
            </Grid>
          </Grid>
          <Grid item xs={9}>
            <Typography className={classes.heading}>{heading}</Typography>
            <Typography className={classes.smallFont}>{text}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Award;
