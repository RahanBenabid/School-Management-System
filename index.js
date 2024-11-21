import express from "express";
import { sequelize, connectDB } from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import classRoutes from "./routes/classRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import gradeRoutes from "./routes/gradeRoutes.js";
import subjectRoutes from "./routes/subjectRoutes.js";
import authRoutes from "./routes/auth.js";
import searchRoutes from "./routes/searchRoutes.js";

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

// routes
app.use("/api/users", userRoutes);
app.use("/api/subjects", subjectRoutes);
app.use("/api/classes", classRoutes);
app.use("/api/attendances", attendanceRoutes);
app.use("/api/grades", gradeRoutes);
app.use("/api/search", searchRoutes);

// protected
app.use("/auth", authRoutes);


// db syncronization + server setup
const startServer = async () => {
  try {
    await connectDB();
    await sequelize.sync({ alter: true });
    console.log("Tables created.");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Error starting the server:", err);
  }
};

startServer();
