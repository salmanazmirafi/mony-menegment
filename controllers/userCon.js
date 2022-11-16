const registerValidate = require("../validator/registerValidator");
const bcrypt = require("bcrypt");
const User = require("../model/User");

exports.register = async (req, res) => {
  let { name, email, password, confirmPassword } = req.body;
  let validate = registerValidate({
    name,
    email,
    password,
    confirmPassword,
  });

  if (!validate.isValid) {
    res.status(400).json(validate.error);
  } else {
    bcrypt.hash(password, 11, (error, hash) => {
      if (error) {
        res.status(500).json({
          message: "Server error",
        });
      }

      const createUser = new User({
        name,
        email,
        password: hash,
      });

      createUser.save().then((user) => {
        res.status(200).json({
          message: "Register Successful",
          user,
        });
      });
    });
  }
};
