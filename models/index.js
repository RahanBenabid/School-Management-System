import Sequelize from "sequelize";
import { sequelize } from "../config/database.js";
import UserModel from "./User.js";
import ClassModel from "./Class.js";
import SubjectModel from "./Subject.js";

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// define the models
db.User = UserModel(sequelize, Sequelize.DataTypes);
db.Class = ClassModel(sequelize, Sequelize.DataTypes);
db.Subject = SubjectModel(sequelize, Sequelize.DataTypes);

// define the relationships
db.User.hasMany(db.Class, { foreignKey: "teacherId" });
db.Class.belongsTo(db.User, { foreignKey: "teacherId" });

db.Subject.hasMany(db.Class, { foreignKey: "subjectId" });
db.Class.belongsTo(db.Subject, { foreignKey: "subjectId" });

export default db;
