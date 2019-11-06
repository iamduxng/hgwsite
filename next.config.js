//const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const withOffline = require('next-offline');
const withCSS = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');

const nextConfig = {
  purgeCssEnabled: ({ dev, isServer }) => (dev || isServer),
  useFileSystemPublicRoutes: false,
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['postcss-loader'],
      }
      // {
      //   test: /\.jsx?$/,
      //   use: ['babel-loader', 'astroturf/loader'],
      // }
    );

    return config;
  }
}

module.exports = withOffline(withCSS(withPurgeCss(nextConfig)));