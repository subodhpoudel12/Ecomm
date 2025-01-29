const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../model/auth/auth-model");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  try {
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res
      .status(200)
      .json({ success: true, message: "User created successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: err.message || "Something went wrong" });
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email });

    if (!validUser) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) {
      return res.status(401).json({ message: "Wrong Credentials" });
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const { password: hashedPassword, ...rest } = validUser._doc;

    const expiryDate = new Date(Date.now() + 3600000);
    res
      .cookie("token", token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { signup, signin };
