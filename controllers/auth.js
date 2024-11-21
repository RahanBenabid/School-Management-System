import db from "./../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const registerUser = async (req, res) => {
	try {
		const { firstName, lastName, email, password, role } = req.body;
		
		// we make sure the user DOES NOT exist
		const userExists = await db.User.findOne({ where: {email} });
		if(userExists) {
			return res.status(400).json({ message: "Email is already associated with an acount" });
		}
		
		const createdUser = await db.User.create({
			firstName,
			lastName,
			email,
			password,
			role
		});
		
		const token = jwt.sign(
			{ id: createdUser.id, email: createdUser.email },
			process.env.TOKEN_SECRET, 
			{ expiresIn: "1h" }
		);
		
		// we exclude pw
		return res.status(201).json({
			id: createdUser.id,
			firstName: createdUser.firstName,
			lastName: createdUser.lastName,
			email: createdUser.email,
			role: createdUser.role,
			token
		});
		
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "Error in registering the user" });
	}
}

const signInUser = async (req, res) => {
	try {
		const { email, password } = req.body;
		
		const user = await db.User.findOne({
			where: {email}
		});
		if(!user) return res.status(404).json("Email not found");

		
		// verify password
		const isMatch = await user.validPassword(password);
		if(!isMatch) return res.status(401).json("password incorrect");
		
		// authenticate
		const token = jwt.sign(
			{ id: user.id, email: user.email },
			process.env.TOKEN_SECRET, 
			{ expiresIn: "1h" }
		);
		
		res.status(200).send({
			id: user.id,
			email: user.email,
			role: user.role,
			accessToken: token,
		});
		
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: "sign in error" });
	}
}


export { registerUser, signInUser };