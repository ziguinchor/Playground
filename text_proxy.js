const express = require("express");
const app = express();
const { createProxyMiddleware } = require("http-proxy-middleware");

app.use(
  createProxyMiddleware({
    changeOrigin: true,
    target: "https://jsonplaceholder.typicode.com",
    pathRewrite: {
      ["^/app"]: "/",
    },
  })
);

app.listen(3000, () => {
  console.log("Listening");
});
