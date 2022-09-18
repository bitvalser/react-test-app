const path = require('path');
const commonConfig = require('./webpack.config.common');
const { merge } = require('webpack-merge');
const EnvironmentPlugin = require('webpack').EnvironmentPlugin;

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    path: path.resolve('build'),
    filename: 'bundle.js',
  },

  plugins: [
    new EnvironmentPlugin({
      REACT_APP_BASE_NAME: '/test-app',
      PUBLIC_URL: 'http://bitvalser.xyz/test-app',
    }),
  ],
});
