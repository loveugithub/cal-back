const mongoose = require("mongoose");

let Calculation = new mongoose.model("Calculation", {
  name: {
    type: String,
    required: [true, "type is required"],
  },
  cal: {
    type: String,
    required: [true, "calculation is required"],
  },
  result: String,
});

// const Calculation = calculationSchema.model("Calculation", calculationSchema);

module.exports = Calculation;
