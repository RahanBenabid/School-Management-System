import db from "./../models/index.js";

const Class = db.Class;
const User = db.User;
const Attendance = db.Attendance;

export const createAttendance = async (req, res) => {
  try {
    const { studentId, classId, attendanceDate, status } = req.body;

    if (!studentId || !classId) {
      return res
        .status(400)
        .json({ message: "studentId or classId is missing" });
    }

    const student = await User.findOne({
      where: { id: studentId, role: "student" },
    });
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const classExists = await Class.findOne({ where: { id: classId } });
    if (!classExists) {
      return res.status(404).json({ message: "Class not found" });
    }

    const newAttendance = await Attendance.create({
      studentId,
      classId,
      attendanceDate,
      status,
    });

    res.status(201).json(newAttendance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
