import React from "react";
import man from "../../assets/man.png";
import { Grid } from "@material-ui/core";

function WorkingMan() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <img
          src={man}
          alt=""
          style={{
            width: "283px",
            height: "372px",
            position: "absolute",
            right: "265px",
            zIndex: "20"
          }}
        />
      </Grid>
    </Grid>
  );
}

export default WorkingMan;
