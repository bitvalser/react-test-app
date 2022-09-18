const path = require('path');

module.exports = {
  entry: path.resolve('src', 'index.tsx'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
        resolve: {
          extensions: ['.js', '.jsx'],
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
        },
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    alias: {
      '@components': path.resolve('./src/components'),
      '@constants': path.resolve('./src/constants'),
      '@helpers': path.resolve('./src/helpers'),
      '@interfaces': path.resolve('./src/interfaces'),
      '@redux': path.resolve('./src/redux'),
      '@services': path.resolve('./src/services'),
    },
  },
};
