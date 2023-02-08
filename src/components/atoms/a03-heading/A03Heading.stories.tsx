import A03Heading from "./A03Heading";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Design System/Atoms/A03Heading",
  component: A03Heading,
} as ComponentMeta<typeof A03Heading>;

const Template: ComponentStory<typeof A03Heading> = (args) => (
  <A03Heading {...args} />
);

export const h1 = Template.bind({});
h1.args = {
  tag: "h1",
  text: "Heading text",
};

export const h2 = Template.bind({});
h2.args = {
  tag: "h2",
  text: "Heading text",
};

export const h3 = Template.bind({});
h3.args = {
  tag: "h3",
  text: "Heading text",
};

export const h4 = Template.bind({});
h4.args = {
  tag: "h4",
  text: "Heading text",
};

export const h5 = Template.bind({});
h5.args = {
  tag: "h5",
  text: "Heading text",
};

export const h6 = Template.bind({});
h6.args = {
  tag: "h6",
  text: "Heading text",
};
