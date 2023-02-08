import A01Icon from "./A01Icon";
import { IoIosAddCircle } from "react-icons/io";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Design System/Atoms/A01Icon",
  component: A01Icon,
} as ComponentMeta<typeof A01Icon>;

const Template: ComponentStory<typeof A01Icon> = (args) => (
  <A01Icon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  icon: IoIosAddCircle,
};
