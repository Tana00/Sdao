import React from "react";
import { AppBar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { CustomButton } from "../CustomButton";
import { AppBarProps } from "../types";

const useStyles = makeStyles(() => ({
  title: {
    color: "#212121",
  },
}));

function ElevationScroll(props: AppBarProps) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function CustomAppBar({
  title,
  handleDrawerToggle,
  backgroundColor = "#fff",
  color = "#212121",
  width = "280px",
  height = "80px",
  boxShadow,
  window,
  children,
}: AppBarProps) {
  const classes = useStyles();
  return (
    <Box>
      <CssBaseline />
      <ElevationScroll>
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${width})` },
            ml: { sm: `${width}` },
          }}
          style={{
            backgroundColor,
            color,
            height,
            display: "flex",
            justifyContent: "center",
            boxShadow,
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1 }}
              className={classes.title}
            >
              {title}
            </Typography>
            <CustomButton
              onClick={() => console.log("clicked")}
              buttonType="secondary"
            >
              Connect Wallet
            </CustomButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </Box>
  );
}
