const express = require("express");
const cors = require("cors");
const app = express();
const server = require("http").createServer(app);

app.use(cors());

app.get("/api", (req, res) => {
  res.send({ message: "hello" });
});

server.listen(8080, () => {
  console.log("server is running on 8080");
});
