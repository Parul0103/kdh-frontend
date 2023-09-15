const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // Define the proxy middleware for each path
  app.use(
    './config/database', // Change this path to match your backend API path
    createProxyMiddleware({
      target: 'http://localhost:4000', // Change this to the URL of your backend server
      changeOrigin: true,
    })
  );

  // Add more proxy routes for other paths as needed
};
