const Calculation = require("../../models/calculation");

exports.getCalculations = async (req, res, next) => {
  try {
    const calculations = await Calculation.find().sort("-_id");

    res.status(200).json({
      status: "success",
      length: calculations.length,
      calculations,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      err,
    });
  }
};

exports.addCalculation = async (req, res, next) => {
  try {
    const { name, cal, result } = req.body;
    const calculation = await Calculation.create({ name, cal, result });

    res.status(201).json({
      status: "success",
      calculation,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      err,
    });
  }
};

exports.deleteCalculation = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Calculation.deleteOne({ _id: id });

    res.status(200).json({
      status: "success",
      message: "deleted successfully!",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      err,
    });
  }
};
