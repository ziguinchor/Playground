const { default: axios } = require("axios");
const express = require("express");
const app = express();

app.use("/:id", async (req, res) => {
  const { id } = req.params;

  const charRes = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const charData = await charRes.data;

  let charLocationData = "";
  if (charData.location.url) {
    const charLocationResp = await axios.get(charData.location.url);
    charLocationData = await charLocationResp.data;
  }

  res.send({
    name: charData.name,
    location: charData?.location?.name,
    residdents: charLocationData.residents,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port  ", port));
