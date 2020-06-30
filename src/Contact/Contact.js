import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import logo_dark from "../assets/logo_dark.png";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  heading: {
    fontSize: "18px",
    lineHeight: "25px",
    color: "#353535",
    fontWeight: 800
  },
  smallFont: {
    fontSize: "11px",
    lineHeight: "14px",
    color: "#353535",
    letterSpacing: "0.03em"
  },
  extraText: {
    color: "#7E7E7E",
    lineHeight: "15px",
    fontSize: "11px",
    letterSpacing: "0.03em"
  }
}));

const components = [
  {
    title: "Company",
    text:
      "We are a Gurgaon/Delhi based Marketing Agency powered by top-vetted experts around the globe"
  },
  {
    title: "About",
    text:
      "We are a Gurgaon/Delhi based Marketing Agency powered by top-vetted experts around the globe"
  },
  {
    title: "Services",
    text:
      "We are a Gurgaon/Delhi based Marketing Agency powered by top-vetted experts around the globe"
  },
  {
    title: "Google",
    text:
      "We are a Gurgaon/Delhi based Marketing Agency powered by top-vetted experts around the globe"
  },
  {
    title: "Keep in touch",
    text:
      "We are a Gurgaon/Delhi based Marketing Agency powered by top-vetted experts around the globe"
  }
];

function Contact() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={3} style={{ textAlign: "center" }}>
        <img src={logo_dark} alt="" />
      </Grid>
      <Grid item xs={8}>
        <Grid container justify="center" alignItems="center">
          {components.map((item, index) => (
            <Grid key={index} item xs>
              <Typography className={classes.heading}>{item.title}</Typography>
              <Typography
                style={{ marginTop: "29px" }}
                className={classes.smallFont}
              >
                {item.text}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          border: "1px solid #E9E9E9",
          marginTop: "30px",
          padding: "30px"
        }}
      >
        <Grid container>
          <Grid item xs={4}>
            <Box ml={2}>
              <Typography className={classes.extraText}>
                terms of services{" "}
                <span style={{ marginLeft: "20px" }}>privacy policy</span>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
