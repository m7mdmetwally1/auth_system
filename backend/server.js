const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./.env" });

const db = process.env.DATABASE;

mongoose
  .connect(db)
  .then(() => {
    console.log("connect to mongodb");
  })
  .catch(() => {
    console.log("failed to connect");
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("app is working");
});
