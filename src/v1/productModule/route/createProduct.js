"use strict";

const express = require("express");
const router = express.Router();

router.post("/product", (req, res, next) => {
  try {
    res.json({
      code: "200",
      data: [],
      message: "WIP",
    });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
