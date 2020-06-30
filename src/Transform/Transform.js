import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import work from "../assets/work.png";
import badge from "../assets/badge.png";
import board from "../assets/board.png";
import headphone from "../assets/headphone.png";
import cup from "../assets/cup.png";
import Award from "./Award";

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
    fontSize: "12px",
    lineHeight: "25px",
    color: "#000000"
  },
  extraText: {
    color: "#5AB5F9",
    lineHeight: "19px",
    fontSize: "14px"
  }
}));

function Transform() {
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
          How will working with us transform your business?{" "}
        </Typography>
        <Typography
          style={{ width: "826px", marginTop: "20px" }}
          className={classes.smallFont}
        >
          UNCOVER THE SECRETS TO OUTRANK YOUR COMPETITORS
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box mt={4}>
          <Grid container>
            <Grid item xs={6}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Award
                    image={badge}
                    text="These friendly and knowledheableable folks are availabble via email and chat."
                    heading="Expertise"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Award
                    image={board}
                    text="These friendly and knowledheableable folks are availabble via email and chat."
                    heading="Transparent Reporting"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Award
                    image={headphone}
                    text="These friendly and knowledheableable folks are availabble via email and chat."
                    heading="1-1 Manager"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Award
                    image={cup}
                    text="These friendly and knowledheableable folks are availabble via email and chat."
                    heading="Guarantee Results"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid container style={{ width: "435px", height: "350px" }}>
                <img src={work} alt="" />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Transform;
