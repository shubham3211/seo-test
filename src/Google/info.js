import React from "react";
import { Grid, Typography } from "@material-ui/core";
import classnames from "classnames";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  heading: {
    fontSize: "24px",
    lineHeight: "33px",
    color: "#353535",
    width: "275px"
  },
  smallFont: {
    fontSize: "14px",
    lineHeight: "19px",
    color: "#556B82",
    width: "348px"
  },
  extraText: {
    color: "#5AB5F9",
    lineHeight: "19px",
    fontSize: "14px"
  }
}));

function Info({heading, text}) {
  const classes = useStyles();

  return (
    <Grid container style={{ marginTop: "56px" }}>
      <Grid item xs={12}>
        <Typography className={classes.heading}>
          {heading}
        </Typography>
        <Typography className={classes.smallFont}>
          {text}
        </Typography>
        <Typography className={classes.extraText}>
          Learn More <span style={{ color: "black" }}>|</span> Schedule a Free
          Consultation
        </Typography>
      </Grid>
        
    </Grid>
  );
}

export default Info;
