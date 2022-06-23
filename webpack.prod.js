const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const ESLintPlugin = require('eslint-webpack-plugin');
const dotenv = require("dotenv-webpack");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new ESLintPlugin({
      failOnError: true,
      overrideConfigFile: path.resolve(__dirname, '.eslintrc.js'),
      extensions: ['js', 'jsx', 'ts', 'tsx']
    }),
    new dotenv()
  ]
});
