const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const validator = require("validator");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter your Name"],
    minLength: [3, "Name should be have more than 3 characters"],
    maxLength: [30, "Name can't exeed 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Yor Passwrod"],
    minLength: [8, "password should be grater than 8 charactars"],
    select: false, //if we find() method it show all data except passowrd...
  },
});

// there only plain function work not async

userSchema.pre("save",function(next){
  // console.log(this.password);
if(!this.isModified("password")){
  next();
}
  const hash = bcrypt.hashSync(this.password,10);
  this.password = hash;
  return next();
})


userSchema.methods.checkPassword = function(password){
  return bcrypt.compareSync(password,this.password)
}

module.exports = mongoose.model("user",userSchema)
