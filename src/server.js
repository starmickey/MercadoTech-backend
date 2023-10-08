const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const routes = require("./routes/index.route");

const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl)
  .catch((error) => console.log(error));

const app = express();

app.use("/", routes);

app.listen(config.PORT, () => {
  console.log(`Server is running on PORT ${config.PORT}`);
});
