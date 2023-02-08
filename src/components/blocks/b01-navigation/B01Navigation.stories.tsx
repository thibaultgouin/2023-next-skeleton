import B01Navigation from "./B01Navigation";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Blocks/B01Navigation",
  component: B01Navigation,
} as ComponentMeta<typeof B01Navigation>;

const Template: ComponentStory<typeof B01Navigation> = (args) => (
  <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
    <B01Navigation {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
