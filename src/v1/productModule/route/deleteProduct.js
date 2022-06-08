"use strict";

const express = require("express");
const router = express.Router();
const { product } = require('../../../data');

router.delete("/product", (req, res, next) => {
  try {
    res.json({
      code: "200",
      data: res.locals.data,
      message: "OK",
    });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
