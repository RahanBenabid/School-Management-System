import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("school_management", "root", "", {
  host: "localhost",
  dialect: "mysql",
  // logging: false, // diable the annoying stuff in the console
  logging: (msg) => {
    if (msg.includes("ERROR")) {
      console.error(msg);
    }
  },
});

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection established");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
};
