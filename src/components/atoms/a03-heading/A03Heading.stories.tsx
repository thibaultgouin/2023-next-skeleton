import A03Heading from "./A03Heading";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Design System/Atoms/A03Heading",
  component: A03Heading,
} as ComponentMeta<typeof A03Heading>;

const Template: ComponentStory<typeof A03Heading> = (args) => (
  <A03Heading {...args} />
);

export const H1 = Template.bind({});
H1.args = {
  tag: "h1",
  text: "Heading text",
};

export const H2 = Template.bind({});
H2.args = {
  tag: "h2",
  text: "Heading text",
};

export const H3 = Template.bind({});
H3.args = {
  tag: "h3",
  text: "Heading text",
};

export const H4 = Template.bind({});
H4.args = {
  tag: "h4",
  text: "Heading text",
};

export const H5 = Template.bind({});
H5.args = {
  tag: "h5",
  text: "Heading text",
};

export const H6 = Template.bind({});
H6.args = {
  tag: "h6",
  text: "Heading text",
};
