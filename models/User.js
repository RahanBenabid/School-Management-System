// models/User.js
import { DataTypes } from "sequelize";

const User = (sequelize) => {
  return sequelize.define("Users", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("teacher", "student", "admin", "parent"),
      allowNull: false,
      defaultValue: "student",
    },
  });
};

export default User;
