// models/index.js
import Sequelize from "sequelize";
import { sequelize } from "../config/database.js";
import UserModel from "./User.js";

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = UserModel(sequelize);

export default db;