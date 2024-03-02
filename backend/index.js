const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 5030;

const getDataSQL = require("./productRequest");

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET", "POST", "DELETE", "PATH", "PUT");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.static("public"));
app.use("/public", express.static(path.resolve(__dirname + "/bublic")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/data/:path", (req, res) => {
  const data = req.params;
  console.log(data);
  res.send(getDataSQL(data.path));
});

app.listen(PORT, () => {
  console.log(`test port: ${PORT}...`);
});
