// https://levelup.gitconnected.com/overview-of-proxy-server-and-how-we-use-them-in-react-bf67c062b929
const proxy = require('http-proxy-middleware');

const zodomus = { target: 'https://api.zodomus.com', changeOrigin: true };

module.exports = function(app) {
  app.use(proxy('/channels', zodomus));
  app.use(proxy('/currencies', zodomus));
}