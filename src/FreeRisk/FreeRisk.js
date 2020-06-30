import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Typography } from "@material-ui/core";
import wave from "../assets/wave.png";
import mask from "../assets/mask1.png";
import maskSmall from "../assets/Mask-small.png";
import CustomButton from "../Components/CustomButton";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  heading: {
    fontSize: "36px",
    lineHeight: "49px",
    color: "#FFFFFF"
  },
  smallFont: {
    fontSize: "14px",
    lineHeight: "19px",
    color: "#FFFFFF",
    width: "348px"
  },
  extraText: {
    color: "#5AB5F9",
    lineHeight: "19px",
    fontSize: "14px"
  }
}));

function FreeRisk() {
  const classes = useStyles();
  return (
    <Grid
      container
      style={{
        background: `url(${wave})`,
        backgroundRepeat: "no-repeat",
        height: "458px"
      }}
    >
      <Grid
        item
        xs={12}
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "151px"
        }}
      >
        <Typography style={{ width: "826px" }} className={classes.heading}>
          Get your Risk-Free Audit Today
        </Typography>
        <Typography
          style={{ width: "826px", marginTop: "20px" }}
          className={classes.smallFont}
        >
          UNCOVER THE SECRETS TO OUTRANK YOUR COMPETITORS
        </Typography>
        <span style={{marginTop: "20px"}}>
          <CustomButton text="Get Your Free Audit" />
        </span>
      </Grid>
      <Grid container style={{ position: "relative", top: "-30px" }}>
        <Grid item xs={12}>
          <img src={mask} style={{ width: "100%" }} alt="" />
        </Grid>
      </Grid>
      <Grid container style={{ position: "relative", top: "-330px" }}>
        <Grid item xs={12}>
          <img src={maskSmall} style={{ width: "100%" }} alt="" />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FreeRisk;
