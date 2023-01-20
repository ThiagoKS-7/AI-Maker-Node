const express = require('express');
require('dotenv').config();
const app = express();
const routes = require("./routes/index.js");

app.use("/api/v1", routes);

app.listen(process.env.API_PORT, () => {
    console.log(`Listening on http://localhost:${process.env.API_PORT}/api/v1`)
  })