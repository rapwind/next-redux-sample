const path = require("path");

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
  webpackFinal: (config) => {
    config.module.rules = config.module.rules.filter(
      rule => rule.test.toString() !== "/\\.css$/"
    );
    config.module.rules.push({
      test: /\.css$/,
      use: [
        "style-loader",
        "css-loader"
      ],
      include: path.resolve(__dirname, "../src")
    });
    config.resolve.alias = {
      "~": path.resolve(__dirname, "../src"),
    };
    return config;
  },
};
