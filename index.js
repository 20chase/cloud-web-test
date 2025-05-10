const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// 代理所有请求到目标服务
app.use('/', createProxyMiddleware({
    target: 'http://imz410.ust.hk:1180', // 目标地址
    changeOrigin: true,
    ws: true
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Proxy server running on port ${PORT}`);
});