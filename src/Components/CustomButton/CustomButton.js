import React from "react";
import Button from "@material-ui/core/Button";

function CustomButton({
  text,
  background = "#FFFFFF",
  color = "#3082EA",
  width = "190px",
  height = "40px"
}) {

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
