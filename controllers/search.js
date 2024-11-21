import db from "./../models/index.js";
import { Op } from "Sequelize";

const User = db.User;
const Grade = db.Grade;

export const getGrades = async (req, res) => {
	try {
		const { name } = req.query;
		
		const user = await User.findAll({
			where: {
				[Op.or]: [
					{ firstName: { [Op.like]: `%${name}%` } },
					{ lastName: { [Op.like]: `%${name}%` } }
				]
			},
			include: [{
				model: Grade,
				required: false
			}]
		});
		
		if (!user || user.length === 0) {
			res.status(404).json({ message: 'No users found' });
		}
		
		res.json(user);
	} catch (err) {
		console.error(err);
		res.status(400).json({ message: err.message });
	}
}