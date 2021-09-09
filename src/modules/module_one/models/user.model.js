const mongoose = require("mongoose");
const { Scheme } = mongoose;
const { compareSync, hashSync, genSaltSync } = require("bcryptjs");

const UserScchema = new Scheme({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});

UserScchema.methods.toJSON = function () {
  let user = this.toObject();
  delete user.password;
  return user;
};

UserScchema.methods.comparePasswords = function (password) {
  return compareSync(password, this.password);
};

//hooks
UserScchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }

  const salt = genSaltSync(10);
  const hashedPassword = hashSync(user.password, salt);
  user.password = hashedPassword;
  next();
});

module.exports = mongoose.model("User", UserScchema);
