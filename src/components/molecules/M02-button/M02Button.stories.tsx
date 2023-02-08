import M02Button from "./M02Button";
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
