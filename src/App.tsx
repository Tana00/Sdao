import React from "react";
import { makeStyles } from "@mui/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import { CustomSideBar } from "./components/CustomSideBar";
import { CustomAppBar } from "./components/CustomAppBar";
import { CustomCard } from "./components/CustomCard";
import { Grid } from "./components/GridBox/";
import { ReactComponent as BackgroundgImg } from "./static/svgs/bg.svg";
import theme from "./config/theme";
import "./index.css";

// Style declaration
const useStyles = makeStyles(() => ({
  body: {
    [theme.breakpoints.up("sm")]: {
      margin: "5% 5% 5% 30%",
    },
    margin: "5%",
  },
  header: {
    margin: "3rem 1rem 1rem",
    "& p": {
      fontSize: "1rem",
    },
  },
  bgImg: {
    width: "100vw",
    height: "100vh",
    minWidth: "1200px",
  },
}));

function App() {
  const [openSidebar, setOpenSidebar] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDrawerToggle = () => {
    setOpenSidebar(!openSidebar);
    console.log("clicked", openSidebar);
  };

  const handleDrawerClose = () => {
    setOpenSidebar(false);
    console.log("close", openSidebar);
  };

  const classes = useStyles();
  const token1 = [
    {
      src: "https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png",
      alt: "ETH",
    },
    {
      src: "https://s2.coinmarketcap.com/static/img/coins/200x200/825.png",
      alt: "USDT",
    },
  ];
  const token2 = [
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAfArkW0U6FQmd8Jx08RoKQY7fFlNit-ySc1juBMvjsZHM1a73gljQW-Oa26Pp7ILZvaI&usqp=CAU",
      alt: "AGIX",
    },
    {
      src: "https://s2.coinmarketcap.com/static/img/coins/200x200/825.png",
      alt: "USDT",
    },
  ];
  const token3 = [
    {
      src:
        "https://img.api.cryptorank.io/coins/singularitydao1620045551195.png",
      alt: "SDAO",
    },
    {
      src: "https://s2.coinmarketcap.com/static/img/coins/200x200/825.png",
      alt: "USDT",
    },
  ];
  const token4 = [
    {
      src: "https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png",
      alt: "ETH",
    },
    {
      src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAfArkW0U6FQmd8Jx08RoKQY7fFlNit-ySc1juBMvjsZHM1a73gljQW-Oa26Pp7ILZvaI&usqp=CAU",
      alt: "AGIX",
    },
  ];

  const content = [{ apr: "0", stake: "0", earned: "0 SDAO" }];
  return (
    <div>
      <div id="bg_style">
        <BackgroundgImg className={classes.bgImg} />
      </div>
      <CustomAppBar
        title={"Yield Farm"}
        handleDrawerToggle={handleDrawerToggle}
      />
      <CustomSideBar open={openSidebar} handleDrawerClose={handleDrawerClose} />
      <div className={classes.body}>
        <div className={classes.header}>
          <p>Maximize your returns by using your LP tokens to farm SDAO.</p>
          <FormControlLabel
            control={<Switch checked={expanded} onChange={handleExpandClick} />}
            label="Show new farms"
          />
        </div>
        <Grid
          container
          spacing="sm"
          alignItems="center"
          style={{
            height: "100%",
            justifyContent: "space-evenly",
            rowGap: "1.2rem",
          }}
        >
          <Grid item xs={1} sm={6} md={4} lg={3}>
            <CustomCard
              expand={expanded}
              content={content}
              title="ETH/USDT"
              tokenImg={token1}
            />
          </Grid>
          <Grid item xs={1} sm={6} md={4} lg={3}>
            <CustomCard
              expand={expanded}
              content={content}
              title="AGIX/USDT"
              tokenImg={token2}
            />
          </Grid>
          <Grid item xs={1} sm={6} md={4} lg={3}>
            <CustomCard
              expand={expanded}
              content={content}
              title="SDAO/USDT"
              tokenImg={token3}
            />
          </Grid>
          <Grid item xs={1} sm={6} md={4} lg={3}>
            <CustomCard
              expand={expanded}
              content={content}
              title="ETH/AGIX"
              tokenImg={token4}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
