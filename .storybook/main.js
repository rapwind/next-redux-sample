module.exports = {
  stories: [
    "../src/**/*.stor@(y|ies).@(ts|tsx)"
  ],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register",
    "@storybook/addon-knobs/register",
    "@storybook/addon-backgrounds/register"
  ],
};
