import M01Link from "./M01Link";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Design System/Molecules/M01Link",
  component: M01Link,
} as ComponentMeta<typeof M01Link>;

const Template: ComponentStory<typeof M01Link> = (args) => (
  <M01Link {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "About page",
  href: "",
};
