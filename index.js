// app.js
import express from "express";
import { sequelize, connectDB } from "./config/database.js";
import userRoutes from "./routes/userRoutes.js";
import classRoutes from "./routes/classRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/classes", classRoutes);

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Tables created.");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

try {
  await connectDB();

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
} catch (err) {
  console.error("Error starting the server:", err);
}
