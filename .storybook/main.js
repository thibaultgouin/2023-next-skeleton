module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  staticDirs: ["../public"],
  addons: [
    {
      name: "@storybook/preset-scss",
      options: {
        cssLoaderOptions: {
          modules: true,
        },
        sassLoaderOptions: {
          additionalData: (content) => {
            // paths are relative to root dir in this case
            return (
              `
              @import "./src/styles/utils/variables.scss";
            ` + content
            ); // content is the individual module.scss file
          },
        },
      },
    },
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
