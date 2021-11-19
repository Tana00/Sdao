import React from "react";
import { ComponentStory } from "@storybook/react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import { CustomCard } from "../components/CustomCard";

export default {
  title: "Card",
  component: CustomCard,
};

const token = [
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

export const Card: ComponentStory<typeof CustomCard> = () => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div>
      <FormControlLabel
        control={
          <Switch checked={expanded} onChange={() => setExpanded(!expanded)} />
        }
        label="Show new farms"
      />
      <CustomCard
        expand={expanded}
        content={content}
        title="ETH/AGIX"
        tokenImg={token}
      />
    </div>
  );
};
