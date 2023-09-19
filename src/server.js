const { connectDB } = require("./services/mongo");

const app = require("./app");

const PORT = 3000;

const start = async () => {
  try {
    await connectDB();
    console.log("server connected with mongoDB");
    app.listen(PORT, () => console.log(`Server running at port ${PORT}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
