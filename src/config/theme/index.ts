import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 1024,
      lg: 1200,
      xl: 1920,
    },
  },
  typography: {
    fontSize: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&$disabled": {
            cursor: "not-allowed",
            pointerEvents: "auto",
          },
          borderRadius: "5px",
          fontSize: "1rem",
          fontWeight: 500,
          textTransform: "unset",
          padding: ".5rem 2rem",
          border: "1px solid transparent",
        },
        containedPrimary: {
          "&$disabled": {
            backgroundColor: "#1123AB80",
            borderColor: "#1123AB80",
            color: "rgba(255,255,255,0.9)",
          },
          "&:hover": {
            boxShadow:
              "0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%)",
            transform: "translateY(-1px)",
            backgroundColor: "#7b1fa2",
            borderColor: "#7b1fa2",
          },
          backgroundColor: "#7800ff",
          borderColor: "#7800ff",
          color: "#fff",
          lineSpacing: 20,
        },
        containedSecondary: {
          backgroundColor: "#005aff",
          color: "#fff",
          borderColor: "#005aff",
          "&$disabled": {
            backgroundColor: "#0114310D",
          },
          "&:hover": {
            backgroundColor: "transparent",
            borderColor: "#005aff",
            color: "#005aff",
            boxShadow:
              "0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%)",
            transform: "translateY(-1px)",
          },
        },
        outlined: {
          color: "#7800ff",
          borderColor: "#7800ff",
          padding: ".5rem 2rem",
          "&$disabled": {
            borderColor: "#0114310D",
          },
          "&:hover": {
            borderColor: "#3E78E629",
            backgroundColor: "none",
            boxShadow:
              "0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%)",
            transform: "translateY(-1px)",
          },
        },
        text: {
          color: "#005aff",
          backgroundColor: "none",
          textAlign: "left",
          "&:hover": {
            background: "none",
            color: "#1123ab",
            transform: "translateY(-1px)",
            textDecoration: "underline",
          },
          "&$disabled": {
            color: "#A6A6A6",
          },
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        grouped: {
          border: "none",
          width: "30px",
          color: "#212121",
          fontSize: ".8rem",
          "&:not(:last-of-type)": {
            border: "none",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paperAnchorLeft: {
          color: "#a4a8c1",
          backgroundColor: "#fff",
          width: "280px",
          // border: "none",
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          borderTop: "0.5px solid #f7efe4",
          borderBottom: "0.5px solid #f7efe4",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: "0",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          margin: "4px 20px",
          width: "200px",
          height: "50px",
          borderRadius: "8px",
          color: "#212121",
          opacity: "0.6",
          fontSize: "0.9rem",
          fontWeight: 500,
          "&.MuiListItemIcon-root,& path": {
            fill: "#212121",
          },
          "&:hover": {
            backgroundColor: "#f7f9fb",
            opacity: "1",
            color: "#7800ff",
            "&.MuiListItemIcon-root,& path": {
              fill: "#7800ff",
            },
          },
          "&.Mui-selected": {
            opacity: "1",
            backgroundColor: "#f7f9fb",
            color: "#7800ff",
            "&.MuiListItemIcon-root,& path": {
              fill: "#7800ff",
            },
          },
          "&::before": {
            content: "' '",
            backgroundColor: "transparent",
            width: "4px",
            height: "42px",
            display: "block",
            borderRadius: "8px",
            position: "absolute",
            left: "-8px",
          },
          "&.Mui-selected::before": {
            background: "linear-gradient(0deg,#003ec7,#520eb5)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow:
            "box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;",
          borderRadius: "8px",
          padding: "1rem",
          maxWidth: "450px",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "0.5rem",
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: ".5rem",
        },
        title: {
          color: "#212121",
          fontWeight: "600",
          fontSize: ".95rem",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
        },
        h5: {
          fontWeight: 600,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        colorPrimary: "#7800ff",
      },
    },
  },
  palette: {
    primary: {
      main: "#7800ff",
    },
    secondary: {
      main: "#005aff",
    },
  },
});

const theme = responsiveFontSizes(customTheme);
export default theme;
