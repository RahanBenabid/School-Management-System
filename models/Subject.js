import { DataTypes } from "sequelize";

const Subject = (sequelize) => {
  return sequelize.define("Subject", {
    subjectName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};

export default Subject;
