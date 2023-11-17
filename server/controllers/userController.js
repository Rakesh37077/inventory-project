const UsersModel = require("./../models/Users.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";

const signUpFunction = async (req, res) => {
  // Steps to follow
  // 1) Existing Users check
  // 2) Hashed Password
  // 3) user Creation
  // 4) Token Generation

  const { name, email, password } = req.body;
  try {
    // check user existing or not
    const existingUser = await UsersModel.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({ message: "user already exists" });
    }
    // hashed password
    const hashedPassword = await bcrypt.hash(password, 10);

    // user Creation
    const result = await UsersModel.create({
      name: name,
      email: email,
      password: hashedPassword,
    });

    // Token Generation
    // we have to pass 2 values i.e Payload and Secret Or PrivateKey
    const token = jwt.sign(
      {
        email: result.email,
        id: result._id,
      },
      SECRET_KEY
    );

    res.status(201).json({
      user: result,
      token: token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Something went wrong",
    });
  }

  //   UsersModel.create(req.body)
  //     .then((users) => res.json(users))
  //     .catch((err) => res.json(err));
};

const loginFunction = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await UsersModel.findOne({ email: email });
    if (!existingUser)
      return res.status(400).json({ message: "User not found" });

    const matchPassword = await bcrypt.compare(password, existingUser.password);

    if (!matchPassword)
      return res.status(400).json({ message: "invalid Credentials" });

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
      },
      SECRET_KEY
    );
    res.status(200).json({ user: existingUser, token: token });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
  //   UsersModel.findOne({ email: email })
  //     .then((users) => {
  //       if (users) {
  //         if (user.password === password) {
  //           res.json("success");
  //         } else {
  //           res.json("the password is incorrect");
  //         }
  //       } else {
  //         res.json("No records existed.");
  //       }
  //     })
  //     .catch((err) => res.json(err));
};

module.exports = { loginFunction, signUpFunction };
