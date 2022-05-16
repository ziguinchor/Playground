const express = require("express");
const axios = require("axios");

const app = express();

app.get("/:id", async (req, res) => {
  try {
    const postsRes = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(await postsRes.status);
    if ((await postsRes.status) === 404  || await postsRes.data}) {
      return res.status(404).send();
    }

    // console.log(postData);
  } catch (err) {
    throw err;
  }
});

app.use((req, res) => {
  res.status(404).send();
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port ", port));
