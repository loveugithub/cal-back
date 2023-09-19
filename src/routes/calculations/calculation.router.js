const express = require("express");
const {
  getCalculations,
  addCalculation,
  deleteCalculation,
} = require("./calculation.controller");

const calculationRouter = express.Router();

calculationRouter.get("/", getCalculations);
calculationRouter.post("/", addCalculation);
calculationRouter.delete("/:id", deleteCalculation);

module.exports = calculationRouter;
