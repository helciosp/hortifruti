const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');

const app = express();

module.exports = function() {
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "~/");
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
      });
    app.use('/api/fruit', createProxyMiddleware({
        target: 'https://www.fruityvice.com',
        changeOrigin: true,
        })
    );
};