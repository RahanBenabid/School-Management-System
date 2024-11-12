import Sequelize from "sequelize";
import { sequelize } from "../config/database.js";
import UserModel from "./User.js";
import ClassModel from "./Class.js";
import SubjectModel from "./Subject.js";
import AttendanceModel from "./Attendance.js";
import GradeModel from "./Grade.js";

// import required dependencies from sequelize and local files
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// define the models
db.User = UserModel(sequelize, Sequelize.DataTypes);
db.Class = ClassModel(sequelize, Sequelize.DataTypes);
db.Subject = SubjectModel(sequelize, Sequelize.DataTypes);
db.Attendance = AttendanceModel(sequelize, Sequelize.DataTypes);
db.Grade = GradeModel(sequelize, Sequelize.DataTypes);

// defining the relationships

// user and class
db.User.hasMany(db.Class, { foreignKey: "teacherId" });
db.Class.belongsTo(db.User, { foreignKey: "teacherId" });

// Subject
// a subject can have many classes
db.Subject.hasMany(db.Class, { foreignKey: "subjectId" });
db.Class.belongsTo(db.Subject, { foreignKey: "subjectId" })

// Attendance
// user has many attendances
db.User.hasMany(db.Attendance, { foreignKey: "studentId" });
db.Attendance.belongsTo(db.User, { foreignKey: "studentId" });
// class has many attendances
db.Class.hasMany(db.Attendance, { foreignKey: "classId" });
db.Attendance.belongsTo(db.Class, { foreignKey: "classId" });

// Grade
// the student has many grades
db.User.hasMany(db.Grade, { foreignKey: "studentId" });
db.Grade.belongsTo(db.User, { foreignKey: "studentId" });
// subject has many grades
db.Subject.hasMany(db.Grade, { foreignKey: "subjectId" });
db.Grade.belongsTo(db.Subject, { foreignKey: "subjectId" });



export default db;
