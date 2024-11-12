import db from "./../models/index.js";

const Class = db.Class;
const User = db.User;
const Subject = db.Subject;

export const createClass = async (req, res) => {
  try {
    const { teacherId, className, classDescription, subjectId } = req.body;

    if (!teacherId || !className || ! subjectId) {
      return res
        .status(400)
        .json({ message: "teacherId, className and subjectId are required" });
    }

    const teacher = await User.findOne({
      where: { id: teacherId, role: "teacher" },
    });
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }
    
    const subject = await Subject.findOne({ where: { id: subjectId} });
    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }

    const newClass = await Class.create({
      teacherId: teacherId,
      subjectId: subjectId,
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
