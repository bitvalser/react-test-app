const path = require('path');
const commonConfig = require('./webpack.config.common');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EnvironmentPlugin = require('webpack').EnvironmentPlugin;

module.exports = merge(commonConfig, {
  mode: 'development',

  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve('public', 'index.html') }),
    new EnvironmentPlugin({
      REACT_APP_BASE_NAME: '',
      PUBLIC_URL: '',
    }),
  ],
});
