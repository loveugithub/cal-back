const express = require("express");
const calculationRouter = require("./calculations/calculation.router");

const api = express.Router();

api.get("/", (req, res) => {
  res.send("<h1>SERVER RUNNNING...</h1>");
});

// 1) calculations
api.use("/calculations", calculationRouter);

module.exports = api;
