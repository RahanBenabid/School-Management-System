import express from "express";
import { createAttendance } from "../controllers/attendanceController.js";
const router = express.Router();

router.post("/", createAttendance);

export default router;
