import React from "react";
import slide from "../assets/slide.png";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import Slider from "react-slick";
import { Grid, Typography } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeStyles } from "@material-ui/styles";
import union from "../assets/Union.png";
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
    color: "#353535",
    textAlign: "center"
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

function Carousel() {
  const classes = useStyles();
  var settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 500
  };
  return (
    <Grid
      container
      style={{
        backgroundImage: `url(${union})`,
        height: "762px"
      }}
    >
      <Grid item xs={12} style={{ position:"relative" , top:"100px" }}>
        <Typography className={classes.heading}>Our Success Stories</Typography>
      </Grid>
      <Grid item xs={12} style={{ overflow: "hidden" }}>
        <Slider {...settings}>
          <div>
            <img
              style={{ margin: "auto", width: "392px", height: "256px" }}
              src={slide}
            />
          </div>
          <div>
            <img
              src={slide1}
              style={{ margin: "auto", width: "392px", height: "256px" }}
            />
          </div>
          <div>
            <img
              src={slide1}
              style={{ margin: "auto", width: "392px", height: "256px" }}
            />
          </div>
          <div>
            <img
              src={slide2}
              style={{ margin: "auto", width: "392px", height: "256px" }}
            />
          </div>
        </Slider>
      </Grid>
      <Grid item xs={12} style={{ textAlign: "center", position:"relative" , top: "-100px" }}>
        <CustomButton
          text="See All Success Stories"
          background="#5AB5F9"
          color="#FFFFFF"
          width="233"
          height="43"
        />
      </Grid>
    </Grid>
  );
}

export default Carousel;
