import { DataTypes } from "sequelize";
import User from "./User.js";
import Class from "./Class.js";

const Attendance = (sequelize) => {
  return sequelize.define(
    "Attendance",
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
      classId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Class(sequelize),
          key: "id",
        },
        onDelete: "RESTRICT",
      },
      attendanceDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("present", "absent", "late"),
        allowNull: false,
      },
    },
    {
      timestamps: true,
    },
  );
};

export default Attendance;
