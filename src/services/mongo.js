const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://tmp:t5zYSdVNs6PGKPA7@test.vupdbts.mongodb.net/?retryWrites=true&w=majority"
  );
};

module.exports = { connectDB };
