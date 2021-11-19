import React, { useEffect } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  ButtonGroup,
  Chip,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { navigationProps } from "../types";
import { navigationMenu } from "../constants";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as LogoImg } from "../../static/svgs/logo.svg";
import { CustomButton } from "../CustomButton";
import theme from "../../config/theme";

// Style declaration
const useStyles = makeStyles({
  navLogo: {
    width: "80%",
    height: "auto",
    marginBottom: "0.5rem",
  },
  header_md: {
    height: "80px",
    padding: "1rem 0 1rem 1rem",
    // marginBottom: "3rem",
    // marginTop: "1rem",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "80px",
    padding: "1rem 0 1rem 1rem",
    marginBottom: "1rem",
  },
  footer: {
    fontSize: "0.8rem",
  },
  footer_sm: {
    position: "fixed",
    bottom: "3%",
    fontSize: "0.8rem",
  },
});

/** JSX Element for all navigation type */
const CustomSideBar = ({
  children,
  open,
  handleDrawerClose,
  width = "280px",
  ...rest
}: navigationProps): JSX.Element => {
  const classes = useStyles();
  const [openList, setOpenList] = React.useState(false);

  const handleClick = () => {
    setOpenList(!openList);
  };

  useEffect(() => {
    console.log("navigationTypeConfig", theme.breakpoints.up("sm"));
  }, [open]);

  return (
    <div>
      <Drawer
        {...rest}
        variant="permanent"
        open
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width },
        }}
      >
        <div className={classes.header_md}>
          <LogoImg className={classes.navLogo} />
          <div className={classes.footer_sm}>
            <ButtonGroup variant="text" aria-label="text button group">
              <CustomButton buttonType="text" children="Docs" />
              <CustomButton buttonType="text" children="Github" />
              <CustomButton buttonType="text" children="Support" />
            </ButtonGroup>
          </div>
        </div>
        <List>
          {navigationMenu.map(
            ({ label, icon: Icon, path, badge, disabled }: any) => (
              <ListItem key={label}>
                <ListItemButton
                  selected={path === window.location.pathname}
                  disabled={disabled}
                  onClick={handleClick}
                >
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={label} disableTypography />
                  {badge && (
                    <Chip label="SOON" size="small" color="primary" disabled />
                  )}
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <Drawer
        {...rest}
        variant="temporary"
        open={open}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width },
        }}
      >
        <div className={classes.header}>
          <LogoImg className={classes.navLogo} />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerClose}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <List>
          {navigationMenu.map(
            ({ label, icon: Icon, path, badge, disabled }: any) => (
              // <ListItem key={label}>
              <ListItemButton
                key={label}
                selected={path === window.location.pathname}
                disabled={disabled}
              >
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={label} disableTypography />
              </ListItemButton>
              // </ListItem>
            )
          )}
        </List>
        <div className={classes.footer_sm}>
          <ButtonGroup variant="text" aria-label="text button group">
            <CustomButton buttonType="text" children="Docs" />
            <CustomButton buttonType="text" children="Github" />
            <CustomButton buttonType="text" children="Support" />
          </ButtonGroup>
        </div>
      </Drawer>
    </div>
  );
};

export default CustomSideBar;
