"use strict";

const cors = require("cors");
const express = require("express");

const { mountRoutes } = require("../lib").utils;
const { errorHandler } = require("../lib").middlewares;

const configureAPI = async (app) => {
  try {
    app.use(cors());

    app.use("/api", express.json());

    // Product Service
    app.use("/api/v1", mountRoutes("src/v1/productModule"));

    app.use(errorHandler);

  } catch (err) {
    console.log('err', err);
    app.use((req, res, next) => {
      res.status(503).json({
          code: '503',
          error: err,
          message: 'Service Unavailable'
      });
    });
  }
};

module.exports = configureAPI;
