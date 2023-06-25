const express = require("express");

const axios = require("axios");
const app = express();

// client.connect()

const cors = require("cors");

const whitelist = ["http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

app.get("/pokemon/page/:pagenum", async function (req, res) {
  try {
    let pagenum = req.params.pagenum;
    console.log("pagenum" + pagenum);

    let offset = pagenum * 20;

    // const cacheData = await client.get("pokpage" + pagenum);

    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=" + offset
    );

    // await client.set("pokpage" + pagenum, JSON.stringify(data));
    console.log("data " + data.data);

    return res.json(data);
  } catch (e) {
    res.status(404).json({ error: "No data found" });
  }
});

app.get("/pokemon/:id", async function (req, res) {
  try {
    let id = req.params.id;

    // const cacheData = await client.get("pok" + id);

    if (!id) {
      // console.log(1)
      return res.json(JSON.parse(cacheData));
    } else {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/" + id
      );

      // await client.set("pok" + id, JSON.stringify(data));

      return res.json(data);
    }
  } catch (e) {
    res.status(404).json({ error: "No id found" });
  }
});

app.use("*", (req, res) => {
  res.status(404).json({ error: "page not found" });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("The server is up and running !!!");
  console.log(`The routes are running on http://localhost:${port}`);
});
