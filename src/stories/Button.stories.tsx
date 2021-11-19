import React from "react";
import { ComponentStory } from "@storybook/react";

import { CustomButton } from "../components/CustomButton";

export default {
  title: "Button",
  component: CustomButton,
};

export const PrimaryButton: ComponentStory<typeof CustomButton> = () => (
  <CustomButton onClick={() => console.log("clicked")} buttonType="primary">
    Connect Wallet
  </CustomButton>
);
export const SecondaryButton: ComponentStory<typeof CustomButton> = () => (
  <CustomButton onClick={() => console.log("clicked")} buttonType="secondary">
    Connect Wallet
  </CustomButton>
);
export const OutlinedButton: ComponentStory<typeof CustomButton> = () => (
  <CustomButton onClick={() => console.log("clicked")} buttonType="outlined">
    Connect Wallet
  </CustomButton>
);
