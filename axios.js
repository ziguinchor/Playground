const axios = require("axios");
const bodyParser = require("body-parser");
const { append } = require("express/lib/response");

const uuid = require("uuid");

const url = "https://jsonplaceholder.typicode.com/todoss";
app.use(bodyParser.urlencoded({ extended: true }));

const config = {
  headers: {
    "Content-Type": "Image/png",
    Authorization: "mytoken",
  },
};
axios
  .get(url, {
    params: {
      _limit: 2,
    },
    headers: {
      header1: "value",
    },
  })
  .then((response) => console.log(response))
  .catch((err) => {
    console.log(err.toString()); // AxiosError: Request failed with status code 404
    console.log(err.response.status);
    console.log(err.response.headers);
    console.log(err.response.data);
  });
