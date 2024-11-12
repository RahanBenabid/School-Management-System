import { DataTypes } from "sequelize";
import User from "./User.js";
import Subject from "./Subject.js"

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
        model: User(sequelize), // reference the User model
        key: "id", // foreign key for the User's id
      },
      onDelete: "RESTRICT", // to not be able to delete a user
    },
    subjectId: { // Foreign key linking to Subject model
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Subject(sequelize), // Reference to the Subject model
        key: "id",
      },
      onDelete: "CASCADE",
    },
  });

  return ClassModel;
};

export default Class;
