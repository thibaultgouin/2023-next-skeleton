import M02Button from "./M02Button";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Design System/Molecules/M02Button",
  component: M02Button,
} as ComponentMeta<typeof M02Button>;

const Template: ComponentStory<typeof M02Button> = (args) => (
  <M02Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Default Button",
};

export const WithIconStart = Template.bind({});
WithIconStart.args = {
  label: "Click here",
  icon: IoIosArrowRoundBack,
};

export const WithIconEnd = Template.bind({});
WithIconEnd.args = {
  label: "Click here",
  icon: IoIosArrowRoundForward,
  iconAlignment: "end",
};
