const User = require("../model/model");
// for get the token ... by jsonwebtoken..
var jwt = require("jsonwebtoken");
require("dotenv").config();
const gererateToken = (user) => {
  console.log(process.env.SECRET_KEY);
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);

  // return jwt.sign({user},"hellokjdfh"); //solt//
};

exports.registerUser = async (req, res) => {
  try {
    // check email is alreay exist or not?....
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      // if is present
      return res.status(404).send({ message: "Email is already Exist" });
    }
    // create new user ...
    const { name, email, password } = req.body;
    user = await User.create({
      name,
      email,
      password,
    });
    const token = gererateToken(user);
    return res.status(201).send({ user, token });
  } catch (err) {
    res.status(404).send({ messag: err.message });
  }
};

// login part..........

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );
    // check if mail exists
    if (!user) {
      return res.status(404).send("Wrong Email or Password");
    }
    //    if exist and check password
    const match = user.checkPassword(req.body.password);
    if (!match) {
      return res.status(404).send({ message: "Wrong Email or Password" });
    }
    // if it match
    const token = gererateToken(user);
    return res.status(201).send({ user, token });
  } catch (err) {
    return res.status(404).send({ message: err.message });
  }
};
