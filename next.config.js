//const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const withOffline = require('next-offline');
const withCSS = require('@zeit/next-css');
const withPurgeCss = require('next-purgecss');
const path = require('path');

const nextConfig = {
  purgeCssEnabled: ({ dev, isServer }) => (dev || isServer),
  purgeCssPaths: [
    'pages/**/*',
    'modules/**/*',
  ],
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['postcss-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      }
    );
    // We push our config into the resolve.modules array
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
  workboxOpts: {
    swDest: "static/service-worker.js",
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: "networkFirst",
        options: {
          cacheName: "https-calls",
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
}

module.exports = withOffline(withCSS(withPurgeCss(nextConfig)));