import db from "./../models/index.js";

const User = db.User;
const Subject = db.Subject;
const Grade = db.Grade;

export const createGrade = async (req, res) => {
  try {
    const { studentId, subjectId, grade, gradeType } = req.body;
    
    if (!studentId || !subjectId) {
      return res.status(400).json({ message: "studentId or subjectId is missing" });
    }
    
    const student = await User.findOne({
      where: { id: studentId, role: "student" },
    });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    
    const subject = await Subject.findOne({ where: { id: subjectId } });
    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }
    
    const newGrade = await Grade.create({
      studentId,
      subjectId,
      grade,
      gradeType,
    });
    
    res.status(201).json(newGrade);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}