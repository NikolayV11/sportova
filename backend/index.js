const express = require("express");
const app = express();
const PORT = 3030;

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  console.log(`test port: ${PORT}...`);
});
