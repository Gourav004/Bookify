// Controller/user.controller.js
import User from "../Model/user.model.js";
import bcrypt from "bcryptjs"; // use the same name everywhere
import jwt from "jsonwebtoken"

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1. Check all fields
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const normalizedEmail = String(email).trim().toLowerCase();

    // 2. Check if user already exists
    const isExistingUser = await User.findOne({ email: normalizedEmail });
    if (isExistingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3. Create new user
    const newUser = new User({
      name: String(name).trim(),
      email: normalizedEmail,
      password: hashedPassword,
    });
    await newUser.save();

    // 4. Send success response
    return res.status(201).json({
      message: "User created successfully",
      user: { id: newUser._id, name: newUser.name, email: newUser.email },
    });
  } catch (error) {
    console.error("createUser ERROR:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }


    const user = await User.findOne({ email });

    // don't reveal whether email exists; just return invalid credentials
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // defensive: ensure password hash exists
    if (!user.password) {
      console.error("User has no password hash:", user._id);
      return res.status(500).json({ message: "Server error" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // success - return safe user info (no password)
    return res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("login Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
