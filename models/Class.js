import { DataTypes } from "sequelize";

const Class = (sequelize) => {
	return sequelize.define("Class" , {
		className: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		classDescription: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	});
};

export default Class:;