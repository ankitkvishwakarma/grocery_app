import jwt from "jsonwebtoken";
import User from "../models/User.js";

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ message: "Enter all fields" });

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    // IMPORTANT: do NOT hash here — let pre("save") hash it
    const user = await User.create({ name, email, password });

    const { password: _, ...userData } = user.toObject();
    res.status(201).json({ message: "User Created Successfully", user: userData, token: generateToken(user._id) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Enter all fields" });

    // include password explicitly since select:false in schema
    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await user.matchPassword(password);
    console.log("Entered:", password);
    console.log("Stored:", user.password);
    console.log("isMatch:", isMatch);
  
    if (!isMatch) return res.status(401).json({ message: "Password does not match" });
    console.log(password);

    const { password: _, ...userData } = user.toObject();
    res.json({ message: "Login Successful", user: userData, token: generateToken(user._id) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
