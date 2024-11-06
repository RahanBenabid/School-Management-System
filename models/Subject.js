import { DataTypes } from "sequelize";

const Subject = (sequelize) => {
	return sequelize.define("Subject", {
		subjectName: {
			type: DataTypes
		}
	})
}