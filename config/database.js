import { sequelize } from "../models/index.js";
import { seedAdminUser } from "./seedAdmin.js";

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established");
    await seedAdminUser();
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
};