import Sequelize from "sequelize";
import { sequelize } from "../config/database.js";
import UserModel from "./User.js";
import ClassModel from "./Class.js";
import SubjectModel from "./Subject.js";
import AttendanceModel from "./Attendance.js";

// import required dependencies from sequelize and local files
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// define the models
db.User = UserModel(sequelize, Sequelize.DataTypes);
db.Class = ClassModel(sequelize, Sequelize.DataTypes);
db.Subject = SubjectModel(sequelize, Sequelize.DataTypes);
db.Attendance = AttendanceModel(sequelize, Sequelize.DataTypes);

// define the relationships
db.User.hasMany(db.Class, { foreignKey: "teacherId" });
db.Class.belongsTo(db.User, { foreignKey: "teacherId" });

// will add later
// db.Subject.hasMany(db.Class, { foreignKey: "subjectId" });
// db.Class.belongsTo(db.Subject, { foreignKey: "subjectId" });

db.User.hasMany(db.Attendance, { foreignKey: "studentId" });
db.Attendance.belongsTo(db.User, { foreignKey: "studentId" });

db.Class.hasMany(db.Attendance, { foreignKey: "classId" });
db.Attendance.belongsTo(db.Class, { foreignKey: "classId" });

export default db;
