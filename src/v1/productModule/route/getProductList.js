"use strict";

const express = require("express");
const router = express.Router();
const { product } = require('../../../data');

router.get("/product", (req, res, next) => {
  try {
    res.locals.data = product;
    res.json({
      code: "200",
      data: res.locals.data,
      meesage: "OK",
    });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
