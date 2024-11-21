import db from "./../models/index.js";

const Subject = db.Subject;

export const createSubject = async (req, res) => {
	try {
		const subject = await db.Subject.create(req.body);
		res.status(201).json(subject);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
}