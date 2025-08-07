import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from 'bcryptjs'


const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).json({
        message: "Enter all field"
      })
      return;
    }

    const userExists = await User.findOne({ email });

    if (userExists) return res.status(400).json({ message: "User already exists" });

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashPassword });

    res.status(201).json({
      message: "User Create Succesfull",
      user,
      token: generateToken(user._id),
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {

    const { email, password } = req.body;
    // console.log(req.body);
    if (!email || !password) {
      res.status(400).json({
        message: "Enter all field"
      })
      return
    }

    const user = await User.findOne({ email });
   
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "password does not match" });
    }
    res.json({
      message: "Login Succesfull",
      user,
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
