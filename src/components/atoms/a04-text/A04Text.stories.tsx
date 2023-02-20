import A04Text from "./A04Text";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Design System/Atoms/A04Text",
  component: A04Text,
} as ComponentMeta<typeof A04Text>;

const Template: ComponentStory<typeof A04Text> = (args) => (
  <A04Text {...args} />
);

export const Copy1 = Template.bind({});
Copy1.args = {
  size: "copy-1",
  text: "Vestibulum condimentum mauris at lectus gravida, vestibulum dapibus nibh semper. Phasellus dictum sodales diam, sed eleifend diam dignissim eget.",
};

export const Copy2 = Template.bind({});
Copy2.args = {
  size: "copy-2",
  text: "Vestibulum condimentum mauris at lectus gravida, vestibulum dapibus nibh semper. Phasellus dictum sodales diam, sed eleifend diam dignissim eget.",
};

export const Copy3 = Template.bind({});
Copy3.args = {
  size: "copy-3",
  text: "Vestibulum condimentum mauris at lectus gravida, vestibulum dapibus nibh semper. Phasellus dictum sodales diam, sed eleifend diam dignissim eget.",
};

export const TextSpan = Template.bind({});
TextSpan.args = {
  tag: "span",
  text: "Vestibulum condimentum mauris at lectus gravida, vestibulum dapibus nibh semper. Phasellus dictum sodales diam, sed eleifend diam dignissim eget.",
};
