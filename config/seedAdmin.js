import db from "./../models/index.js";

const User = db.User;

export const seedAdminUser = async () => {
	try {
		const adminEmail = "admin@mail.com";
		const adminPassword = "0000"
		
		const adminUser = await User.findOne({ where: { email: adminEmail, role: "admin" } });
		
		if (!adminUser) {
			await User.create({
				firstName: "Default",
				lastName: "Admin",
				email: adminEmail,
				password: adminPassword,
				role: "admin",
			});
			
			console.log("Admin user created successfully");
		} else {
			console.log("Admin user already exists");
		}
		
	} catch (err) {
		console.error(err);
	}
};