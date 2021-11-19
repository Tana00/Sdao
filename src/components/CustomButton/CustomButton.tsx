import React from "react";
import { Button } from "@mui/material";
import { CustomButtonProps } from "../types";
import { customButtonTypes } from "../constants";

/** JSX Element for all button type */
const CustomButton = ({
  children,
  buttonType = "primary",
  ...rest
}: CustomButtonProps): JSX.Element => {
  // Setting buttonTypeConfig for variant and color based on button type
  const buttonTypeConfig = customButtonTypes?.[buttonType] as {
    variant?: "text" | "outlined" | "contained";
    color?: "primary" | "secondary";
  };

  return (
    <Button {...rest} {...buttonTypeConfig} disableElevation>
      {children}
    </Button>
  );
};

export default CustomButton;
