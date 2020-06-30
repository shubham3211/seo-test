import React from "react";
import Image from "./image";
import Info from "./info";
import { Grid } from "@material-ui/core";

function GoogleInfo({ image, heading, text, change = false }) {
  return (
    <Grid container>
      <Grid item xs={6} style={{ paddingLeft: "170px" }}>
        {!change ? (
          <Image image={image} />
        ) : (
          <Info heading={heading} text={text} />
        )}
      </Grid>
      <Grid item xs={6} style={{ paddingLeft: "110px" }}>
        {change ? (
          <Image image={image} />
        ) : (
          <Info heading={heading} text={text} />
        )}
      </Grid>
    </Grid>
  );
}

export default GoogleInfo;
