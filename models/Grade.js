import { DataTypes } from "sequelize";
import User from "./User.js";
import Subject from "./Subject.js";

const Grade = (sequelize) => {
  return sequelize.define(
    "Grade",
    {
      studentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: User(sequelize),
          key: "id",
        },
        onDelete: "RESTRICT",
      },
      subjectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Class(sequelize),
          key: "id",
        },
        onDelete: "RESTRICT",
      },
      grade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      gradeType: {
        type: DataTypes.ENUM("evaluation", "exam", "project"),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    }
  );
};

export default Grade;
