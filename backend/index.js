const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const syncMysql = require("sync-mysql");
const CONFIG = require("./config");
const app = express();
const PORT = 5030;

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET", "POST", "DELETE", "PATH", "PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.static("public"));
app.use("/public", express.static(path.resolve(__dirname + "/public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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
