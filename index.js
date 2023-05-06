const express = require("express");
const app = express();
const CONFIG = require("./config");
const mongoose = require("mongoose");
const home = require('./route/home');
const bodyParser = require("body-parser")

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}))
app.use("/", home)

/**Connect to mongoDB */
mongoose
  .connect(CONFIG.MONGODB_URL, {
    maxPoolSize: 20,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected MongoDB");
  })
  .catch((err) => {
    console.log(`Connect mongoDb fail: ${err}`);
  });

app.listen(CONFIG.PORT, () => {
  console.log(`Example app listening on port ${CONFIG.PORT}`);
});
