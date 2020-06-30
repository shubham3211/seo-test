import React from "react";
import "./index.css";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CustomButton from "../../Components/CustomButton";
import classnames from "classnames";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  fontSize: {
    fontSize: "48px"
  },
  fontWeight: {
    fontWeight: 600
  },
  fontColor: {
    color: "white"
  },
  smallFont: {
    fontSize: "15px"
  }
}));

function BussinessDetails() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          className={classnames(
            classes.fontSize,
            classes.fontWeight,
            classes.fontColor
          )}
        >
          SEO for
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          className={classnames(
            classes.fontSize,
            classes.fontWeight,
            classes.fontColor
          )}
        >
          every Business
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          className={classnames(classes.fontColor, classes.smallFont)}
          style={{ width: "464px" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          libero? Sequi placeat similique perferendis aliquid illo error quidem
          deleniti possimus expedita laboriosam modi, voluptates tempora rerum
          nemo ullam provident quas.
        </Typography>
      </Grid>
      <Grid item xs={12} style={{ marginTop: "32px" }}>
        <CustomButton text={"Let's make it happen"} />
      </Grid>
    </Grid>
  );
}

export default BussinessDetails;
