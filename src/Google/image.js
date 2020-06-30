import React from "react";
import { Grid } from "@material-ui/core";

function image({ image, imageWidth, imageHeight }) {
  return (
    <Grid container>
      <Grid
        xs={12}
        item
        style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
      >
        <img src={image} style={{ width: "100%", height: "100%" }} alt="" />
      </Grid>
    </Grid>
  );
}

export default image;
