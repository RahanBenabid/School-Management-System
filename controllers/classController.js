import db from "./../models/index.js";

const Class = db.Class;
const User = db.User;

export const createClass = async (req, res) => {
  try {
    const { teacherId, className, classDescription } = req.body;

    if (!teacherId || !className) {
      return res
        .status(400)
        .json({ message: "teacherId and className are required" });
    }

    const teacher = await User.findOne({
      where: { id: teacherId, role: "teacher" },
    });

    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    const newClass = await Class.create({
      teacherId: teacherId,
      className: className,
      classDescription: classDescription || null,
    });

    res.status(201).json(newClass);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getClasses = async (req, res) => {
  try {
    const classes = await Class.findAll();
    res.status(200).json(classes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
