import { DataTypes } from "sequelize";
import User from "./User.js";

const Class = (sequelize) => {
  const ClassModel = sequelize.define("Class", {
    className: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    classDescription: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User(sequelize), // Referencing the User model
        key: "id", // Foreign key on User's id
      },
      onDelete: "RESTRICT", // to not be able to delete a user
    },
  });

  return ClassModel;
};

export default Class;
