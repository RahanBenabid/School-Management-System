import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authenticateToken = (req, res, next) => {
	try {
		const authHeader = req.headers['authorization'];
		const token = authHeader && authHeader.split(' ')[1].replace(/"/g, '');
		
		if (!token) {
			return res.status(401).json({ message: "Access token required" });
		}
		
		jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
			if (err) {
				return res.status(403).json({ message: "Invalid or expired token" });
			}
			req.user = user;
			next();
		});
	} catch (err) {
		console.error(err);
		return res.status(500).json({ message: "error when authenticating" });
	}
};

export { authenticateToken };