const express = require("express");
const syncMysql = require("sync-mysql");
const CONFIG = require("./config");
const app = express();
const PORT = 3030;

function t02(path) {
  const connection = new syncMysql(CONFIG);
  let query = `SELECT * FROM ${path}`;
  const result = connection.query(query);
  return result;
}
app.get("/data/:path", (req, res) => {
  console.log(req.params);
  res.send(t02(req.params.path));
});

app.listen(PORT, () => {
  console.log(`test port: ${PORT}...`);
});
