const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "../Configs/configs.env" });
// console.log("mongoos",process.env.MONGOOSE)
const connect = () => {
  mongoose
    .connect(process.env.MONGOOSE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex : true,
    })
    .then((data) => {
      console.log("connection is successfull");
    })
    .catch((err) => {
      console.log("No connection", err);
    });
};
module.exports = connect;
