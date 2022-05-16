const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

app.use(express.json());

app.use(
  "/app",
  createProxyMiddleware({
    target: "https://jsonplaceholder.typicode.com",
    changeOrigin: true,
    pathRewrite: {
      [`^/app`]: "/",
    },
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Listening on port", port);
});
