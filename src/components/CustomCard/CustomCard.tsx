import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { BaseCardProps } from "../types";
import { CustomButton } from "../CustomButton";

// Style declaration
const useStyles = makeStyles(() => ({
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#6c6c6c",
    fontSize: ".75rem",
    "& p": {
      margin: "0.3rem 0",
    },
    "& p:nth-child(2)": {
      fontWeight: "bold",
    },
  },
  actions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {},
  hr: {
    margin: "0.5rem 0",
    border: "0.5px solid #f7efe4",
  },
}));

/** Component for Base Card */
const CustomCard = ({
  title,
  content,
  tokenImg,
  expand,
}: BaseCardProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Card sx={{ width: { xs: "auto", sm: "400px" } }}>
      <CardHeader
        avatar={
          <div>
            {tokenImg !== undefined &&
              tokenImg.map((img: any) => (
                <img src={img.src} alt={img.alt} height="30"></img>
              ))}
          </div>
        }
        title={`${title} Pool`}
      />
      {content !== undefined &&
        content.map((item: any) => (
          <CardContent>
            <div className={classes.content}>
              <p className="title">APR(approx)</p>
              <p className="title">{item.apr} %</p>
            </div>
            <div className={classes.content}>
              <p className="sub_title">Your stake</p>
              <p className="sub_title">
                {item.stake} {title}
              </p>
            </div>
          </CardContent>
        ))}
      <CardActions className={classes.actions}>
        <CustomButton buttonType="outlined" children="Withdraw" />
        <CustomButton buttonType="primary" children="Farm" />
      </CardActions>
      <Collapse
        in={expand}
        timeout="auto"
        unmountOnExit
        className={classes.footer}
      >
        <CardContent>
          <hr className={classes.hr} />
          {content !== undefined &&
            content.map((item: any) => (
              <div className={classes.content}>
                <p className="title">SDAO earned</p>
                <p className="title">{item.earned}</p>
              </div>
            ))}
          <div className={classes.actions}>
            <CustomButton buttonType="text" children="Withdraw & Harvest" />
            <CustomButton buttonType="secondary" children="Harvest" />
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default CustomCard;
