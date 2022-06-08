"use strict";

const express = require("express");
const app = express();

app.set("port", process.env.PORT || 4500);

require("./src/boot")(__dirname, app)
  .then(res => {
    app.listen(app.get("port"), () => {
      console.log('===>', app.get("port"), app.get("env"));
    });
  })
  .catch((err) => {
    throw err;
  });
