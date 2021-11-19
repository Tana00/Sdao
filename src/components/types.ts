import { ReactNode } from "react";
import { ButtonProps } from "@mui/material";

export interface BaseCardProps {
  title?: string;
  content?: any[];
  expand?: boolean;
  tokenImg?: any[];
}

export interface CustomButtonProps extends ButtonProps {
  buttonType?: "primary" | "secondary" | "outlined" | "text";
}

export interface navigationProps {
  children?: JSX.Element | ReactNode;
  open?: boolean;
  handleDrawerClose?: () => void;
  width?: string;
}

export interface AppBarProps {
  title?: string;
  handleDrawerToggle?: () => void;
  window?: () => Window;
  backgroundColor?: string;
  color?: string;
  height?: string;
  width?: string;
  children?: any;
  boxShadow?: string;
}
