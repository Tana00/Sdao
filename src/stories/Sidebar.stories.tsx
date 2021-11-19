import React from "react";
import { ComponentStory } from "@storybook/react";

import { CustomSideBar } from "../components/CustomSideBar";

export default {
  title: "Sidebar",
  component: CustomSideBar,
};

export const Sidebar: ComponentStory<typeof CustomSideBar> = () => (
  <CustomSideBar open={true} />
);
