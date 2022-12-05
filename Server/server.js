const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./src/Configs/configs.env" });
const connect = require("./src/Connetction/connection");
const { registerUser, loginUser } = require("./src/Controller/controller");
const app = express();
app.use(express.json());
app.post("/register", registerUser);
app.post("/login", loginUser);


// connection..
app.listen(process.env.PORT, async () => {
  try {
    await connect();
    console.log(`Server Run At Port http://localhost:${process.env.PORT}`);
  } catch (err) {
    console.log(err.message);
  }
});
