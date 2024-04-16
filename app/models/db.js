const mongoose = require("mongoose");
require("dotenv").config();
const Dbconnection = async () => {
  await mongoose
    .connect(process.env.URL)
    .then(() => {
      console.log("Db connected successfull");
    })
    .catch((err) => {
      console.log("Db connected successfull", err);
    });
};

module.exports = Dbconnection();
