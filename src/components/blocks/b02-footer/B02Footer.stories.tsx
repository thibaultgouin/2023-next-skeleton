import B02Footer from "./B02Footer";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Blocks/B02Footer",
  component: B02Footer,
} as ComponentMeta<typeof B02Footer>;

const Template: ComponentStory<typeof B02Footer> = (args) => (
  <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
    <B02Footer {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
