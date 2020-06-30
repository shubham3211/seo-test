import React from "react";
import "./Overview.css";
import Header from "../Header";
import { Grid } from "@material-ui/core";
import BussinessDetails from "./BussinessDetails";
import WorkingMan from "./WorkingMan";
import bg from "../assets/bg.png";
import maskSmall from "../assets/Mask-small.png";
import vector from "../assets/Vector 2.png";

function Overview() {
  return (
    <Grid container style={{ backgroundImage: `url(${bg})`, height: "703px" }}>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          paddingTop: "170px",
          paddingLeft: "187px",
          overflow: "hidden"
        }}
      >
        <Grid container>
          <Grid item xs={6}>
            <BussinessDetails />
          </Grid>
          <Grid item xs={6}>
            <WorkingMan />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        style={{ position: "relative", top: "-80px", zIndex: "1" }}
      >
        <Grid item xs={12}>
          <img src={maskSmall} style={{ width: "100%" }} alt="" />
        </Grid>
      </Grid>
      <Grid
        container
        style={{ position: "absolute", top: "500px", zIndex: "1" }}
      >
        <img src={vector} style={{ width: "100%" }} alt="" />
        <Grid item xs={12}></Grid>
      </Grid>
    </Grid>
  );
}

export default Overview;
