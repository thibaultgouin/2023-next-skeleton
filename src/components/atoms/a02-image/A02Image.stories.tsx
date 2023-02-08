import A02Image from "./A02Image";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Design System/Atoms/A02Image",
  component: A02Image,
} as ComponentMeta<typeof A02Image>;

const Template: ComponentStory<typeof A02Image> = (args) => (
  <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
    <A02Image {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  src: "./images/storybook/landscape.jpg",
  width: 1080,
  height: 720,
};
