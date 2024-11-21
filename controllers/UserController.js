import db from "./../models/index.js";

const User = db.User;

export const createUser = async (req, res) => {
  try {
    const user = await db.User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await db.User.findAll();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "error when getting users" });
  }
}
