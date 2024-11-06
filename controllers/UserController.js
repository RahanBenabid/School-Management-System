// controllers/userController.js
import db from "../models/index.js";

const User = db.User;

export const createUser = async (req, res) => {
  try {
    const user = await db.User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};