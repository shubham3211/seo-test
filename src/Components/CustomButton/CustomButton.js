import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

function CustomButton({
  text,
  background = "#FFFFFF",
  color = "#3082EA",
  width = "190px",
  height = "40px"
}) {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      style={{
        width,
        height,
        background,
        color,
        borderRadius: "29px"
      }}
    >
      {text}
    </Button>
  );
}

export default CustomButton;
