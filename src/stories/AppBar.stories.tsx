import React from "react";
import { ComponentStory } from "@storybook/react";

import { CustomAppBar } from "../components/CustomAppBar";

export default {
  title: "Appbar",
  component: CustomAppBar,
};

export const Appbar: ComponentStory<typeof CustomAppBar> = () => (
  <CustomAppBar
    title={"Yield Farm"}
    boxShadow="0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)"
    width="0"
  />
);
