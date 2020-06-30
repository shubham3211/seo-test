import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import gaurentee from "../assets/gaurentee.png";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  heading: {
    fontSize: "36px",
    lineHeight: "49px",
    color: "#000000"
  },
  smallFont: {
    fontSize: "16px",
    lineHeight: "25px",
    color: "#000000"
  },
  extraText: {
    color: "#5AB5F9",
    lineHeight: "19px",
    fontSize: "14px"
  }
}));

function Success() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Typography style={{ width: "826px" }} className={classes.heading}>
          Our 90-day guarantee is just the beginning.
        </Typography>
        <Typography
          style={{ width: "826px", marginTop: "20px" }}
          className={classes.smallFont}
        >
          Backed by a reputation of success and guaranteed services that drive
          results, we will deliver the results you want. With a team of expert
          technical specialists behind the wheel, we offer our 90-day guarantee,
          utilizing the start of the art SEO strategies delivering tangible
          results your business needs.
        </Typography>
        <img
          src={gaurentee}
          alt="img"
          width="150"
          height="137"
          style={{ marginTop: "48px" }}
        />
      </Grid>
    </Grid>
  );
}

export default Success;
