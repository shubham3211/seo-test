import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Header.css";
import logo from "../assets/logo.png";
import { Typography } from "@material-ui/core";
import CustomButton from "../Components/CustomButton";

function Header() {
  return (
    <Grid container className="header">
      <Grid item xs={12} className="header-comp">
        <img src={logo} alt="" style={{ width: "174px", height: "32px" }} />
        <Typography className="heading-color">Company</Typography>
        <Typography className="heading-color">Services</Typography>
        <Typography className="heading-color">Blog</Typography>
        <Typography className="heading-color">Case study</Typography>
        <Typography className="heading-color">Contact Us</Typography>
        <CustomButton text={'Schedule a call'} />
      </Grid>
    </Grid>
  );
}

export default Header;
